"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { vol } from "@/interfaces/Interfaces";
import { Button } from "@/components/ui/button";
import useCartStore from "@/_store/Store";

interface Props {
  vols: vol[];
}

const Voyage = ({ vols }: Props) => {
  const formatedDate = (date: Date) => {
    return new Date(date).toLocaleString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      {vols.map((vol: vol) => {
        return (
          <Card key={vol.id}>
            <CardContent>
              <div className="text-black gap-4 items-center mx-56 p-10 m-10">
                <div className="flex flex-row items-center justify-between w-full p-3">
                  {/* Aéroport d'origine */}
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-medium mb-2">{vol.aeroportOrigin}</p>
                    <p className="mb-2">{formatedDate(vol.startDate)}</p>
                  </div>

                  {/* Prix */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <p>A partir de</p>
                      <p className="">{vol.prixVol} €</p>
                    </div>
                    <div className="h-0.5 w-[100px] bg-slate-400" />
                  </div>

                  {/* Aéroport de destination */}
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-medium mb-2">
                      {vol.aeroportDestination}
                    </p>
                    <p className="mb-2">{formatedDate(vol.endDate)}</p>
                  </div>
                </div>

                {/* Section Add to Cart */}
                <div className="flex flex-row items-center justify-between  w-full p-3">
                  <div>
                    <Button
                      onClick={() => addToCart(vol)}
                      variant="outline"
                      className="text-white bg-blue-600 flex items-center justify-center"
                    >
                      Add To card
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Voyage;
