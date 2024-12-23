"use client";
import React from "react";
import { Button } from "../ui/button";
import { useSearchStore } from "@/_store/Store";
import { vol } from "@/interfaces/interfaces";
import { getVolsComplet } from "@/_services/Vols";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const { setVol, vol, setVols, volss } = useSearchStore();

  const submitReservation = async (formData: FormData) => {
    try {
      const vols = await getVolsComplet();
      const originePlace = formData.get("originePlace") as string;
      const destinationPlace = formData.get("destinationPlace") as string;
      const startDate = formData.get("startDate") as string;
      const passengerNumber = formData.get("passengerNumber") as string;

      const newVol: vol | any = {
        aeroportOrigin: originePlace,
        aeroportDestination: destinationPlace,
        startDate: new Date(startDate),
      };

      setVol(newVol);

      const filtredData = vols?.filter(
        (vol: vol) =>
          vol.aeroportOrigin.toLowerCase() === originePlace.toLowerCase() &&
          vol.aeroportDestination.toLowerCase() ===
            destinationPlace.toLowerCase()
      );

      setVols(filtredData as any);
      router.push("/reservation");
    } catch (error) {
      console.error("Error finding flights:", error);
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/homePage1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>

      <div className="relative flex justify-center items-center h-full">
        <div className="p-8  rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-white mb-6">
            HightFly
          </h1>
          <form className="space-y-6" action={submitReservation}>
            <div>
              <label className="block text-white font-medium">
                Lieu Départ
              </label>
              <input
                type="text"
                name="originePlace"
                placeholder="Ex: KECH Aéroport International"
                className="w-full p-3 mt-1 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium">
                Destination
              </label>
              <input
                type="text"
                name="destinationPlace"
                placeholder="Ex: PARIS Aéroport International"
                className="w-full p-3 mt-1 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-white font-medium">
                  Date de départ
                </label>
                <input
                  type="datetime-local"
                  name="startDate"
                  className="w-full p-3 mt-1 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-white font-medium">
                  Nombre de Passagers
                </label>
                <input
                  type="number"
                  name="passengerNumber"
                  placeholder="1"
                  className="w-full p-3 mt-1 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full text-gray-200 bg-gradient-to-r from-teal-700 via-slate-600 to-teal-700 py-3 rounded-md font-semibold text-center"
            >
              Rechercher un vol
            </Button>
          </form>

          <div className="text-center mt-6 text-sm text-teal-700">
            Besoin d'aide ?{" "}
            <a href="/contact" className="text-teal-900 hover:underline">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
