"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  checkAeroport,
  checkEquipageName,
  checkIATA,
} from "../_utils/utilsFunctions";
import toast from "react-hot-toast";
import { addVolServerSide } from "../_actions/addVol";

export function AddVol() {
  const addVoleClientAction = async (formData: FormData) => {
    const nameAeroport = formData.get("nameAeroport") as string;
    const IATAvion = formData.get("IATAvion") as string;
    const namePilote = formData.get("namePilote") as string;
    const nameCoPilote = formData.get("nameCoPilote") as string;
    const existsAeroport = await checkAeroport(nameAeroport);
    const existsIATAcode = await checkIATA(IATAvion);
    const existsPilotName = await checkEquipageName(namePilote);
    const existsCoPilotName = await checkEquipageName(nameCoPilote);

    if (!existsAeroport) {
      toast.error("aeroport pas exist");
    } else if (!existsIATAcode) {
      toast.error("avion pas exist");
    } else if (!existsPilotName) {
      toast.error("pilote pas exist");
    } else if (!existsCoPilotName) {
      toast.error("co pilote pas exist");
    } else {
      await addVolServerSide(formData);
      toast.success("vol ajouté avec succès");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="pl-72  w-full">
          Add vol
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={addVoleClientAction}>
          <DialogHeader>
            <DialogTitle>Add vol</DialogTitle>
            <DialogDescription>
              Make changes . Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Aéroport name
              </Label>
              <Input name="nameAeroport" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                IATA Avion
              </Label>
              <Input name="IATAvion" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Pilot name
              </Label>
              <Input name="namePilote" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Co pilote name
              </Label>
              <Input name="nameCoPilote" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Num de vol
              </Label>
              <Input name="volNum" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Origine
              </Label>
              <Input name="Origine" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Destination
              </Label>
              <Input name="Destination" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Start Date
              </Label>
              <Input
                name="startDate"
                type="datetime-local"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                End Date
              </Label>
              <Input
                name="endDate"
                type="datetime-local"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
