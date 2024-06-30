import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";
import { Montserrat } from "@next/font/google"; 

const montserrat = Montserrat({
  subsets: ['latin'], 
})

export default function Home() {
  return (  
      <main className = {montserrat.className}> 
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  );
}
