import styles from "./OurReview.module.scss";

export const OurReview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <svg
          width="32"
          height="1"
          viewBox="0 0 32 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="1" fill="#F59E0B" />
        </svg>
        <p>See Our Review</p>
        <h1>What Our User Say About Us</h1>
      </div>
      <div className={styles.slider}>SLIDER</div>
    </div>
  );
};
