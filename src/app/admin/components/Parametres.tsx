"use client";
import React, { useState } from "react";
import { color, motion } from "framer-motion";
// import { useToggleSideBar } from '../../toggleSidebar';
import {
  FaCog,
  FaShieldAlt,
  FaBell,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import { useToggleSideBar } from "../toggleSidebar";
const Parametres = () => {
  const isToggled = true;
  /*
  const [language, setLanguage] = useState('Français');
  const [timeZone, setTimeZone] = useState('Europe/Paris (UTC+)');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [audioNotifications, setAudioNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [activeSessions, setActiveSessions] = useState([]);
  const [autoSaveData, setAutoSaveData] = useState(true);
  const [dataRetention, setDataRetention] = useState(true);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleEmailNotificationsChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handlePushNotificationsChange = () => {
    setPushNotifications(!pushNotifications);
  };

  const handleAudioNotificationsChange = () => {
    setAudioNotifications(!audioNotifications);
  };

  const handleTwoFactorAuthChange = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  const handleAutoSaveDataChange = () => {
    setAutoSaveData(!autoSaveData);
  };

  const handleDataRetentionChange = () => {
    setDataRetention(!dataRetention);
  };

  const handleLogoutActiveSessions = () => {
  };

  const handlePasswordChange = () => {
   
  };
*/
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-200   p-6  w-full min-h-screen  ${
        isToggled ? "pl-72" : "pl-24"
      }`}
    >
      <h2 className="text-3xl font-bold ">Paramètres</h2>
      <p className="  mb-6">Gerer les parametres de votre application</p>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <FaCog className="text-gray-700 text-xl" />
          <a href="#" className="hover:underline decoration-blue-500">
            Général
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-gray-700 text-xl" />
          <a href="#securite" className="hover:underline decoration-blue-500">
            Sécurité
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaBell className="text-gray-700 text-xl" />
          <a href="#notif" className="hover:underline decoration-blue-500">
            Notifications
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaDatabase className="text-gray-700 text-xl" />
          <a href="#donnees" className="hover:underline decoration-blue-500">
            Données
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaUsers className="text-gray-700 text-xl" />
          <a href="#ab" className="hover:underline decoration-blue-500">
            Utilisateurs
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-bold mb-4">
            Paramètres de l'application
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between ">
              <span>Langue par défaut</span>
              <span>Français</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Fuseau horaire</span>
              <span>Europe/Paris (UTC+1)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Mode sombre</span>
              <div className="form-switch">
                <input type="checkbox" className="form-switch-checkbox" />
                <label className="form-switch-label"></label>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 id="notif" className="text-lg font-bold mb-4">
            Préférences de Notification
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Notifications par email</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
            <div className="flex justify-between items-center">
              <span>Notifications push</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
            <div className="flex justify-between items-center">
              <span>Notifications sonores</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
          </div>
        </section>

        <section>
          <h2 id="securite" className="text-lg font-bold mb-4">
            Sécurité
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Authentification à deux facteurs</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
            <div className="flex justify-between items-center">
              <span>Sessions actives</span>
              <a href="#" className="text-blue-500 underline">
                Voir les sessions
              </a>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-500 underline">
              Changer le mot de passe
            </a>
          </div>
        </section>

        <section>
          <h2 id="donnees" className="text-lg font-bold mb-4">
            Gestion des Données
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Sauvegarde automatique</span>
              <span>Toutes les 24h</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Rétention des données</span>
              <span>90 jours</span>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-500 underline">
              Exporter les données
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Parametres;
