import styles from "@/sections/approch/approch.module.css";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function approch({ id }) {
  const ref = useIntersectionAnimation([
    styles.title,
    styles.light,
    styles.dark,
  ]);
  return (
    <div id={id} ref={ref} className={`${styles.main}`}>
      <p className={styles.title}>DESIGNING FOR IMPACT</p>
      <div className={styles.content}>
        <p className={styles.light}>MY DESIGN APPROACH </p>
        <p className={styles.dark}>ELEVATES USER-EXPERIENCE </p>
        <p className={styles.light}>THAT </p>
        <p className={styles.dark}>HELP BUSINESS GROW</p>
      </div>
    </div>
  );
}
