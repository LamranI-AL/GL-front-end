
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@radix-ui/react-select';
import Confirmation from './confirmation';
import Voyage from './voyage';
import Panier from './panier';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ChevronDownIcon } from 'lucide-react';

import Coordonees from './coordonees';
import Identification from './identification';

const PagePrincipale = () => {

  return (
    <div className="flex h-screen  p-6 border-r">
      <Tabs defaultValue="search">
          
          {/* sidebar de navigation (normalement ne s'agit pas d'une sidebar) */}
          <TabsList>
            <TabsTrigger value="search">Recherche</TabsTrigger>
            <TabsTrigger value="voyage">Voyage</TabsTrigger>
            <TabsTrigger value="identification">Identification</TabsTrigger>
            <TabsTrigger value="coordonnees">Coordonnées</TabsTrigger>
            <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
          </TabsList>

               {/* reservation */}

          <TabsContent value="voyage">
            {/* page voyage */}
            <Voyage></Voyage>
          </TabsContent>

          <TabsContent value="identification">
            {/* page identification */}
            <Identification></Identification>
          </TabsContent>

          <TabsContent value="coordonnees">
            {/* page de coordonnees */}
           <Coordonees></Coordonees>
          </TabsContent>
          
         
          <TabsContent value="confirmation">
             {/* page de confirmation */}
            
          </TabsContent>
    

        </Tabs>

        <div className="bg-gray-300 p-8 mt-4">

            {/* Panier */}

            <h3 className='font-medium'>Panier</h3>
            <Panier/>
            </div>
          
        </div>
              );
            };

export default PagePrincipale;