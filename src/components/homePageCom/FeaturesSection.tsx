import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Offres personnalisées",
    description:
      "Nous dénichons pour vous les meilleures offres et conseils de voyage.",
    icon: "/1.png",
    link: "",
  },
  {
    title: "Voyage simplifié",
    description: "Laissez HighFly s'occuper de tout pour un voyage sans souci.",
    icon: "/2.png",
    link: "",
  },
  {
    title: "Réservation facile",
    description:
      "Des millions de voyageurs nous font confiance pour réserver leurs vols.",
    icon: "/3.png",
    link: "",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <Link href={feature.link} key={index} className="p-6 rounded-md">
            <Image
              src={feature.icon}
              alt={feature.title}
              className="w-30 h-30 mx-auto mb-4 rounded-full shadow-md"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
