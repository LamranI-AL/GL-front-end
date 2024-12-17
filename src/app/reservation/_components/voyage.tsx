import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "lucide-react";
const Voyage = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className=" text-black  gap-4 items-center mx-56 p-1">
            <div className=" flex flex-row items-center justify-between  w-full  p-3">
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium mb-2">MARRAKECH</p>
                <p className=" mb-2">11h00</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p>A partir de</p>
                  <p className="">150 €</p>
                </div>
                <div className="h-0.5 w-[100px] bg-slate-400" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium mb-2">PARIS</p>
                <p className=" mb-2">15h00</p>
              </div>
            </div>

            <div className=" flex flex-row items-center justify-between w-full p-3">
              <div className="flex flex-col ">
                <p>A partir de</p>
                <p className="text-2xl font-bold ">150 €</p>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="text-white bg-blue-600 flex flex-col items-center justify-center"
                >
                  Add To card
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Voyage;
