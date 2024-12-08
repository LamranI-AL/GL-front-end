import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar: React.FC = () => {
  return (
    <div className="container mx-auto bg-gray-50 p-6 shadow-lg rounded-lg -mt-16">
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select className="border-gray-300 rounded-md p-3">
          <option>Aller-retour</option>
          <option>Aller simple</option>
        </select>
        <Input
          type="text"
          placeholder="Ville, aéroport ou lieu"
          className="border-gray-300 rounded-md p-3"
        />
        <Input type="date" />
        <Input type="date" className="border-gray-300 rounded-md p-3" />
        <Button
          variant={"outline"}
          className="text-blue-500 hover:text-white border-indigo-500 hover:bg-indigo-700"
        >
          Explorer
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
