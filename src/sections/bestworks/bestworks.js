import styles from "@/sections/bestworks/bestworks.module.css";
import Button from "@/components/buttono/buttono";
import Link from "next/link";
import Workcards from "@/components/workcards/workcards";
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
        <Link href="/works/flabs" className={styles.button} target="blank">
          <Workcards
            thumbnail="https://cdn.flabs.in/webassets/35fa8546d9599687291a.png"
            title="Flabs"
            type="Internship"
            status="coming soon"
          />
        </Link>

        <Link href="/works/zepto" className={styles.button} target="blank">
          <Workcards
            thumbnail="https://cdn.flabs.in/webassets/24d6dbe517698a1f4589.png"
            title="Zepto - Heuristic Evaluation"
            type="Case Study"
            status="view"
          />
        </Link>

        <Link href="/works/grubit" className={styles.button} target="blank">
          <Workcards
            thumbnail="https://cdn.flabs.in/webassets/60e0f161abac0c9e5ea2.png"
            title="GrubIT"
            type="Case Study"
            status="view"
          />
        </Link>

        <Link href="/works/thomso23" className={styles.button} target="blank">
          <Workcards
            thumbnail="https://cdn.flabs.in/webassets/5ce721e6f059360bfb58.png"
            title="Thomso'23"
            type="Documentation"
            status="view"
          />
        </Link>
      </div>
      {/* <Link href="/works" className={styles.button}>
        <Button />
      </Link> */}
    </div>
  );
}
