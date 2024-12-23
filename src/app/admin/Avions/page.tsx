"use client";
import React, { useEffect, useState } from "react";
import Avion from "../components/Avion";
import { getAvionsComplet } from "@/_services/avions";
import { getTokenClient } from "@/app/reservation/_components/identification";

export default function page() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Utilisateur non authentifié. Token introuvable.");
  }
  console.log(token);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAvionsComplet(token);
        setData(result);
        console.log(result);
      } catch (err) {
        setError(err as unknown);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // const data = await getAvionsComplet(token);
  console.log(token);
  // console.log(data);
  // const data: any = [];
  console.log(data);
  return (
    <div className="pl-72 pt-5">
      <Avion data={data as any} />
    </div>
  );
}
