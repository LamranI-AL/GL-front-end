import React from "react";
// import { Card ,CardContent,CardHeader,CardTitle } from '../ui/card'
// import { Button } from '../ui/button'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select } from '@radix-ui/react-select';
const Coordonees = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Le Voyage: Marrakech - Paris</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="passager1-name">Passager 1</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="passager1-Prenom"
                  name="passager1-Prenom"
                  placeholder="Prenom"
                />
                <Input
                  id="passager1-name"
                  name="passager1-name"
                  placeholder="Name"
                />
                <Select id="passager1-gender" name="passager-gender">
                  <option value="male">M</option>
                  <option value="female">F</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="passager1-email">Email</Label>
                <Input
                  type="email"
                  id="passager1-email"
                  name="passager1-email"
                />
              </div>
              <div>
                <Label htmlFor="passager1-phone">Phone</Label>
                <Input type="tel" id="passager1-phone" name="passager1-phone" />
              </div>
            </div>
            <div>
              <Label htmlFor="passager1-email">Confirmer votre email</Label>
              <Input type="email" id="passager1-email" name="passager1-email" />
            </div>
          </div>
        </CardContent>
        <div className="border-t border-slate-200 p-4">
          <p className="text-sm text-slate-500">Les champs sont requis.</p>
        </div>
      </Card>
    </div>
  );
};

export default Coordonees;
