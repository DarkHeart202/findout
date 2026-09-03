"use client";
import { useContext, createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();
export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("my_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("my_favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(place) {
    setFavorites((prev) => {
      const exist = prev.some((item) => item.id === place.id); //هنا بنشوف لو اللعنصر ال بندوس عليه موجود فالمفضله ولالا
      if (exist) {
        return prev.filter((item) => item.id !== place.id); //حذف
      } else {
        return [...prev, place];
      }
    });
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }
  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};
