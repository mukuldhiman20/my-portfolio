import styles from "@/sections/skills/skills.module.css";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function skills() {
  const ref = useIntersectionAnimation([styles.title, styles.image]);

  return (
    <div className={styles.main} ref={ref}>
      <p className={styles.title}>
        Tools & skills for crafting intuitive design
      </p>
      <img
        src="https://cdn.flabs.in/webassets/3a5e67ab793aa5061de6.png"
        className={styles.image}
      />
    </div>
  );
}
