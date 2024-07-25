"use client";

import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Approch from "@/sections/approch";
import Skills from "@/sections/skills";
import Recommendations from "@/sections/recommendations";
import Bestworks from "@/sections/bestworks";
import styles from "../styles/page.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className={styles.main}>
      <Hero id="backtotop" />
      <Approch id="scrolldown" />
      <Bestworks />
      <Skills />
      <Recommendations />
      <Footer />
    </main>
  );
}
