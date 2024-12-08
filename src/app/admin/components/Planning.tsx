"use client";
import React from "react";
import { color, motion } from "framer-motion";
import {
  AiOutlineExport,
  AiOutlineTeam,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import { useToggleSideBar } from "../toggleSidebar";
const Planning = () => {
  const isToggled = true;
  const equipageData = [
    {
      id: "AF1234",
      route: "CDG→MAD",
      timeslot: "09:00-10:30",
      type: "Vol court-courrier",
    },
    {
      id: "AF380",
      route: "CDG→JFK",
      timeslot: "14:00-21:30",
      type: "Vol long-courrier",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-200   p-6  w-full min-h-screen  ${
        isToggled ? "pl-72" : "pl-24"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Planning des Équipages</h2>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold  px-2 rounded mr-2">
            + Nouveau Vol
          </button>

          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2 flex justify-end mt-4">
            <AiOutlineExport className=" text-2xl mr-2" /> Exporter
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="relative mr-4">
            <select className="appearance-none bg-white border border-gray-400 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500">
              <option>Tous les équipages</option>
              <option>Toutes les bases</option>
              <option>Tous les appareils</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <input
            type="text"
            className="border rounded px-2 py-2 w-full mr-6"
            placeholder="jj/mm/aaaa"
          />
          <div className="flex justify-end mt-4">
            <button className=" hover:bg-gray-100 text-black items-center font-bold py-2 px-4 rounded ml-2">
              <MdFilterList className=" text-4xl text-black" /> Filtrer
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Vol</th>
                <th className="px-4 py-2 text-left">Route</th>
                <th className="px-4 py-2 text-left">Créneau</th>
                <th className="px-4 py-2 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {equipageData.map((equipage) => (
                <tr key={equipage.id}>
                  <td className=" px-4 py-2">{equipage.id}</td>
                  <td className=" px-4 py-2">{equipage.route}</td>
                  <td className=" px-4 py-2">{equipage.timeslot}</td>
                  <td className=" px-4 py-2">{equipage.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Planning;
