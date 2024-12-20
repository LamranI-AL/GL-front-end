"use client";
import React from "react";
import { Button } from "../ui/button";
// import Link from "next/link";
import { useSearchStore } from "@/_store/Store";
import { vol } from "@/interfaces/Interfaces";
import { getVolsComplet } from "@/_services/Vols";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const { setVol, vol, setVols, volss } = useSearchStore();
  const submitReservation = async (formData: FormData) => {
    // try {
    //   const vols = await getVolsComplet();
    // } catch (error) {
    //   console.log("error de trouver les vols pour filter");
    // }
    try {
      const vols = await getVolsComplet();
      const originePlace = formData.get("originePlace") as string;
      const destinationPlace = formData.get("destinationPlace") as string;
      const startDate = formData.get("startDate") as string;
      const passengerNumber = formData.get("passengerNumber");
      const newVol: vol | any = {
        aeroportOrigin: originePlace,
        aeroportDestination: destinationPlace,
        startDate: new Date(startDate),
      };
      setVol(newVol);
      //filtere et trouver les vols qui en la meme origine et meme destination et date apres la date qui entrer le user
      const filtredData: vol[] | any = vols?.filter((vol: vol) => {
        return (
          vol.aeroportOrigin.toLowerCase() === originePlace.toLowerCase() &&
          vol.aeroportDestination.toLowerCase() ===
            destinationPlace.toLowerCase()
        );
      });
      console.log(filtredData);
      setVols(filtredData);
      console.log(volss);
      router.push("/reservation");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // </div>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/homePage1.jpg')" }} // Ensure the image is in the public folder
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-500 to-transparent"></div>

      {/* Content */}
      <div className="relative flex justify-center items-center h-full">
        <div className="bg-slate-50/5 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">
            High Fly
          </h1>
          {/* Form */}
          <form className="space-y-4" action={submitReservation}>
            <div>
              <label className="block text-gray-200">Lieu Départ</label>
              <input
                type="text"
                name="originePlace"
                placeholder="KECH Aéroport International"
                className="w-full p-2 mt-1 rounded-md border border-gray-300 bg-slate-300 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-200">Destination</label>
              <input
                type="text"
                name="destinationPlace"
                placeholder="PARIS Aéroport International"
                className="w-full p-2 mt-1 rounded-md border border-slate-400 bg-slate-300 text-gray-700"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="block text-gray-200">Date de départ</label>
                <input
                  type="datetime-local"
                  name="startDate"
                  placeholder="11-30"
                  className="w-full p-2 mt-1 rounded-md border border-gray-300 bg-slate-300 text-gray-700"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-200">
                  Nombre de Passager
                </label>
                <input
                  type="number"
                  placeholder="10"
                  name="passengerNumber"
                  className="w-full p-2 mt-1 rounded-md border border-gray-300 bg-slate-300 text-gray-700"
                />
              </div>
            </div>
            <Button
              type="submit"
              variant={"outline"}
              className="w-full bg-cyan-800 hover:bg-cyan-600 text-white py-2 rounded-md text-center"
            >
              Trouver un vol
            </Button>
          </form>
          <div className="text-center mt-4 text-sm text-gray-500">
            Contactez-nous
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
