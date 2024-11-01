"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/components/navar/navbar.module.css";
import Button from "@/components/buttonf/buttonf";
import Link from "next/link";

export default function navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="56"
          viewBox="0 0 120 56"
          fill="none"
        >
          <path
            d="M35.8065 25.164C36.6275 22.0974 39.7769 20.2775 42.8408 21.0992C45.9047 21.9209 47.723 25.073 46.902 28.1396L40.5843 51.7379C39.7634 54.8045 36.614 56.6244 33.5501 55.8027C30.4861 54.981 28.6679 51.8289 29.4888 48.7623L35.8065 25.164Z"
            fill="#FAFAFA"
          />
          <path
            d="M18.0018 25.164C18.8228 22.0974 21.9722 20.2775 25.0361 21.0992C28.1 21.9209 29.9183 25.073 29.0973 28.1396L22.7796 51.7379C21.9587 54.8045 18.8093 56.6244 15.7454 55.8027C12.6814 54.981 10.8632 51.8289 11.6841 48.7623L18.0018 25.164Z"
            fill="#FAFAFA"
          />
          <path
            d="M0.197129 25.1789C1.01811 22.1123 4.16746 20.2924 7.23139 21.1141C10.2953 21.9358 12.1136 25.0879 11.2926 28.1545C10.4716 31.2211 7.3223 33.0409 4.25836 32.2192C1.19443 31.3976 -0.623851 28.2455 0.197129 25.1789Z"
            fill="#FAFAFA"
          />
          <path
            d="M53.6112 25.164C54.4322 22.0974 57.5816 20.2775 60.6455 21.0992C63.7094 21.9209 65.5277 25.073 64.7067 28.1396L58.389 51.7379C57.5681 54.8045 54.4187 56.6244 51.3548 55.8027C48.2908 54.981 46.4726 51.8289 47.2935 48.7623L53.6112 25.164Z"
            fill="#FAFAFA"
          />
          <path
            d="M78.5952 25.164C79.4162 22.0974 82.5656 20.2775 85.6295 21.0992C88.6934 21.9209 90.5117 25.073 89.6907 28.1396L83.3731 51.7379C82.5521 54.8045 79.4027 56.6244 76.3388 55.8027C73.2749 54.981 71.4566 51.8289 72.2776 48.7623L78.5952 25.164Z"
            fill="#FAFAFA"
          />
          <path
            d="M101.974 4.26206C102.795 1.19546 105.945 -0.624391 109.009 0.1973C112.072 1.01899 113.891 4.17107 113.07 7.23766L101.178 51.7199C100.357 54.7865 97.2073 56.6063 94.1434 55.7846C91.0795 54.9629 89.2612 51.8108 90.0822 48.7443L101.974 4.26206Z"
            fill="#FAFAFA"
          />
          <path
            d="M107.887 48.7443C108.708 45.6777 111.857 43.8578 114.921 44.6795C117.985 45.5012 119.803 48.6533 118.982 51.7199C118.161 54.7865 115.012 56.6063 111.948 55.7846C108.884 54.9629 107.066 51.8108 107.887 48.7443Z"
            fill="#FAFAFA"
          />
        </svg>
      </Link>
      <div className={styles.menu} onClick={handleMenuToggle}>
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M17.8514 16.0003L27.2264 4.82528C27.3835 4.63956 27.2514 4.35742 27.0085 4.35742H24.1585C23.9907 4.35742 23.83 4.43242 23.7193 4.56099L15.9871 13.7789L8.25497 4.56099C8.14783 4.43242 7.98712 4.35742 7.81569 4.35742H4.96569C4.72283 4.35742 4.59069 4.63956 4.74783 4.82528L14.1228 16.0003L4.74783 27.1753C4.71263 27.2167 4.69005 27.2673 4.68276 27.3211C4.67548 27.375 4.6838 27.4298 4.70674 27.4791C4.72967 27.5283 4.76627 27.57 4.81217 27.5991C4.85807 27.6281 4.91135 27.6434 4.96569 27.6431H7.81569C7.98355 27.6431 8.14426 27.5681 8.25497 27.4396L15.9871 18.2217L23.7193 27.4396C23.8264 27.5681 23.9871 27.6431 24.1585 27.6431H27.0085C27.2514 27.6431 27.3835 27.361 27.2264 27.1753L17.8514 16.0003Z"
              fill="#FAFAFA"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="32"
            viewBox="0 0 42 32"
            fill="none"
          >
            <path
              d="M5 28C3.89543 28 3 27.1046 3 26C3 24.8954 3.89543 24 5 24H37C38.1046 24 39 24.8954 39 26C39 27.1046 38.1046 28 37 28H5ZM5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14H37C38.1046 14 39 14.8954 39 16C39 17.1046 38.1046 18 37 18H5ZM17 8C15.8954 8 15 7.10457 15 6C15 4.89543 15.8954 4 17 4H37C38.1046 4 39 4.89543 39 6C39 7.10457 38.1046 8 37 8H17Z"
              fill="#FAFAFA"
            />
          </svg>
        )}
      </div>
      <div className={`${styles.right} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul>
          {/* <li className={router.pathname === "/about-me" ? styles.active : ""}>
            <Link className={styles.link} href="/about-me">
              <span>About Me</span>
            </Link>
          </li> */}
          <li>
            <Link className={styles.link} href="/works">
              <span>Works</span>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/resume" target="blank">
              <span>Resume</span>
            </Link>
          </li>
        </ul>
        <div className={styles.button}>
          <Button />
        </div>
      </div>
    </div>
  );
}
