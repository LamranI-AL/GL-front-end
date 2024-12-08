import Image from "next/image";
import React from "react";

interface Endroit {
  title: string;
  price: string;
  image: string;
}
const endroits: Endroit[] = [
  { title: "Las Vegas", price: "$145", image: "/america.jpg" },
  { title: "Phoenix", price: "$192", image: "/america.jpg" },
  { title: "Houston", price: "$327", image: "/america.jpg" },
  { title: "Chicago", price: "$289", image: "/america.jpg" },
];

const PopularDestinations: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {endroits.map((endroit, index) => (
        <div key={index} className="relative group">
          <Image
            src={endroit.image}
            alt={endroit.title}
            className="w-full h-48 object-cover rounded-lg shadow-md"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <div className="text-white text-center">
              <h3 className="text-lg font-semibold">{endroit.title}</h3>
              <p>{`Billets à partir de ${endroit.price}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDestinations;
