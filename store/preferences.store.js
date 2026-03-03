import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePreferencesStore = create(
  persist(
    (set) => ({
      preferences: {
        isAcceptCookie: false,
        isAuthenticated: false,
        isAuth: false,
        langInfo: {
          id: 0,
          name: "English",
          short: "Eng",
          img: "/images/lang/en.png",
        },
      },

      setPreferences: (data) =>
        set((state) => ({
          preferences: {
            ...state.preferences,
            ...data,
          },
        })),

      clearPreferences: () => set({ preferences: {} }),
    }),
    {
      name: "preferences-storage",
    }
  )
);
