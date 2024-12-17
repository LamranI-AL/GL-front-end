import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
const Panier = () => {
  return (
    <div>
      <Card className="bg-blue-600 mb-8 mt-3">
            <CardContent>
        <div className=" text-white space-y-4">
            <div className=" flex justify-between items-center">
            <div>
            <p className="">Aller 24/04/2023</p>

            </div>
            {/* hna khasni n integre logo d'avion! */}
            <p>avoin</p>
            </div>
            <div className=' flex flex-row items-center justify-between  w-full  p-3'>
                <div className='flex flex-col items-center justify-center'>
                <p className="font-medium mb-2">MARRAKECH</p>
                <p className=" mb-2">11h00</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <p>4h00</p>
                <div className='h-0.5 w-[100px] bg-slate-400'/>
                </div>
              <div className='flex flex-col items-center justify-center'>
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

                <Card className="text-white bg-violet-500 mb-8 mt-3">
                <CardContent>
                <div className="space-y-4">
                <div className="flex justify-between items-center">
                <div>
                <p className="">Montant Total</p>
                </div>
                <p className='font-medium'>150€</p>
                </div>
                <div>
                <Button variant="primary" className="flex items-center">
                Continuer
                </Button>
                </div>
                </div>
                </CardContent>
             </Card>
         </div>
  )
}

export default Panier
