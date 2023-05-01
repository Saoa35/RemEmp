import styles from "./OurReview.module.scss";

import revuePik1 from "../../assets/img/revuePik1.png";
import revuePik2 from "../../assets/img/revuePic2.png";
import revuePik3 from "../../assets/img/revuePic3.png";

import recomendation1 from "../../assets/img/recomendation1.png";
import recomendation2 from "../../assets/img/recomendation2.png";
// import recomendation3 from "../../assets/img/recomendation3.png";
import recomendation4 from "../../assets/img/recomendation4.png";

export const OurReview = () => {
  const slides = [
    {
      picture: revuePik2,
      title: "My house sold out fast!",
      message:
        "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
      avatar: recomendation2,
      name: "Courtney Henry",
      realm: "CEO Andarafish",
      stars: "4.3",
    },
    {
      picture: revuePik1,
      title: "Best! I got the house I wanted through Hounter",
      message:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      avatar: recomendation1,
      name: "Dianne Russell",
      realm: "Manager Director",
      stars: "4.6",
    },
    {
      picture: revuePik3,
      title: "Through the Hounter, I can get a house for my self",
      message:
        "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
      avatar: recomendation4,
      name: "Esther Howard",
      realm: "Head of Marketing",
      stars: "4.4",
    },
  ];

  return (
    <div className={styles.wrapper}>
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
        <p>See our review</p>
        <h1>What our user say about us</h1>
      </div>
      <div className={styles.slider}>
        {slides.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <img
                className={styles.house_pict}
                src={card.picture}
                alt="Pict"
              />
              <div className={styles.feedback}>
                <div className={styles.container}>
                  <h1>{card.title}</h1>
                  <div className={styles.text}>
                    <p>{card.message}</p>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.customer}>
                      <img src={card.avatar} alt="avatar" />
                      <div>
                        <span>{card.name}</span>
                        <span>{card.realm}</span>
                      </div>
                    </div>
                    <div className={styles.star}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z"
                          fill="#F59E0B"
                        />
                      </svg>
                      <span>{card.stars}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
