import styles from "../styles/recommendations.module.css";
import Recomcards from "@/components/recomcards";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function recommendations() {
  const ref = useIntersectionAnimation([styles.title, styles.cards]);

  return (
    <div className={styles.main} ref={ref}>
      <p className={styles.title}>RECOMMENDATIONS</p>
      <div className={styles.cards}>
        <Recomcards
          name="Ayush Chauhan"
          companyLogo=""
          position="CPO, Flabs"
          content="Lorem ipsum dolor sit amet consectetur. Sed integer imperdiet sit metus. Rhoncus semper morbi pellentesque felis tortor libero non."
        />

        <Recomcards
          name="Ayush Chauhan"
          companyLogo=""
          position="CPO, Flabs"
          content="Lorem ipsum dolor sit amet consectetur. Sed integer imperdiet sit metus. Rhoncus semper morbi pellentesque felis tortor libero non."
        />
      </div>
    </div>
  );
}
