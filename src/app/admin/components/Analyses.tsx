"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { color, motion } from "framer-motion";
// import { useToggleSideBar } from '../../toggleSidebar';
// exempl de Ds pour  graphique(data.js)
const data = [
  { name: "Jan", value: 100, goal: 120 },
  { name: "Fév", value: 80, goal: 110 },
  { name: "Mar", value: 90, goal: 100 },
  { name: "Avr", value: 110, goal: 130 },
  { name: "Mai", value: 95, goal: 105 },
  { name: "Juin", value: 85, goal: 95 },
];

const Analyses = () => {
  // const { isToggled } = useToggleSideBar();
  const isToggled = true;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-200   p-6  w-full min-h-screen  ${
        isToggled ? "pl-72" : "pl-24"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Analyses</h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 w-full"
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Line type="monotone" dataKey="goal" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default Analyses;
