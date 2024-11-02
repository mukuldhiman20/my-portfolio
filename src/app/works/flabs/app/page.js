import styles from "@/app/works/flabs/app/app.module.css";

export default function app() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <img
            src="https://cdn.flabs.in/webassets/94bc992db7d52e635d2b.png"
            alt={`thumbnail`}
            className={styles.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}
