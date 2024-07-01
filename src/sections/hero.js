import Image from "next/image";
import Navbar from "@/components/navbar";
import Spline from "@splinetool/react-spline";
import styles from "../styles/hero.module.css";

export default function hero() {
    return <div className={styles.main}>
        <div className={styles.bg}>
        <div className={styles.spline}>
        <Spline
        scene="https://prod.spline.design/3zgIFixr-UzkbknH/scene.splinecode" />
        </div>
        <Navbar />
        <Image
        src="https://cdn.flabs.in/webassets/6dfcbbc05c598f509949.jpg"
        alt="Picture of the author"
        width={100}
        height={100} />
        <div className={styles.content}>
        <p className={styles.para}>Hello! 👋 I'm Mukul Dhiman</p>
        <h1>PRODUCT DESIGNER</h1>
        <p className={styles.para}>from IIT Roorkee and I design digital products
        that users really desire.</p>
        </div>
    </div>
    <div className={styles.scroll}>
    <svg xmlns="http://www.w3.org/2000/svg" width="132" height="88" viewBox="0 0 132 88" fill="none">
  <path d="M32.1379 66.8041C41.4735 80.0844 53.2289 88 66.0011 88C78.7733 88 90.5287 80.0844 99.8643 66.8041C107.314 56.2069 118.455 48 131.408 48V0H0.59375V48C13.5474 48 24.6884 56.2069 32.1379 66.8041Z" fill="#141414"/>
    </svg>
    <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
  <path d="M9 1C9 0.447715 8.55228 2.41426e-08 8 0C7.44772 -2.41426e-08 7 0.447715 7 1L9 1ZM7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928932 13.9289C0.538407 14.3195 0.538407 14.9526 0.928932 15.3431L7.29289 21.7071ZM7 1L7 21L9 21L9 1L7 1Z" fill="#FAFAFA"/>
    </svg>
    </div>
    </div>
}