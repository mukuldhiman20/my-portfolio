import { useEffect } from "react";
import styles from "@/components/customcursor/customcursor.module.css";

const customcursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(`.${styles.big}`);
    const smallBall = document.querySelector(`.${styles.small}`);
    const hoverables = document.querySelectorAll(".hoverable");

    // Move the cursor
    const onMouseMove = (e) => {
      bigBall.style.transform = `translate(${e.pageX - 15}px, ${
        e.pageY - 15
      }px)`;
      smallBall.style.transform = `translate(${e.pageX - 5}px, ${
        e.pageY - 7
      }px)`;
    };

    // Hover effect
    const onMouseHover = () => {
      bigBall.style.transform += " scale(4)";
    };

    const onMouseHoverOut = () => {
      bigBall.style.transform = bigBall.style.transform.replace(
        " scale(4)",
        ""
      );
    };

    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", onMouseHover);
      hoverable.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", onMouseHover);
        hoverable.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className={styles.cursor}>
      <div className={`${styles.ball} ${styles.big}`}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>

      <div className={`${styles.ball} ${styles.small}`}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default customcursor;
