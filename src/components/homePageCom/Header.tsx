import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/Logo.png"
            alt="HighFly Logo"
            width={500}
            height={500}
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-blue-600">HighFly</h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Vols
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Destinations
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Offres
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Nous contacter
          </a>
        </nav>
        <div className="space-x-4">
          {/* <button className="text-gray-600 hover:text-blue-600">USD</button> */}
          <Button
            variant={"link"}
            className="text-gray-600 hover:text-blue-600"
          >
            Aide
          </Button>
          <Button
            variant={"outline"}
            className="text-blue-500 hover:text-white border-blue-500 hover:bg-blue-700"
          >
            Se connecter
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
