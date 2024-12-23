"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  LoginLogiqueServerSide,
  registerLogiqueServerSide,
  user,
} from "@/_services/login";
import { passager } from "@/interfaces/interfaces";
export const getTokenClient = () => {
  const token = localStorage.getItem("authToken"); // Récupérer le token
  if (!token) {
    throw new Error("Utilisateur non authentifié. Token introuvable.");
  }
  return token;
};
const Identification = () => {
  const [activeTab, setActiveTab] = useState("login");
  const loginInIdentifier = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const newUser: user = {
      username,
      password,
    };
    const token = await LoginLogiqueServerSide(newUser);
    console.log(token);
    if (token) {
      localStorage.setItem("authToken", token); // Stocker le token
      console.log("Token JWT sauvegardé dans localStorage");
    }
  };
  const registerInIdentifier = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const nationalite = formData.get("nationalite") as string;
    const cin = formData.get("cin") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const dateNaissance = formData.get("cin") as any;
    const newPassager: passager = {
      cin,
      dateNaissance: new Date(dateNaissance),
      nationalite,
      password,
      username,
      email,
      personne_type: "PASSAGER",
      role: "PASSAGER",
      telephone,
    };
    console.log(newPassager);

    const data = await registerLogiqueServerSide(newPassager);
    console.log(data);
    // if (token) {
    //   localStorage.setItem("authToken", token); // Stocker le token
    //   console.log("Token JWT sauvegardé dans localStorage");
    // }
  };
  return (
    <Card className="w-full">
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
            <form action={loginInIdentifier}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="login-email" className="block mb-2">
                    Email
                  </Label>
                  <Input
                    name="username"
                    type="text"
                    placeholder="example@demo.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="login-password" className="block mb-2">
                    Mot de passe
                  </Label>
                  <Input
                    name="password"
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
            <section className="bg-gray-100">
              <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                  <div className="lg:col-span-2 lg:py-12">
                    <p className="max-w-xl text-lg">
                      Créez votre espace dans notre univers en saisissant vos
                      informations.
                    </p>

                    <div className="mt-8">
                      <a
                        href="https://wa.me/+212666187356"
                        className="text-2xl font-bold text-pink-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        06 66 18 73 56
                      </a>

                      <address className="mt-2 not-italic">Beni Mellal</address>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action={registerInIdentifier} className="space-y-4">
                      <div>
                        <label className="" htmlFor="username">
                          Nom d'utilisateur (username)
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Nom d'utilisateur"
                          type="text"
                          id="username"
                          name="username"
                        />
                      </div>

                      <div>
                        <label className="" htmlFor="password">
                          Mot de passe
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Mot de passe"
                          type="password"
                          id="password"
                          name="password"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="" htmlFor="nationalite">
                            Nationalité
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Nationalité"
                            type="text"
                            id="nationalite"
                            name="nationalite"
                          />
                        </div>
                        <div>
                          <label className="" htmlFor="cin">
                            CIN
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="CIN"
                            type="text"
                            id="cin"
                            name="cin"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="" htmlFor="dateNaissance">
                          Date de naissance
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Date de naissance"
                          type="date"
                          id="dateNaissance"
                          name="dateNaissance"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="" htmlFor="email">
                            Email
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Adresse e-mail"
                            type="email"
                            id="email"
                            name="email"
                          />
                        </div>

                        <div>
                          <label className="" htmlFor="telephone">
                            Téléphone
                          </label>
                          <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Numéro de téléphone"
                            type="tel"
                            id="telephone"
                            name="telephone"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Identification;
