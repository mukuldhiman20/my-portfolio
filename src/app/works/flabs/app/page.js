import styles from "@/app/works/flabs/app/app.module.css";

export default function app() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <img
            src="https://cdn.flabs.in/webassets/c9b5b9529a99d52c5ede.png"
            alt={`thumbnail`}
            className={styles.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}
