import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar: React.FC = () => {
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
          <form className="space-y-4">
            <div>
              <label className="block text-gray-200">Lieu Départ</label>
              <input
                type="text"
                defaultValue="KECH Aéroport International"
                className="w-full p-2 mt-1 rounded-md border border-gray-300 bg-slate-300 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-200">Destination</label>
              <input
                type="text"
                defaultValue="PARIS Aéroport International"
                className="w-full p-2 mt-1 rounded-md border border-slate-400 bg-slate-300 text-gray-700"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="block text-gray-200">Date de départ</label>
                <input
                  type="datetime-local"
                  defaultValue="11-30"
                  className="w-full p-2 mt-1 rounded-md border border-gray-300 bg-slate-300 text-gray-700"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-200">
                  Nombre de Passager
                </label>
                <input
                  type="number"
                  defaultValue="10"
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
          {/* Footer */}
          <div className="text-center mt-4 text-sm text-gray-500">
            Contactez-nous
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
