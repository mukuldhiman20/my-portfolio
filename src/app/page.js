import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Approch from "@/sections/approch"
import Skills from "@/sections/skills"
import Recommendations from "@/sections/recommendations";
import Bestworks from "@/sections/bestworks"
import styles from "../styles/page.module.css"

export default function Home() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (  
      <main className={styles.main}> 
      <Hero />
      <Approch id="scrolldown" />
      <Bestworks />
      <Skills />
      <Recommendations />
      <Footer />
      </main>
  );
}
