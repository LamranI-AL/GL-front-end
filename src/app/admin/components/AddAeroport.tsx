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
import toast from "react-hot-toast";
import { addAirportServerSide } from "../_actions/addAeroport";
// import { addAirportServerSide } from "../_actions/addAirport";

export function AddAirportForm() {
  const addAirportClientAction = async (formData: FormData) => {
    try {
      await addAirportServerSide(formData);
      toast.success("Aéroport ajouté avec succès");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'ajout de l'aéroport");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-1/3 bg-cyan-800 text-white border-cyan-700  hover:bg-cyan-700 hover:text-white"
        >
          Ajouter un aéroport
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={addAirportClientAction}>
          <DialogHeader>
            <DialogTitle>Ajouter un Aéroport</DialogTitle>
            <DialogDescription>
              Remplissez les champs ci-dessous pour ajouter un nouvel aéroport.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nom" className="text-right">
                Nom de Aeroport
              </Label>
              <Input name="nom" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ville" className="text-right">
                Ville
              </Label>
              <Input name="ville" type="text" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pays" className="text-right">
                Pays
              </Label>
              <Input name="pays" type="text" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacitePassager" className="text-right">
                Capacité Passager
              </Label>
              <Input
                name="capacitePassager"
                type="number"
                required
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Ajouter</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
