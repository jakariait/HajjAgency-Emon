"use client";

import { useEffect } from "react";
import useAuthAdminStore from "@/store/AuthAdminStore";
import useCartStore from "@/store/useCartStore"; // Import useCartStore

export default function AuthInitializer() {
  useEffect(() => {
    useAuthAdminStore.getState().initialize();
    useCartStore.getState().initializeCart(); // Initialize cart store
  }, []);

  return null; // This component doesn't render anything itself
}
