import { vol } from "@/interfaces/Interfaces";
import { create } from "zustand";

interface CartStore {
  cart: vol[];
  addToCart: (product: vol) => void;
  removeFromCart: (productId: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (vol) =>
    set((state) => ({
      cart: [...state.cart, vol],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));

export default useCartStore;
