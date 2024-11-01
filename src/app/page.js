"use client";

import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Approch from "@/sections/approch/approch";
import Skills from "@/sections/skills/skills";
import Recommendations from "@/sections/recommendations/recommendations";
import Bestworks from "@/sections/bestworks/bestworks";
import styles from "@/app/page.module.css";
import { useState, useEffect } from "react";
import Loader from "@/components/loader/loader";
import CustomCursor from "@/components/customcursor/customcursor";

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
    <div>
      {/* <CustomCursor /> */}
      <main className={styles.main}>
        <Hero id="backtotop" />
        <Approch id="scrolldown" />
        <Bestworks />
        <Skills />
        <Recommendations />
        <Footer />
      </main>
    </div>
  );
}
