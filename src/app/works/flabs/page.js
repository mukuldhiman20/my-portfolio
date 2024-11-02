"use client";

import styles from "@/app/works/flabs/flabs.module.css";
import useIntersectionAnimation from "@/hooks/useIntersectionAnimatio";
import Link from "next/link";
import Loader from "@/components/loader/loader";
import Workcards from "@/components/workcards/workcards";
import { useState, useEffect } from "react";

export default function flabs() {
  const ref = useIntersectionAnimation([
    // styles.heading,
    // styles.step,
    // styles.verticleline,
    // styles.now,
    styles.title,
    styles.cards,
    styles.button,
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.body}>
      <div className={styles.flabs}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="197"
          height="48"
          viewBox="0 0 197 48"
          fill="none"
        >
          <path
            d="M1.37145 26.5157C-0.457149 24.7093 -0.457149 21.7804 1.37145 19.9739L20.2185 1.35486C22.0471 -0.451619 25.0118 -0.451619 26.8404 1.35486C28.669 3.16133 28.669 6.09021 26.8404 7.89668L7.99337 26.5157C6.16478 28.3222 3.20004 28.3222 1.37145 26.5157Z"
            fill="url(#paint0_linear_750_857)"
          />
          <path
            d="M11.559 36.5801C9.73043 34.7736 9.73043 31.8447 11.559 30.0383L30.4061 11.4192C32.2346 9.61273 35.1994 9.61273 37.028 11.4192C38.8566 13.2257 38.8566 16.1546 37.028 17.961L18.181 36.5801C16.3524 38.3866 13.3876 38.3866 11.559 36.5801Z"
            fill="url(#paint1_linear_750_857)"
          />
          <path
            d="M21.7466 46.6444C19.918 44.838 19.918 41.9091 21.7466 40.1026C23.5752 38.2961 26.5399 38.2961 28.3685 40.1026C30.1971 41.9091 30.1971 44.838 28.3685 46.6444C26.5399 48.4509 23.5752 48.4509 21.7466 46.6444Z"
            fill="url(#paint2_linear_750_857)"
          />
          <path
            d="M183.758 47.9992C180.774 47.9992 178.088 47.5086 175.701 46.5272C173.356 45.5033 171.437 44.0526 169.945 42.1753L175.061 37.7594C176.34 39.21 177.768 40.2553 179.346 40.8953C180.923 41.5353 182.586 41.8553 184.334 41.8553C185.059 41.8553 185.698 41.77 186.252 41.5993C186.849 41.4286 187.361 41.1726 187.787 40.8313C188.214 40.49 188.533 40.106 188.746 39.6793C189.002 39.21 189.13 38.698 189.13 38.1434C189.13 37.1194 188.746 36.3087 187.979 35.7114C187.553 35.4127 186.871 35.0927 185.933 34.7514C185.037 34.4101 183.865 34.0688 182.415 33.7274C180.113 33.1301 178.195 32.4474 176.66 31.6795C175.125 30.8688 173.931 29.9728 173.079 28.9915C172.354 28.1808 171.8 27.2635 171.416 26.2395C171.075 25.2156 170.905 24.1062 170.905 22.9116C170.905 21.4183 171.224 20.0743 171.864 18.8796C172.546 17.6423 173.463 16.5757 174.614 15.6797C175.765 14.7837 177.108 14.1011 178.642 13.6317C180.177 13.1624 181.776 12.9277 183.439 12.9277C185.144 12.9277 186.785 13.1411 188.363 13.5677C189.983 13.9944 191.475 14.613 192.839 15.4237C194.246 16.1917 195.44 17.1303 196.42 18.2397L192.072 23.0396C191.262 22.2716 190.366 21.5889 189.386 20.9916C188.448 20.3943 187.489 19.925 186.508 19.5836C185.528 19.1996 184.611 19.0076 183.758 19.0076C182.948 19.0076 182.224 19.093 181.584 19.2636C180.945 19.3916 180.412 19.605 179.985 19.9036C179.559 20.2023 179.218 20.5863 178.962 21.0556C178.749 21.4823 178.642 21.9943 178.642 22.5916C178.685 23.1036 178.813 23.5942 179.026 24.0636C179.282 24.4902 179.623 24.8529 180.049 25.1516C180.518 25.4502 181.222 25.7915 182.16 26.1755C183.098 26.5595 184.313 26.9222 185.805 27.2635C187.894 27.8182 189.642 28.4368 191.049 29.1195C192.455 29.8021 193.564 30.5915 194.374 31.4875C195.184 32.2554 195.76 33.1514 196.101 34.1754C196.442 35.1994 196.612 36.3301 196.612 37.5674C196.612 39.5727 196.037 41.3646 194.886 42.9433C193.777 44.5219 192.242 45.7592 190.281 46.6552C188.363 47.5512 186.188 47.9992 183.758 47.9992Z"
            fill="#141414"
          />
          <path
            d="M151.867 47.9993C150.375 47.9993 148.904 47.786 147.455 47.3593C146.048 46.89 144.769 46.2713 143.618 45.5033C142.467 44.7353 141.507 43.882 140.74 42.9434C139.972 41.962 139.461 40.9807 139.205 39.9994L141.06 39.1674L140.868 47.2313H133.258V0H141.124V21.4397L139.717 20.7997C139.93 19.7757 140.399 18.8157 141.124 17.9197C141.891 16.9811 142.829 16.1491 143.937 15.4238C145.046 14.6558 146.261 14.0585 147.582 13.6318C148.904 13.1625 150.247 12.9278 151.611 12.9278C154.638 12.9278 157.303 13.6745 159.605 15.1678C161.95 16.6611 163.783 18.7304 165.105 21.3757C166.469 24.021 167.151 27.0289 167.151 30.3995C167.151 33.8128 166.49 36.8421 165.169 39.4874C163.847 42.1327 162.014 44.2233 159.669 45.7593C157.367 47.2526 154.766 47.9993 151.867 47.9993ZM150.204 41.0874C151.995 41.0874 153.594 40.6394 155.001 39.7434C156.407 38.8048 157.516 37.5461 158.326 35.9675C159.136 34.3462 159.541 32.4902 159.541 30.3995C159.541 28.3516 159.136 26.5383 158.326 24.9596C157.559 23.381 156.471 22.1437 155.065 21.2477C153.658 20.3517 152.038 19.9037 150.204 19.9037C148.371 19.9037 146.751 20.3517 145.344 21.2477C143.937 22.1437 142.829 23.381 142.019 24.9596C141.209 26.5383 140.804 28.3516 140.804 30.3995C140.804 32.4902 141.209 34.3462 142.019 35.9675C142.829 37.5461 143.937 38.8048 145.344 39.7434C146.751 40.6394 148.371 41.0874 150.204 41.0874Z"
            fill="#141414"
          />
          <path
            d="M109.278 47.9992C106.507 47.9992 103.992 47.2312 101.732 45.6952C99.4725 44.1593 97.6606 42.0686 96.2964 39.4233C94.9321 36.778 94.25 33.7701 94.25 30.3995C94.25 27.0289 94.9321 24.0209 96.2964 21.3756C97.6606 18.7303 99.5152 16.661 101.86 15.1677C104.205 13.6744 106.848 12.9277 109.79 12.9277C111.495 12.9277 113.051 13.1837 114.458 13.6957C115.865 14.1651 117.101 14.8477 118.167 15.7437C119.233 16.6397 120.107 17.6637 120.789 18.8157C121.514 19.9676 122.004 21.2049 122.26 22.5276L120.533 22.0796V13.6317H128.463V47.3592H120.469V39.2953L122.324 38.9753C122.025 40.1273 121.471 41.258 120.661 42.3673C119.894 43.4339 118.913 44.3939 117.719 45.2473C116.568 46.0579 115.268 46.7192 113.819 47.2312C112.412 47.7432 110.898 47.9992 109.278 47.9992ZM111.452 41.0233C113.286 41.0233 114.906 40.5753 116.313 39.6793C117.719 38.7834 118.807 37.546 119.574 35.9674C120.384 34.3461 120.789 32.4901 120.789 30.3995C120.789 28.3515 120.384 26.5382 119.574 24.9596C118.807 23.3809 117.719 22.1436 116.313 21.2476C114.906 20.3516 113.286 19.9036 111.452 19.9036C109.619 19.9036 107.999 20.3516 106.592 21.2476C105.228 22.1436 104.162 23.3809 103.395 24.9596C102.627 26.5382 102.244 28.3515 102.244 30.3995C102.244 32.4901 102.627 34.3461 103.395 35.9674C104.162 37.546 105.228 38.7834 106.592 39.6793C107.999 40.5753 109.619 41.0233 111.452 41.0233Z"
            fill="#141414"
          />
          <path
            d="M81.5234 47.3593V0H89.4532V47.3593H81.5234Z"
            fill="#141414"
          />
          <path
            d="M59.0017 47.3593V21.2477H53.7578V14.3358H59.0017V10.6238C59.0017 8.57587 59.4493 6.76256 60.3446 5.18392C61.2399 3.56261 62.4762 2.30396 64.0537 1.40798C65.6311 0.469325 67.4643 0 69.5533 0C71.0028 0 72.3458 0.255995 73.5821 0.767986C74.8185 1.23731 75.863 1.89864 76.7156 2.75196L74.2856 8.70387C73.7313 8.23454 73.1345 7.87188 72.495 7.61588C71.8981 7.35989 71.3226 7.23189 70.7683 7.23189C69.9157 7.23189 69.1909 7.38122 68.5941 7.67989C68.0398 7.93588 67.6135 8.34121 67.3151 8.89587C67.0593 9.45053 66.9314 10.1118 66.9314 10.8798V14.3358H74.5414V21.2477H66.9314V47.3593H62.9665H60.7922H59.0017Z"
            fill="#141414"
          />
          <defs>
            <linearGradient
              id="paint0_linear_750_857"
              x1="11.4169"
              y1="36.4537"
              x2="36.6788"
              y2="10.8824"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4678EE" />
              <stop offset="1" stop-color="#6B93F1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_750_857"
              x1="11.4169"
              y1="36.4537"
              x2="36.6788"
              y2="10.8824"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4678EE" />
              <stop offset="1" stop-color="#6B93F1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_750_857"
              x1="11.4169"
              y1="36.4537"
              x2="36.6788"
              y2="10.8824"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4678EE" />
              <stop offset="1" stop-color="#6B93F1" />
            </linearGradient>
          </defs>
        </svg>
        <p>
          Flabs is a leading provider of modern LIMS solutions, helping
          diagnostic labs streamline operations, connect with patients through
          WhatsApp, and securely manage medical data, shaping the future of
          healthcare.
        </p>
      </div>
      <div className={styles.journey}>
        <div className={styles.heading}>
          <p className={styles.dark}>MY JOURNEY </p>
          <p className={styles.light}>AT FLABS </p>
        </div>
        <div className={styles.content}>
          <p className={styles.step}>
            Joined Flabs as <br />
            <strong> Founding Member and solo Product Designer</strong>
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.step}>
            Played a key role in shaping the product from day one by appling my
            design skills.
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.step}>
            Expanded my knowledge in areas like{" "}
            <strong>
              frontend and backend development, product management, and UX
              research
            </strong>{" "}
            with real users.
          </p>
          <div class={styles.verticleline}></div>
          <p className={styles.now}>
            Now, contributing as <strong>Head of Design team</strong> and
            continually refining my skills and driving innovation across the
            product.
          </p>
        </div>
      </div>
      <div className={styles.main} ref={ref}>
        <p className={`${styles.title}`}>Best Works</p>
        <div className={styles.cards}>
          <Link
            href="/works/flabs/app"
            className={styles.button}
            target="blank"
          >
            <Workcards
              thumbnail="https://cdn.flabs.in/webassets/83474bd35a2837c9138f.png"
              title="Flabs App"
              type="Internship"
              status="coming soon"
            />
          </Link>

          <Link
            href="/works/flabs/branding"
            className={styles.button}
            target="blank"
          >
            <Workcards
              thumbnail="https://cdn.flabs.in/webassets/24d6dbe517698a1f4589.png"
              title="Flabs Branding"
              type="Internship"
              status="view"
            />
          </Link>

          <Link
            href="/works/flabs/features"
            className={styles.button}
            target="blank"
          >
            <Workcards
              thumbnail="https://cdn.flabs.in/webassets/60e0f161abac0c9e5ea2.png"
              title="Impactful Works"
              type="Internship"
              status="view"
            />
          </Link>
        </div>
        {/* <Link href="/works" className={styles.button}>
        <Button />
      </Link> */}
      </div>
    </div>
  );
}
