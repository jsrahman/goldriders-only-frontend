
import { create } from "zustand";
 
export const useBackdropStore = create((set, get) => ({
  isOpen: false,
  onClose: null,

  open: (cb) =>
    set({
      isOpen: true,
      onClose: cb || null,
    }),

  close: () => {
    const { onClose } = get();
    if (onClose) onClose();

    set({
      isOpen: false,
      onClose: null,
    });
  },
}));
