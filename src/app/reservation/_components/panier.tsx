"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import useCartStore from "@/_store/Store";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Panier = () => {
  const pathName = usePathname();
  console.log(pathName);
  let nextPath = "/reservation";
  if (pathName === "/reservation") {
    nextPath = "/reservation/userAuth";
  } else if (pathName === "/reservation/userAuth") {
    nextPath = "/reservation/coordonner";
  } else if (pathName === "/reservation/coordonner") {
    nextPath = "/reservation/payement";
  } else if (pathName === "/reservation/payement") {
    nextPath = "/reservation";
  }

  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  console.log(cart);
  return (
    <div>
      <div className="border rounded-sm border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
        <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
          <span className="sr-only">Close cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-4 space-y-2">
          <ul className="space-y-4">
            {cart?.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart?.map((item, key) => (
                <li key={key} className="flex items-center gap-4">
                  <Card className="mb-2">
                    <CardContent>
                      <div className="p-5">
                        <div className=" flex flex-row items-center justify-between  w-full  p-3">
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-medium mb-2">
                              {item.aeroportOrigin}
                            </p>
                            <p className=" mb-2">11h00</p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <div className="h-0.5 w-[100px] bg-slate-400" />
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-medium mb-2">PARIS</p>
                            <p className=" mb-2">15h00</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">1 passager</p>
                          </div>
                          <div>
                            <p className="  text-2xl font-bold">150 €</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line3Qty" className="sr-only">
                        {" "}
                        Quantity{" "}
                      </label>

                      <input
                        type="number"
                        min="1"
                        placeholder="1"
                        id="Line3Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="space-y-4 text-center">
            <Link
              href={nextPath}
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              Next step
            </Link>

            <a
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
