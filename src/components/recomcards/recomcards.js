import styles from "@/components/recomcards/recomcards.module.css";

export default function recomcards({ name, companyLogo, position, content }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>"{content}"</div>
      <div className={styles.bottom}>
        <img src={companyLogo} alt={`company logo`} className={styles.logo} />
        <div className={styles.bottomcontent}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
      </div>
    </div>
  );
}
