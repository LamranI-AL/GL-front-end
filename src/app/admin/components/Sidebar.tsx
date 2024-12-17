"use client";
import {
  FaHome,
  FaPlane,
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaParking,
  FaPlaneDeparture,
} from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const SIDEBAR_ITEMS = [
  {
    heading: "Menu Principal",
    items: [
      { name: "Dashboard", icon: FaHome, color: "#6366f1", href: "/admin" },
      {
        name: "Aéroports",
        icon: FaParking,
        color: "#8bdcf6",
        href: "/admin/Aeroport",
      },
      {
        name: "Avions",
        icon: FaPlane,
        color: "#f59e0b",
        href: "/admin/Avions",
      },
      {
        name: "Vols",
        icon: FaPlaneDeparture,
        color: "#f59eab",
        href: "/admin/Vols",
      },
    ],
  },
  {
    heading: "Gestion Equipage",
    items: [
      // {
      //   name: "Pilots",
      //   icon: FaUser,
      //   color: "#8c4899",
      //   href: "/admin/Pilotes",
      // },
      {
        name: "Equipage De Cabine",
        icon: FaUsers,
        color: "#40b981",
        href: "/admin/Pilotes",
      },
      // {
      //   name: "Planning",
      //   icon: FaCalendarAlt,
      //   color: "#f59e0b",
      //   href: "/admin/Planning",
      // },
    ],
  },
  {
    heading: "Administration",
    items: [
      {
        name: "Analyses",
        icon: FaChartBar,
        color: "#3b82f6",
        href: "/admin/Analyses",
      },
      {
        name: "Parametres",
        icon: FaCog,
        color: "#6ee7b7",
        href: "/admin/Parametres",
      },
    ],
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isToggled = true;
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen z-10  flex-shrink-0"
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="bg-gray-900 h-full">
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <Link href={"/"}>
            <Image src={"/LOGO.png"} alt="" width={100} height={100} />
          </Link>

          <nav className="mt-2 flex-grow overflow-y-auto">
            {SIDEBAR_ITEMS.map(({ heading, items }) => (
              <div key={heading} className="mb-6">
                <h3 className="text-gray-400 font-medium mb-2 px-2">
                  {isSidebarOpen ? heading : ""}
                </h3>
                {items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className="flex items-center bg-gray-800 p-3 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2"
                      style={{ color: item.color }}
                    >
                      <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      />
                      <AnimatePresence>
                        {isSidebarOpen && (
                          <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
