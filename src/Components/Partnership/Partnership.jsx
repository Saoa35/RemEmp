import styles from "./Partnership.module.scss";

import rectangle22 from "../../assets/img/Rectangle 22.png";
import rectangle23 from "../../assets/img/Rectangle 23.png";
import rectangle24 from "../../assets/img/Rectangle 24.png";
import rectangle25 from "../../assets/img/Rectangle 25.png";

import ellipse6 from "../../assets/img/Ellipse 6.png";
import ellipse7 from "../../assets/img/Ellipse 7.png";
import ellipse8 from "../../assets/img/Ellipse 8.png";
import ellipse9 from "../../assets/img/Ellipse 9.png";

export const Partnership = () => {
  const articles = [
    {
      author: "Dianne Russell",
      avatar: ellipse6,
      title: "The things we need to check when",
      subtitle: "we want to buy a house",
      imageUrl: rectangle22,
      date: "4 min read | 25 Apr 2021",
    },
    {
      author: "Courtney Henry",
      avatar: ellipse7,
      title: "7 Ways to distinguish the quality of",
      subtitle: "the house we want to buy",
      imageUrl: rectangle23,
      date: "6 min read | 24 Apr 2021",
    },
    {
      author: "Darlene Robertson",
      avatar: ellipse8,
      title: "The best way to know the quality of",
      subtitle: "the house we want to buy",
      imageUrl: rectangle24,
      date: "2 min read | 24 Apr 2021",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <svg
          width="32"
          height="2"
          viewBox="0 0 32 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="2" fill="#F59E0B" />
        </svg>
        <p>See tips and trick from our partnership</p>
        <h1>Find out more about selling and buying homes</h1>
        <button>More Artikel</button>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          {articles.map((el, i) => {
            return (
              <div className={styles.card} key={i}>
                <img src={el.imageUrl} alt="imageUrl" />
                <div className={styles.description}>
                  <p>
                    <img src={el.avatar} alt="avatar" />
                    <span>{el.author}</span>
                  </p>
                  <div className={styles.text}>
                    <p>{el.title}</p>
                    <p>{el.subtitle}</p>
                  </div>
                  <p className={styles.time}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                        fill="#888B97"
                      />
                    </svg>
                    <span>{el.date}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <img src={rectangle25} alt="rectangle25" />
          <div className={styles.card_content}>
            <p className={styles.user}>
              <img src={ellipse9} alt="ellipse9" />
              <span>Cameron Williamson</span>
            </p>
            <h2>12 Things to know before buying a house</h2>
            <p className={styles.card_text}>
              <span>
                Want to buy a house but are unsure about what we should know,
                here I will try to
              </span>
              <span>
                explain what we should know and check when we want to buy a
                house
              </span>
            </p>
            <p className={styles.card_data}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                  fill="#888B97"
                />
              </svg>
              <span>8 min read | 25 Apr 2021</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
