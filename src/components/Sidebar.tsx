import React from "react";

const Sidebar: React.FC = () => {
  const menuItems = [
    "Tableau de Bord",
    "Réservations",
    "Vols",
    "Équipage",
    "Administration",
  ];

  return (
    <div className="w-64 bg-[#2b2b3c] h-full p-6">
      <h3 className="text-xl font-semibold mb-6">Administrateur</h3>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-400 hover:text-white hover:font-medium cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
