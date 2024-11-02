import styles from "@/sections/journeyflabs/journeyflabs.module.css";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function journeyflabs() {
  const ref = useIntersectionAnimation([
    styles.heading,
    styles.step,
    styles.verticleline,
    styles.now,
  ]);
  return (
    <div ref={ref}>
      <div className={styles.journey}>
        <div className={styles.heading}>
          <p className={styles.dark}>MY JOURNEY </p>
          <p className={styles.light}>AT FLABS </p>
        </div>
        <div className={styles.content}>
          <p className={styles.step}>
            Joined Flabs as <br />
            <strong> Founding Member and solo Product Designer</strong>
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.step}>
            Played a key role in shaping the product from day one by appling my
            design skills.
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.step}>
            Expanded my knowledge in areas like{" "}
            <strong>
              frontend and backend development, product management, and UX
              research
            </strong>{" "}
            with real users.
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.now}>
            Now, contributing as <strong>Head of Design team</strong> and
            continually refining my skills and driving innovation across the
            product.
          </p>
        </div>
      </div>
    </div>
  );
}
