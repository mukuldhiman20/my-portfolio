import styles from "@/sections/recommendations/recommendations.module.css";
import Recomcards from "@/components/recomcards/recomcards";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function recommendations() {
  const ref = useIntersectionAnimation([styles.title, styles.cards]);

  return (
    <div className={styles.main} ref={ref}>
      <p className={styles.title}>RECOMMENDATIONS</p>
      <div className={styles.cards}>
        <Recomcards
          name="Vashisth Bhushan"
          companyLogo="https://cdn.flabs.in/webassets/1e03c3da7546af76b525.jpeg"
          position="CEO, ADesignGuy"
          content="Mukul performed exceptionally well as a UI/UX Design intern. His ability to balance functionality with design excellence made him a valuable asset to our team."
        />

        <Recomcards
          name="Ayush Chauhan"
          companyLogo="https://cdn.flabs.in/webassets/9ebaf2f030b577929773.jpeg"
          position="CPO, Flabs"
          content="Mukul has been with Flabs since day one, showing eagerness to learn. His hard work and brilliance make him a valuable asset to the team."
        />
      </div>
    </div>
  );
}
