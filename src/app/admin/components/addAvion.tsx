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
import { addAvionServerSide } from "../_actions/addAvion";
// import { addAvionServerSide } from "../_actions/addAvion"; // Action côté serveur

export function AddAvionForm() {
  const addAvionClientAction = async (formData: FormData) => {
    try {
      await addAvionServerSide(formData);
      toast.success("Avion ajouté avec succès !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'ajout de l'avion.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-1/3 bg-cyan-800 text-white border-cyan-700  hover:bg-cyan-700 hover:text-white"
        >
          Ajouter un avion
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={addAvionClientAction}>
          <DialogHeader>
            <DialogTitle>Ajouter un Avion</DialogTitle>
            <DialogDescription>
              Remplissez les champs ci-dessous pour ajouter un nouvel avion.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="codeIATA" className="text-right">
                Code IATA
              </Label>
              <Input
                name="codeIATA"
                type="text"
                // pattern="[A-Z]{3}" // Code IATA de 3 lettres majuscules
                required
                className="col-span-3"
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avion_id" className="text-right">
                ID de l'Avion
              </Label>
              <Input
                name="avion_id"
                type="number"
                required
                className="col-span-3"
              />
            </div> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="typeAvion" className="text-right">
                Type d'Avion
              </Label>
              <Input
                name="typeAvion"
                type="text"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacite" className="text-right">
                Capacité
              </Label>
              <Input
                name="capacite"
                type="number"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creat_at" className="text-right">
                Date de Création
              </Label>
              <Input
                name="creat_at"
                type="date"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="anneeFabrication" className="text-right">
                Année de Fabrication
              </Label>
              <Input
                name="anneeFabrication"
                type="text"
                pattern="\d{4}" // Validation pour une année (ex : 2023)
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="model" className="text-right">
                Modèle
              </Label>
              <Input name="model" type="text" required className="col-span-3" />
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
