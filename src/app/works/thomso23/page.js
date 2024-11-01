import styles from "@/app/works/thomso23/thomso23.module.css";
import Link from "next/link";
import Button from "@/components/buttono/buttono";

export default function thomso23() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <img
            src="https://cdn.flabs.in/webassets/f1e8272cd7bec7d79c28.png"
            alt={`thumbnail`}
            className={styles.thumbnail}
          />
          <Link
            href="https://www.figma.com/proto/zcm4mgZ3hywWmiAjJaC9Qo/THOMSO-23-APP?page-id=0%3A1&node-id=97-796&node-type=frame&viewport=-237%2C8%2C0.08&t=h2ttcpRdG9EO4Lxv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A69"
            className={styles.button}
            target="blank"
          >
            <Button />
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
}
