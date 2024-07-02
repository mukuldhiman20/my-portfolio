import styles from "../styles/workcards.module.css"

export default function workcards({ title, thumbnail, type }) {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={`thumbnail`} className={styles.thumbnail} />
      <div className={styles.bottom}>
      <div className={styles.title}>{title}</div>
      <div className={styles.type}><p>{type}</p></div>
      </div>
    </div>
  )
};