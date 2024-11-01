import styles from "@/app/works/grubit/grubit.module.css";

export default function grubit() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <img
            src="https://cdn.flabs.in/webassets/e9905818fa6764b3addb.png"
            alt={`thumbnail`}
            className={styles.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}
