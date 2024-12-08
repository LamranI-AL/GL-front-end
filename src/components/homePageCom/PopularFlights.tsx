import Image from "next/image";
import React from "react";

const popularFlights = [
  { from: "Kesh", to: "Lisbonne", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Nice", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Porto", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Paris", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Marrakech", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Milan", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Athènes", scrImage: "/america.jpg" },
  { from: "Kesh", to: "Budapest", scrImage: "/america.jpg" },
  { from: "Casa", to: "Barcelone", scrImage: "/america.jpg" },
  { from: "Casa", to: "Malte", scrImage: "/america.jpg" },
];

export const PopularFlights = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {popularFlights.map((flight, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition flex flex-col items-center text-center"
        >
          {/* Image */}
          <div className="mb-3">
            <Image
              src={flight.scrImage} // Replace with your actual image URL
              alt="Flight Image"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Flight Info */}
          <h3 className="text-lg font-semibold">{`${flight.from} ➔ ${flight.to}`}</h3>
        </div>
      ))}
    </div>
  );
};
