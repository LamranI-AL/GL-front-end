"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Identification = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div>
      <Card className="max-w-xl w-full">
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="login">S'identifier</TabsTrigger>
              <TabsTrigger value="register">Créer un compte</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <h2 className="text-2xl font-bold mb-6 text-center">
                S'identifier
              </h2>
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="login-email" className="block mb-2">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="example@demo.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password" className="block mb-2">
                      Mot de passe
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="login-password-forgot"
                      className="text-sm text-blue-500 hover:underline cursor-pointer"
                    >
                      Mot de passe oublié ?
                    </Label>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-blue-600 text-white  w-full mt-6"
                >
                  Se connecter
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Créer un compte
              </h2>
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="register-email" className="block mb-2">
                      Email
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="example@demo.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password" className="block mb-2">
                      Mot de passe
                    </Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="register-password-confirm"
                      className="block mb-2"
                    >
                      Confirmer le mot de passe
                    </Label>
                    <Input
                      id="register-password-confirm"
                      type="password"
                      placeholder="Confirmer le mot de passe"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="ghost"
                  className="bg-blue-600 text-white w-full mt-6"
                >
                  Créer un compte
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Identification;
