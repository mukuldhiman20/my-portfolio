'use client'

import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Approch from "@/sections/approch"
import Skills from "@/sections/skills"
import Recommendations from "@/sections/recommendations";
import Bestworks from "@/sections/bestworks"
import styles from "../styles/page.module.css"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/loader";


export default function Home() {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1500);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   if (router && router.events) {
  //     router.events.on('routeChangeStart', handleStart);
  //     router.events.on('routeChangeComplete', handleComplete);
  //     router.events.on('routeChangeError', handleComplete);

  //     setLoading(false);

  //     return () => {
  //       router.events.off('routeChangeStart', handleStart);
  //       router.events.off('routeChangeComplete', handleComplete);
  //       router.events.off('routeChangeError', handleComplete);
  //     };
  //   }
  // }, [router]);


  if (loading) {
    return <Loader />;
  }

  return ( 
      <main className={styles.main}> 
      <Hero id='backtotop' />
      <Approch id="scrolldown" />
      <Bestworks />
      <Skills />
      <Recommendations />
      <Footer />
      </main>
      
  );
}
