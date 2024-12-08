import React from "react";

const RecentReservations: React.FC = () => {
  const reservations = [
    {
      id: "FL-1234",
      passenger: "Jean Dupont",
      from: "Paris",
      to: "New York",
      date: "27/10/2024",
      status: "Confirmé",
    },
  ];

  return (
    <div className="bg-[#292940] p-6 rounded-lg mb-6">
      <h4 className="text-lg font-semibold mb-4">Réservations Récentes</h4>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="py-2">ID Vol</th>
            <th className="py-2">Passager</th>
            <th className="py-2">De</th>
            <th className="py-2">À</th>
            <th className="py-2">Date</th>
            <th className="py-2">Statut</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2">{reservation.id}</td>
              <td className="py-2">{reservation.passenger}</td>
              <td className="py-2">{reservation.from}</td>
              <td className="py-2">{reservation.to}</td>
              <td className="py-2">{reservation.date}</td>
              <td className="py-2 text-green-500">{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentReservations;
