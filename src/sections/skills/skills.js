import styles from "@/sections/skills/skills.module.css";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function skills() {
  const ref = useIntersectionAnimation([
    styles.title,
    styles.imageweb,
    styles.imagemob,
  ]);

  return (
    <div className={styles.main} ref={ref}>
      <p className={styles.title}>
        Tools & skills for crafting intuitive design
      </p>
      <img
        src="https://cdn.flabs.in/webassets/8227498e3edf888e564f.png"
        className={styles.imageweb}
      />
      <img
        src="https://cdn.flabs.in/webassets/1a4374bff7c18fdc4332.png"
        className={styles.imagemob}
      />
    </div>
  );
}
