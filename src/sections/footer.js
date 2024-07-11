import styles from '../styles/footer.module.css'
import Button from "@/components/buttonf"

export default function Footer() {
    return <div className={styles.bg}>
        <svg className={styles.logobg} xmlns="http://www.w3.org/2000/svg" width="1136" height="480" viewBox="0 0 1136 480" fill="none">
  <path opacity="0.25" d="M859.615 465.07L858.649 464.811L859.615 465.069L972.969 40.9002C980.652 12.1908 1010.12 -4.84473 1038.79 2.84724C1067.46 10.5393 1084.48 40.0479 1076.8 68.7578L963.443 492.928C955.761 521.637 926.29 538.672 897.619 530.98C868.948 523.288 851.932 493.78 859.615 465.07ZM342.268 240.215C349.951 211.506 379.422 194.47 408.093 202.162C436.763 209.854 453.78 239.363 446.097 268.072L385.878 493.1C378.195 521.809 348.724 538.845 320.053 531.153C291.382 523.461 274.366 493.952 282.049 465.242L342.268 240.215ZM172.557 240.215C180.239 211.506 209.711 194.47 238.381 202.162C267.052 209.854 284.068 239.363 276.385 268.072L216.166 493.1C208.483 521.809 179.012 538.845 150.342 531.153C121.671 523.461 104.654 493.952 112.337 465.242L172.557 240.215ZM2.84501 240.357C10.5279 211.648 39.9991 194.612 68.6694 202.304C97.3401 209.996 114.357 239.505 106.674 268.215C98.9906 296.924 69.5195 313.96 40.8492 306.268C12.1784 298.576 -4.838 269.067 2.84501 240.357ZM511.98 240.215C519.663 211.506 549.134 194.47 577.804 202.162C606.475 209.854 623.491 239.363 615.808 268.072L555.589 493.1C547.906 521.809 518.435 538.845 489.765 531.153C461.094 523.461 444.078 493.952 451.761 465.242L511.98 240.215ZM750.124 240.215C757.806 211.506 787.278 194.47 815.948 202.162C844.619 209.854 861.635 239.363 853.952 268.072L793.733 493.1C786.05 521.809 756.579 538.845 727.909 531.153C699.238 523.461 682.221 493.952 689.904 465.242L750.124 240.215ZM1029.33 465.07C1037.01 436.36 1066.48 419.325 1095.15 427.017C1123.82 434.709 1140.84 464.217 1133.16 492.927C1125.47 521.637 1096 538.672 1067.33 530.98C1038.66 523.288 1021.64 493.78 1029.33 465.07Z" fill="url(#paint0_linear_322_192)" stroke="url(#paint1_linear_322_192)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_322_192" x1="568" y1="66.4337" x2="568" y2="534" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0"/>
      <stop offset="1" stop-color="white" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="paint1_linear_322_192" x1="568" y1="0" x2="568" y2="534" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0.05"/>
      <stop offset="1" stop-color="white" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
        </svg>
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.lefttop}>
                <p className={styles.lefttopp}>
                    Let’s bring your idea to reality.
                </p>
                <Button />
                </div>
                <div className={styles.leftbottom}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="56" viewBox="0 0 120 56" fill="none">
  <path d="M35.8065 25.164C36.6275 22.0974 39.7769 20.2775 42.8408 21.0992C45.9047 21.9209 47.723 25.073 46.902 28.1396L40.5843 51.7379C39.7634 54.8045 36.614 56.6244 33.5501 55.8027C30.4861 54.981 28.6679 51.8289 29.4888 48.7623L35.8065 25.164Z" fill="#FAFAFA"/>
  <path d="M18.0018 25.164C18.8228 22.0974 21.9722 20.2775 25.0361 21.0992C28.1 21.9209 29.9183 25.073 29.0973 28.1396L22.7796 51.7379C21.9587 54.8045 18.8093 56.6244 15.7454 55.8027C12.6814 54.981 10.8632 51.8289 11.6841 48.7623L18.0018 25.164Z" fill="#FAFAFA"/>
  <path d="M0.197129 25.1789C1.01811 22.1123 4.16746 20.2924 7.23139 21.1141C10.2953 21.9358 12.1136 25.0879 11.2926 28.1545C10.4716 31.2211 7.3223 33.0409 4.25836 32.2192C1.19443 31.3976 -0.623851 28.2455 0.197129 25.1789Z" fill="#FAFAFA"/>
  <path d="M53.6112 25.164C54.4322 22.0974 57.5816 20.2775 60.6455 21.0992C63.7094 21.9209 65.5277 25.073 64.7067 28.1396L58.389 51.7379C57.5681 54.8045 54.4187 56.6244 51.3548 55.8027C48.2908 54.981 46.4726 51.8289 47.2935 48.7623L53.6112 25.164Z" fill="#FAFAFA"/>
  <path d="M78.5952 25.164C79.4162 22.0974 82.5656 20.2775 85.6295 21.0992C88.6934 21.9209 90.5117 25.073 89.6907 28.1396L83.3731 51.7379C82.5521 54.8045 79.4027 56.6244 76.3388 55.8027C73.2749 54.981 71.4566 51.8289 72.2776 48.7623L78.5952 25.164Z" fill="#FAFAFA"/>
  <path d="M101.974 4.26206C102.795 1.19546 105.945 -0.624391 109.009 0.1973C112.072 1.01899 113.891 4.17107 113.07 7.23766L101.178 51.7199C100.357 54.7865 97.2073 56.6063 94.1434 55.7846C91.0795 54.9629 89.2612 51.8108 90.0822 48.7443L101.974 4.26206Z" fill="#FAFAFA"/>
  <path d="M107.887 48.7443C108.708 45.6777 111.857 43.8578 114.921 44.6795C117.985 45.5012 119.803 48.6533 118.982 51.7199C118.161 54.7865 115.012 56.6063 111.948 55.7846C108.884 54.9629 107.066 51.8108 107.887 48.7443Z" fill="#FAFAFA"/>
                </svg>
                    <p>
                        designbymukul@gmail.com
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.backtotop}>
                    <p>BACK TO TOP</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23.5" stroke="#FAFAFA"/>
  <path d="M23 34C23 34.5523 23.4477 35 24 35C24.5523 35 25 34.5523 25 34L23 34ZM24.7071 13.2929C24.3166 12.9024 23.6834 12.9024 23.2929 13.2929L16.9289 19.6569C16.5384 20.0474 16.5384 20.6805 16.9289 21.0711C17.3195 21.4616 17.9526 21.4616 18.3431 21.0711L24 15.4142L29.6569 21.0711C30.0474 21.4616 30.6805 21.4616 31.0711 21.0711C31.4616 20.6805 31.4616 20.0474 31.0711 19.6569L24.7071 13.2929ZM25 34L25 14L23 14L23 34L25 34Z" fill="#FAFAFA"/>
                    </svg>
                </div>
                <div className={styles.socialstop}>
                    <p>Socials</p>
                    <div className={styles.socialslinks}>
                    <div className={styles.socials}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.8605 1.28516H2.14621C1.6721 1.28516 1.28906 1.66819 1.28906 2.1423V21.8566C1.28906 22.3307 1.6721 22.7137 2.14621 22.7137H21.8605C22.3346 22.7137 22.7176 22.3307 22.7176 21.8566V2.1423C22.7176 1.66819 22.3346 1.28516 21.8605 1.28516ZM7.64531 19.545H4.46585V9.31819H7.64531V19.545ZM6.05692 7.91998C5.69244 7.91998 5.33614 7.8119 5.03308 7.6094C4.73003 7.4069 4.49382 7.11909 4.35434 6.78235C4.21486 6.44561 4.17837 6.07508 4.24947 5.7176C4.32058 5.36012 4.49609 5.03175 4.75382 4.77402C5.01155 4.5163 5.33992 4.34078 5.6974 4.26967C6.05488 4.19857 6.42541 4.23506 6.76215 4.37454C7.09889 4.51402 7.3867 4.75023 7.5892 5.05328C7.7917 5.35634 7.89978 5.71264 7.89978 6.07712C7.8971 7.09498 7.0721 7.91998 6.05692 7.91998ZM19.5489 19.545H16.3721V14.5709C16.3721 13.3843 16.3507 11.8602 14.7194 11.8602C13.0667 11.8602 12.8123 13.1512 12.8123 14.4852V19.545H9.63817V9.31819H12.6864V10.7164H12.7292C13.1525 9.91284 14.1891 9.06373 15.7373 9.06373C18.9569 9.06373 19.5489 11.1825 19.5489 13.936V19.545Z" fill="#FAFAFA"/>
                    </svg>
                    <p>LinkedIn</p>
                    </div>
                    <div className={styles.socials}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.8605 1.28516H2.14621C1.6721 1.28516 1.28906 1.66819 1.28906 2.1423V21.8566C1.28906 22.3307 1.6721 22.7137 2.14621 22.7137H21.8605C22.3346 22.7137 22.7176 22.3307 22.7176 21.8566V2.1423C22.7176 1.66819 22.3346 1.28516 21.8605 1.28516ZM14.3203 7.68426H18.0275V8.58694H14.3203V7.68426ZM12.0033 15.128C11.83 15.4572 11.5824 15.7414 11.2801 15.9584C10.9641 16.178 10.6132 16.3387 10.2408 16.4325C9.85131 16.5369 9.44947 16.5882 9.04621 16.5852H4.61049V7.44855H8.92299C9.3596 7.44855 9.75603 7.48873 10.1176 7.56373C10.4766 7.63873 10.7819 7.7673 11.0391 7.94141C11.2935 8.11551 11.4944 8.34855 11.6364 8.63784C11.7757 8.92444 11.848 9.28337 11.848 9.70926C11.848 10.17 11.7435 10.5503 11.5346 10.8584C11.323 11.1664 11.0176 11.4155 10.6025 11.611C11.1676 11.7718 11.5828 12.0584 11.856 12.4602C12.1346 12.8673 12.2712 13.3548 12.2712 13.928C12.2712 14.3941 12.1828 14.7932 12.0033 15.128ZM19.4712 13.7137H14.6926C14.6926 14.2334 14.8721 14.7316 15.1426 14.9994C15.4158 15.2646 15.8069 15.3986 16.3185 15.3986C16.6882 15.3986 17.0016 15.3048 17.2694 15.12C17.5346 14.9352 17.6953 14.7396 17.7542 14.5361H19.356C19.0989 15.3316 18.7078 15.8994 18.1775 16.2423C17.6525 16.5852 17.0096 16.7566 16.2623 16.7566C15.74 16.7566 15.2712 16.6709 14.8507 16.5075C14.4462 16.3494 14.0819 16.1084 13.7819 15.7977C13.4861 15.4786 13.2575 15.1033 13.1096 14.6941C12.9462 14.2414 12.8658 13.7646 12.8712 13.2852C12.8712 12.7896 12.9542 12.3289 13.115 11.9003C13.423 11.0673 14.0632 10.4003 14.8801 10.0548C15.3167 9.87266 15.7855 9.78159 16.2596 9.78694C16.8221 9.78694 17.3096 9.89409 17.7328 10.1137C18.1402 10.3235 18.494 10.6241 18.7667 10.9923C19.0373 11.3593 19.2275 11.7771 19.348 12.2485C19.4632 12.7119 19.5033 13.1994 19.4712 13.7137ZM16.2033 11.153C15.9141 11.153 15.6703 11.2039 15.4828 11.303C15.2953 11.4021 15.14 11.5253 15.0221 11.6673C14.9099 11.8044 14.8269 11.963 14.7783 12.1334C14.7355 12.2753 14.706 12.42 14.6953 12.5673H17.6551C17.6123 12.1039 17.4516 11.7611 17.2373 11.52C17.0123 11.2816 16.6507 11.153 16.2033 11.153ZM9.5471 10.8825C9.78013 10.7137 9.89264 10.4352 9.89264 10.0521C9.90067 9.86998 9.86317 9.69051 9.78281 9.52712C9.71049 9.39587 9.60335 9.28605 9.4721 9.20837C9.33601 9.12584 9.18486 9.07121 9.02746 9.04766C8.85603 9.01551 8.68192 8.99944 8.51049 9.00212H6.62746V11.1369H8.66585C9.01674 11.1396 9.31406 11.0539 9.5471 10.8825ZM9.86317 12.811C9.60067 12.6102 9.24978 12.511 8.81317 12.511H6.6221V15.0289H8.77031C8.97121 15.0289 9.15603 15.0102 9.33549 14.9727C9.51496 14.9352 9.67567 14.8709 9.81228 14.7798C9.94888 14.6914 10.0587 14.5709 10.1417 14.4155C10.2221 14.2602 10.2623 14.0619 10.2623 13.8235C10.2623 13.3494 10.1283 13.0146 9.86317 12.811Z" fill="#FAFAFA"/>
                    </svg>
                    <p>Behance</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.madewithlove}>
            <p>Made with</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.1763 4.90152C18.8771 4.20875 18.4457 3.58096 17.9062 3.05331C17.3664 2.52408 16.7298 2.10351 16.0312 1.81447C15.3069 1.51356 14.5299 1.35954 13.7455 1.36134C12.6451 1.36134 11.5714 1.66268 10.6384 2.23188C10.4152 2.36804 10.2031 2.51759 10.0022 2.68054C9.80134 2.51759 9.58929 2.36804 9.36607 2.23188C8.43304 1.66268 7.35938 1.36134 6.25893 1.36134C5.46652 1.36134 4.69866 1.51313 3.97321 1.81447C3.27232 2.10465 2.64062 2.52206 2.09821 3.05331C1.55803 3.58037 1.12651 4.2083 0.828125 4.90152C0.517857 5.6225 0.359375 6.38813 0.359375 7.17608C0.359375 7.91938 0.511161 8.69393 0.8125 9.48188C1.06473 10.1404 1.42634 10.8234 1.88839 11.5131C2.62054 12.6046 3.62723 13.743 4.87723 14.8971C6.94866 16.81 9 18.1314 9.08705 18.185L9.61607 18.5243C9.85045 18.6738 10.1518 18.6738 10.3862 18.5243L10.9152 18.185C11.0022 18.1292 13.0513 16.81 15.125 14.8971C16.375 13.743 17.3817 12.6046 18.1138 11.5131C18.5759 10.8234 18.9397 10.1404 19.1897 9.48188C19.4911 8.69393 19.6429 7.91938 19.6429 7.17608C19.6451 6.38813 19.4866 5.6225 19.1763 4.90152Z" fill="#FD652D"/>
            </svg>
            <p>by Mukul Dhiman</p>
        </div>
    </div>
}