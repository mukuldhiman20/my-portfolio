import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import styles from "../styles/page.module.css"

export default function Home() {
  return (  
    <div className={styles.bg}>
      <main> 
      <Hero/>
      <Footer/>
      </main>
    </div>
  );
}
