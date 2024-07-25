import styles from "../styles/bestworks.module.css";
import Button from "@/components/buttono";
import Link from "next/link";
import Workcards from "@/components/workcards";
import anime from "animejs";
import { forwardRef, useEffect, useRef, useState } from "react";

export default function Bestworks() {
  const sectionRef = useRef(null);
  useEffect(() => {
    console.log("best - 1");
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
    <div className={styles.main} ref={sectionRef}>
      <p className={`${styles.title}`}>Best Works</p>
      <div className={styles.cards}>
        <Workcards
          thumbnail="https://cdn.flabs.in/webassets/83474bd35a2837c9138f.png"
          title="Flabs"
          type="Internship - Flabs"
        />

        <Workcards
          thumbnail="https://cdn.flabs.in/webassets/24d6dbe517698a1f4589.png"
          title="Zepto - Heuristic Evaluation"
          type="Case Study"
        />
      </div>
      <Link href="/works">
        <Button />
      </Link>
    </div>
  );
}
