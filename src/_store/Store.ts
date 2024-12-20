import { getVolsComplet } from "@/_services/Vols";
import { vol } from "@/interfaces/Interfaces";
import { supabase } from "@/lib/supabase";
import { create } from "zustand";

interface CartStore {
  cart: vol[];
  addToCart: (product: vol) => void;
  removeFromCart: (productId: string) => void;
}
interface Searchstore {
  vol: vol | null;
  volss: vol[];
  setVols: (vols: vol[]) => void;
  setVol: (vol: vol) => void;
  getFiltredvolByInputSearch: (volInput: vol) => Promise<vol[]>;
}

export const useSearchStore = create<Searchstore>((set) => ({
  vol: null, // Initialisez avec null pour représenter l'absence d'un vol
  volss: [],
  setVols: (volss: vol[]) =>
    set(() => ({
      volss: volss,
    })),
  setVol: (vol: vol) => set(() => ({ vol })),
  getFiltredvolByInputSearch: async (volInput: vol) => {
    try {
      const allVols = await getVolsComplet();
      if (!allVols) return [];

      const filteredVols = allVols.filter((vol) => {
        const volStartDate = new Date(vol.startDate); // Convertir la date de départ du vol
        const userStartDate = new Date(volInput.startDate);

        const isOrigineMatch = vol.originePlace
          .toLowerCase()
          .includes(volInput.aeroportOrigin.toLowerCase());

        const isDestinationMatch = vol.destinationPlace
          .toLowerCase()
          .includes(volInput.aeroportDestination.toLowerCase());

        const isDateMatch = volStartDate >= userStartDate;

        return isOrigineMatch && isDestinationMatch && isDateMatch;
      });

      return filteredVols;
    } catch (error) {
      console.error("Error fetching or filtering vols:", error);
      return [];
    }
  },
}));
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
