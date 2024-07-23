import styles from "../styles/approch.module.css"

export default function approch({id}){

    return <div id={id} className={`${styles.main} ${styles.hidden}`}>
        <p className={styles.title}>DESIGNING FOR IMPACT</p>
        <div className={styles.content}>
            <p className={styles.light}>MY DESIGN APPROCH </p>
            <p className={styles.dark}>ELEVATES USEREXPERIENCE </p>
            <p className={styles.light}>THAT </p>
            <p className={styles.dark}>HELP BUSINESS GROW</p>
        </div>
    </div>
}

