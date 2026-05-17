import { useState, useCallback } from "react";
import axios from "axios";
import API_URL from "../config";
import ALL_SONGS from "../mockData";

// ─────────────────────────────────────────────────────────────
//  useSongs — fetches songs from backend OR mock data
// ─────────────────────────────────────────────────────────────
export function useSongs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usingMock, setUsingMock] = useState(false);

  const fetchSongs = useCallback(async (mood, language) => {
    setLoading(true);

    // If no backend URL is configured → use mock data directly
    if (!API_URL) {
      let filtered = [...ALL_SONGS];
      if (mood && mood !== "all") filtered = filtered.filter(s => s.mood === mood);
      if (language && language !== "all") filtered = filtered.filter(s => s.language === language);
      setSongs(filtered);
      setUsingMock(true);
      setLoading(false);
      return;
    }

    // Try backend; fall back to mock on error
    try {
      const params = {};
      if (mood && mood !== "all") params.mood = mood;
      if (language && language !== "all") params.language = language;
      const { data } = await axios.get(`${API_URL}/api/songs`, { params, timeout: 5000 });
      setSongs(data.songs);
      setUsingMock(false);
    } catch {
      let filtered = [...ALL_SONGS];
      if (mood && mood !== "all") filtered = filtered.filter(s => s.mood === mood);
      if (language && language !== "all") filtered = filtered.filter(s => s.language === language);
      setSongs(filtered);
      setUsingMock(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { songs, loading, usingMock, fetchSongs };
}

// ─────────────────────────────────────────────────────────────
//  useFavorites — backend if available, else localStorage
// ─────────────────────────────────────────────────────────────
export function useFavorites() {
  const STORAGE_KEY = "moodtunes_favorites";

  const loadFromStorage = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  };

  const saveToStorage = (favs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
  };

  const [favorites, setFavorites] = useState(loadFromStorage);

  const fetchFavorites = useCallback(async () => {
    if (!API_URL) {
      setFavorites(loadFromStorage());
      return;
    }
    try {
      const { data } = await axios.get(`${API_URL}/api/favorites`, { timeout: 5000 });
      setFavorites(data.favorites);
    } catch {
      setFavorites(loadFromStorage());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFavorite = useCallback(async (song) => {
    if (!API_URL) {
      const current = loadFromStorage();
      if (current.find(f => f.id === song.id)) return "duplicate";
      const updated = [...current, { ...song, addedAt: new Date().toISOString() }];
      saveToStorage(updated);
      setFavorites(updated);
      return "added";
    }
    try {
      await axios.post(`${API_URL}/api/favorites`, song, { timeout: 5000 });
      await fetchFavorites();
      return "added";
    } catch (err) {
      if (err.response?.status === 409) return "duplicate";
      // fallback to localStorage
      const current = loadFromStorage();
      if (current.find(f => f.id === song.id)) return "duplicate";
      const updated = [...current, { ...song, addedAt: new Date().toISOString() }];
      saveToStorage(updated);
      setFavorites(updated);
      return "added";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFavorites]);

  const removeFavorite = useCallback(async (songId) => {
    if (!API_URL) {
      const updated = loadFromStorage().filter(f => f.id !== songId);
      saveToStorage(updated);
      setFavorites(updated);
      return;
    }
    try {
      await axios.delete(`${API_URL}/api/favorites/${songId}`, { timeout: 5000 });
      await fetchFavorites();
    } catch {
      const updated = loadFromStorage().filter(f => f.id !== songId);
      saveToStorage(updated);
      setFavorites(updated);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFavorites]);

  const isFavorited = useCallback((id) => favorites.some(f => f.id === id), [favorites]);

  return { favorites, fetchFavorites, addFavorite, removeFavorite, isFavorited };
}
