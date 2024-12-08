"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";

const EquipageDeCabine = () => {
  const isToggled = true;

  // Données de l'équipage de cabine
  const cabinCrewData = {
    personnelActif: 85,
    enFormation: 12,
    heuresDeVol: 8320,
    languesParlees: 15,
  };

  // Liste des membres de l'équipage
  const cabinCrewMembers = [
    {
      id: "CABD01",
      name: "Marie Martin",
      email: "marie.martin@airfrance.com",
      position: "Chef de Cabine",
      base: "Paris CDG",
      certifications: ["SIV", "AED", "ME"],
      status: "En service",
      actions: ["Editer", "Supprimer"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-200 min-h-screen p-6 w-full ${
        isToggled ? "pl-72" : "pl-24"
      }`}
    >
      {/* Titre principal */}
      <h2 className="text-2xl font-bold mb-4">
        Gestion de l'Équipage de Cabine
      </h2>

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Personnel Actif", value: cabinCrewData.personnelActif },
          { title: "En Formation", value: cabinCrewData.enFormation },
          {
            title: "Heures de Vol",
            value: cabinCrewData.heuresDeVol.toLocaleString(),
          },
          { title: "Langues Parlées", value: cabinCrewData.languesParlees },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center"
          >
            <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
            <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tableau des membres */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 w-full"
      >
        <h3 className="text-lg font-bold mb-4">Membres de l'Équipage</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                {[
                  "ID",
                  "Nom",
                  "Poste",
                  "Base",
                  "Certifications",
                  "Statut",
                  "Actions",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cabinCrewMembers.map((member) => (
                <tr key={member.id} className="border-b last:border-0">
                  <td className="px-4 py-2 text-sm">{member.id}</td>
                  <td className="px-4 py-2 text-sm">{member.name}</td>
                  <td className="px-4 py-2 text-sm">{member.position}</td>
                  <td className="px-4 py-2 text-sm">{member.base}</td>
                  <td className="px-4 py-2 text-sm">
                    {member.certifications.join(", ")}
                  </td>
                  <td className="px-4 py-2 text-sm">{member.status}</td>
                  <td className="px-4 py-2 text-sm flex space-x-2">
                    <div className="ml-4 flex justify-end mt-4">
                      <FaEdit className="text-blue-500 text-2xl" />
                      <FaTrash className="ml-2 text-red-500 text-2xl" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EquipageDeCabine;
