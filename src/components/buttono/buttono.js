import styles from "@/components/buttono/buttono.module.css";

export default function button() {
  return (
    <div className={styles.button}>
      <p>See more</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
      >
        <path
          d="M1 5.2C0.558172 5.2 0.2 5.55817 0.2 6C0.2 6.44183 0.558172 6.8 1 6.8V5.2ZM17.5657 6.56569C17.8781 6.25327 17.8781 5.74673 17.5657 5.43431L12.4745 0.343146C12.1621 0.0307264 11.6556 0.0307264 11.3431 0.343146C11.0307 0.655565 11.0307 1.1621 11.3431 1.47452L15.8686 6L11.3431 10.5255C11.0307 10.8379 11.0307 11.3444 11.3431 11.6569C11.6556 11.9693 12.1621 11.9693 12.4745 11.6569L17.5657 6.56569ZM1 6.8H17V5.2H1V6.8Z"
          fill="#363944"
        />
      </svg>
    </div>
  );
}
