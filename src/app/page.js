import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Approch from "@/sections/approch"
import Skills from "@/sections/skills"
import Recommendations from "@/sections/recommendations";
import Bestworks from "@/sections/bestworks"
import styles from "../styles/page.module.css"

export default function Home() {
  return (  
    <div>
      <main className={styles.main}> 
      <Hero />
      <Approch />
      <Bestworks />
      <Skills />
      <Recommendations />
      <Footer />
      </main>
    </div>
  );
}
