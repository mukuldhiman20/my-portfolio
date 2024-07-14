import styles from "../styles/loader.module.css"

export default function Loader () {
    return <div className={styles.preloader}>
    <div className={styles.lines}>
    <span className={styles.line1}></span>
    <span className={styles.line2}></span>
    <span className={styles.line3}></span>
    <span className={styles.line4}></span>
    <span className={styles.line5}></span>
    <span className={styles.line6}></span>
    <span className={styles.line7}></span>
    <span className={styles.line8}></span>
    <span className={styles.line9}></span>
    </div>
    <p>LOADING</p>
  </div>
}