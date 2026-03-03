"use client";

import { useBackdropStore } from "@/store/backdrop.store";

export default function Backdrop() {
  const { isOpen, close } = useBackdropStore();

  if (!isOpen) return null;

  return <div onClick={close} className="backdrop-overlay" />;
}
