import { useEffect, useRef } from "react";
import styles from "../styles/approch.module.css";
import anime from "animejs";

export default function approch({ id }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime.timeline().add({
              targets: entry.target.childNodes,
              translateY: [100, 0],
              opacity: [0, 1],
              loop: false,
              easing: "easeOutExpo",
              duration: 1000,
              delay: anime.stagger(200), // delay each item
            });

            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id={id} className={`${styles.main} ${styles.hidden}`}>
      <p className={styles.title}>DESIGNING FOR IMPACT</p>
      <div className={styles.content}>
        <p className={styles.light}>MY DESIGN APPROCH </p>
        <p className={styles.dark}>ELEVATES USEREXPERIENCE </p>
        <p className={styles.light}>THAT </p>
        <p className={styles.dark}>HELP BUSINESS GROW</p>
      </div>
    </div>
  );
}
