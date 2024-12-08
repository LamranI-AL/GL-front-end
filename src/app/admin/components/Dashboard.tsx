"use client";
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
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlane,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { MdCalendarToday, MdNotifications } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
// import { useToggleSideBar } from "../toggleSidebar";
const reservationsData = [
  { month: "Jan", value: 130 },
  { month: "Fev", value: 160 },
  { month: "Mar", value: 175 },
  { month: "Avr", value: 190 },
  { month: "Mai", value: 200 },
  { month: "Jun", value: 160 },
];

const popularDestinationsData = [
  { destination: "Zagora", value: 355 },
  { destination: "Rissani", value: 255 },
  { destination: "Ouarzazate", value: 375 },
  { destination: "Tingir", value: 235 },
  { destination: "Tata", value: 195 },
  { destination: "Agadir", value: 155 },
  { destination: "kesh", value: 155 },
];
const Dashboard = () => {
  const isToggled = true;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-gray-200   p-6  w-full ${isToggled ? "pl-72" : "pl-24"}  `}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 ">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <MdNotifications className="text-orange-500 bg-white text-4xl p-1 rounded" />
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Admin
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        <div className="bg-[#8174A0]   text-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Vols Actifs</h3>
            <FaPlane className="text-4xl text-[#8174A0]  bg-[#A888B5]  rounded-lg p-1" />
          </div>
          <p className="text-4xl font-bold mb-12 mt-6">42</p>
          <div className="flex items-center ">
            <FaArrowUp />
            <p className="text-sm">+12% vs hier</p>
          </div>
        </div>
        <div className="bg-[#A888B5] text-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold mb-4">Equipage en Service</h3>
            <FaUsers className="te text-4xl text-green-800 bg-[#F0C1E1] rounded-lg p-1" />
          </div>
          <p className="text-4xl font-bold mb-12 ">85</p>
          <div className="flex items-center ">
            <FaArrowUp />
            <p className="text-sm">+45% vs hier</p>
          </div>
        </div>
        <div className="bg-[#EFB6C8] text-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold mb-4">Réservations confirmer</h3>
            <MdCalendarToday className="text-4xl text-red-800 bg-[#E7CCCC] rounded-lg p-1 " />
          </div>
          <p className="text-4xl font-bold mb-12 mt-6">156</p>
          <div className="flex items-center ">
            <FaArrowDown />
            <p className="text-sm">-3% vs hier</p>
          </div>
        </div>
        <div className="bg-[#FFD2A0] text-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold mb-4">Réservations en attente</h3>
            <AiOutlineDollarCircle className="text-4xl rounded-lg p-1 text-yellow-700 bg-[#FFDBB5]" />
          </div>

          <p className="text-4xl font-bold mb-12 mt-6">25</p>
          <div className="flex items-center ">
            <FaArrowUp />
            <p className="text-sm">+8% vs hier</p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Équipe de Cabine</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-500 p-2 mr-2">
                <FaUserAlt className="text-white" />
              </div>
              <span>Michel Lambert</span>
            </div>
            <span>Commandant de Bord</span>
            <span>PAR-NYC #AF001</span>
            <span className="  bg-green-200 rounded-lg p-2 ">En Service</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 mt-6 w-full"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Reservations Mensuelles</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={reservationsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Destinations Populaires</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={popularDestinationsData}>
                  <XAxis dataKey="destination" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
