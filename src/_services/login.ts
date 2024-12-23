// "use server";

import { passager } from "@/interfaces/interfaces";

export interface user {
  username: string;
  password: string;
}
export const globalEndpoint = "https://0d48-197-147-120-192.ngrok-free.app";
export const LoginLogiqueServerSide = async (user: user) => {
  try {
    const response = await fetch(`${globalEndpoint}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify(user),
    });
    // const token = response.token;
    // console.log(token);
    const token = await response.text();

    return token;
  } catch (error) {
    console.log(error);
  }
};
export const registerLogiqueServerSide = async (passager: passager) => {
  try {
    const response = await fetch(`${globalEndpoint}/passager/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

        // Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify(passager),
    });
    // const token = response.token;
    // console.log(token);
    const data = await response.text();

    return data;
  } catch (error) {
    console.log(error);
  }
};
// export const
