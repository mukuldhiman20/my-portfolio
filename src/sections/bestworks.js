import styles from "../styles/bestworks.module.css";
import Button from "@/components/buttono";
import Link from "next/link";
import Workcards from "@/components/workcards";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";

export default function Bestworks() {
  const ref = useIntersectionAnimation([
    styles.title,
    styles.cards,
    styles.button,
  ]);

  return (
    <div className={styles.main} ref={ref}>
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
      <Link href="/works" className={styles.button}>
        <Button />
      </Link>
    </div>
  );
}
