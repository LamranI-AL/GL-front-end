import FeaturesSection from "@/components/homePageCom/FeaturesSection";
import Header from "@/components/homePageCom/Header";
import PopularDestinations from "@/components/homePageCom/PopularDestinations";
import { PopularFlights } from "@/components/homePageCom/PopularFlights";
import SearchBar from "@/components/homePageCom/SearchBar";
import { supabase } from "@/lib/supabase";
// import Image from "next/image";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({
      name: "randome name",
    });
    console.log(data);
    console.log(error);
  };
  setNewView();
  return (
    <div className="bg-gray-100  min-h-screen">
      <Header />
      <main>
        <div className="bg-blue-100  pt-20 pb-20">
          <SearchBar />
        </div>
        <FeaturesSection />
        <div className="">
          <section className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">
              Endroits populaires accessibles depuis Marrakech
            </h2>
            <PopularDestinations />
          </section>
          <section className="mt-20 p-10 bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Vols populaires</h2>
            <PopularFlights />
          </section>
        </div>
      </main>
    </div>
  );
}
