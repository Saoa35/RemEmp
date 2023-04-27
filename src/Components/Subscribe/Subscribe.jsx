import styles from "./Subscribe.module.scss";

import subscribe1 from "../../assets/img/subscribe1.png";
import subscribe2 from "../../assets/img/subscribe2.png";
import subscribe3 from "../../assets/img/subscribe3.png";
import subscribe4 from "../../assets/img/subscribe4.png";
import subscribe5 from "../../assets/img/subscribe5.png";
import subscribe6 from "../../assets/img/subscribe6.png";
import subscribe7 from "../../assets/img/subscribe7.png";
import subscribe8 from "../../assets/img/subscribe8.png";

export const Subscribe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div>
          <img src={subscribe1} alt="subscribe1" />
          <img src={subscribe2} alt="subscribe2" />
        </div>
        <div>
          <img src={subscribe3} alt="subscribe3" />
          <img src={subscribe4} alt="subscribe4" />
        </div>
      </div>
      <div className={styles.midle}>
        <p className={styles.title}>
          <span> Subscribe For More Info</span>
          <span>and update from Hounter</span>
        </p>
        <div className={styles.mail}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM17 2L10.5 6.47C10.348 6.55777 10.1755 6.60397 10 6.60397C9.82446 6.60397 9.65202 6.55777 9.5 6.47L3 2H17Z"
              fill="#3B82F6"
            />
          </svg>
          <input type="email" placeholder="Your email here" />
          <button>Subsribe Now</button>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <img src={subscribe5} alt="subscribe5" />
          <img src={subscribe6} alt="subscribe6" />
        </div>
        <div>
          <img src={subscribe7} alt="subscribe7" />
          <img src={subscribe8} alt="subscribe8" />
        </div>
      </div>
    </div>
  );
};
