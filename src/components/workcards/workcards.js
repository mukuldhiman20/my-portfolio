import styles from "@/components/workcards/workcards.module.css";
import { useState, useEffect } from "react";
import Button from "@/components/iconbutton/iconbutton";

export default function workcards({ title, thumbnail, type, status }) {
  // const [cursorText, setCursorText] = useState("");

  // const handleMouseEnter = () => {
  //   setCursorText(status);
  //   document.body.classList.add(styles.customCursorActive);
  // };

  // const handleMouseLeave = () => {
  //   setCursorText("");
  //   document.body.classList.remove(styles.customCursorActive);
  // };

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     document.documentElement.style.setProperty("--cursorX", `${e.clientX}px`);
  //     document.documentElement.style.setProperty("--cursorY", `${e.clientY}px`);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={thumbnail}
          alt={`thumbnail`}
          className={styles.thumbnail}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomleft}>
          <div className={styles.title}>{title}</div>
          <div className={styles.type}>
            <p>{type}</p>
          </div>
        </div>
        <div className={styles.bottomright}>
          <Button />
        </div>
      </div>
      {/* <div
        className={`${styles.customCursor} ${
          cursorText ? styles.showCursor : ""
        }`}
      >
        <span>{cursorText}</span>
      </div> */}
    </div>
  );
}
