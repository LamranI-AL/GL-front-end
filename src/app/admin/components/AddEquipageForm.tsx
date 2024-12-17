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
import { addEquipageServerSide } from "../_actions/addEquipage";
// import { addEquipageServerSide } from "../_actions/addEquipage";

export function AddEquipageForm() {
  const addEquipageClientAction = async (formData: FormData) => {
    const nomComplet = formData.get("nomComplet") as string;
    const adress = formData.get("adress") as string;
    // const creat_at = formData.get("creat_at") as string;
    const telephone = formData.get("telephone") as string;
    const founction = formData.get("founction") as string;
    const numeroLicence = formData.get("numeroLicence") as string;

    if (!nomComplet || !adress || !telephone || !founction || !numeroLicence) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    await addEquipageServerSide(formData);
    toast.success("Équipage ajouté avec succès !");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-1/3 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white"
        >
          Add Equipage
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={addEquipageClientAction}>
          <DialogHeader>
            <DialogTitle>Add Equipage</DialogTitle>
            <DialogDescription>
              Remplissez les informations de l'équipage et cliquez sur "Add".
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nomComplet" className="text-right">
                Nom complet
              </Label>
              <Input name="nomComplet" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="adress" className="text-right">
                Adresse
              </Label>
              <Input name="adress" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="telephone" className="text-right">
                Téléphone
              </Label>
              <Input
                name="telephone"
                type="tel"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="founction" className="text-right">
                Fonction
              </Label>
              <Input name="founction" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="numeroLicence" className="text-right">
                Numéro de Licence
              </Label>
              <Input name="numeroLicence" required className="col-span-3" />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creat_at" className="text-right">
                Date de Création
              </Label>
              <Input
                name="creat_at"
                type="date"
                required
                className="col-span-3"
              />
            </div> */}
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isActive" className="text-right">
                Actif
              </Label>
              <Input
                name="isActive"
                type="checkbox"
                className="col-span-3 h-5 w-5"
              />
            </div> */}
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
