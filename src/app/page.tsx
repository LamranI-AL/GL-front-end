import Footer from "@/components/footer";
import FeaturesSection from "@/components/homePageCom/FeaturesSection";
import Header from "@/components/homePageCom/Header";
import PopularDestinations from "@/components/homePageCom/PopularDestinations";
import SearchBar from "@/components/homePageCom/SearchBar";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({
      name: "randome name",
    });
  };
  setNewView();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="">
          <SearchBar />
        </div>
        <div id="about">
          <FeaturesSection />
        </div>

        <div className="">
          <section className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4" id="populaire">
              Endroits populaires accessibles depuis Marrakech
            </h2>
            <PopularDestinations />
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
