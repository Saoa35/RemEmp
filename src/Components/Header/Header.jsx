import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

import traveloka from "../../assets/img/traveloka.png";
import ticketcom from "../../assets/img/ticketcom.png";
import airbnb from "../../assets/img/airbnb.png";
import tripadvisor from "../../assets/img/tripadvisor.png";

import kPeoples from "../../assets/img/1K Peoples.png";
import houses from "../../assets/img/56 Houses.png";
import fkPeoples from "../../assets/img/4K Peoples.png";
import kPeoples2 from "../../assets/img/1K Peoples2.png";
import houses2 from "../../assets/img/56 Houses2.png";
import fkPeoples2 from "../../assets/img/4K Peoples2.png";

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const slides = [
    { src: fkPeoples, alt: "4K Peoples" },
    { src: kPeoples, alt: "1K Peoples" },
    { src: houses, alt: "56 Houses" },
    { src: fkPeoples2, alt: "4K Peoples2" },
    { src: houses2, alt: "56 Houses2" },
    { src: kPeoples2, alt: "1K Peoples2" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className={styles.main}>
      <div className={styles.left_block}>
        <header className={styles.logo}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z"
              fill="#F59E0B"
            />
            <path
              d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z"
              fill="#4BE4C9"
            />
          </svg>
          <span>Hounter</span>
        </header>
        <section className={styles.title}>
          <h1>
            <p>find the place to</p>
            <p>
              live <span>your dreams</span>
            </p>
            <p>easily here</p>
          </h1>
          <p className={styles.advertise}>
            <span>
              Everything you need about finding your place to live will be here,
            </span>
            <span>where it will be easier for you</span>
          </p>
        </section>
        <section className={styles.search}>
          <div>
            <p>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C11.3869 0 13.6761 0.993372 15.364 2.76159C17.0518 4.5298 18 6.92801 18 9.42865C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575 9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42865C0 6.92801 0.948211 4.5298 2.63604 2.76159C4.32387 0.993372 6.61305 0 9 0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868 7.20629C6.31607 7.7957 6 8.5951 6 9.42865C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404 8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622 12 9.42865C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587 6.61689 9.79565 6.28576 9 6.28576Z"
                  fill="#F59E0B"
                />
              </svg>
            </p>
            <input
              type="text"
              placeholder="Search for the location you want!"
            />
          </div>
          <p>
            <button>
              Search
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.993352 0.00180435C0.761661 0.00134945 0.537126 0.0825443 0.358724 0.231296C0.258315 0.315059 0.175316 0.417933 0.114479 0.534022C0.0536416 0.650112 0.0161625 0.777137 0.00418798 0.907824C-0.00778654 1.03851 0.00597897 1.17029 0.0446958 1.29562C0.0834126 1.42094 0.146319 1.53735 0.229814 1.63818L4.67221 6.98632L0.388472 12.3444C0.306104 12.4465 0.244592 12.5639 0.207475 12.69C0.170357 12.8161 0.158365 12.9482 0.172187 13.079C0.186009 13.2097 0.225373 13.3364 0.288017 13.4518C0.35066 13.5672 0.435349 13.669 0.537213 13.7513C0.639811 13.8421 0.75996 13.9107 0.89012 13.9526C1.02028 13.9945 1.15764 14.0088 1.29359 13.9948C1.42953 13.9807 1.56112 13.9385 1.68009 13.8709C1.79907 13.8032 1.90286 13.7116 1.98496 13.6016L6.77442 7.61492C6.92027 7.43638 7 7.21244 7 6.98133C7 6.75021 6.92027 6.52627 6.77442 6.34773L1.81639 0.361009C1.71691 0.240259 1.59055 0.144807 1.44755 0.0823965C1.30455 0.0199862 1.14894 -0.00762463 0.993352 0.00180435Z"
                  fill="white"
                />
              </svg>
            </button>
          </p>
        </section>
        <footer className={styles.bottom}>
          <p>Our Partnership</p>
          <div className={styles.logotipes}>
            <img src={traveloka} alt="traveloka" />
            <img src={ticketcom} alt="ticketcom" />
            <img src={airbnb} alt="airbnb" />
            <img src={tripadvisor} alt="tripadvisor" />
          </div>
        </footer>
      </div>

      <div className={styles.right_block}>
        <nav className={styles.menu}>
          <div className={styles.menu_list}>
            <p>about us</p>
            <p>article</p>
          </div>
          <div className={styles.property} onClick={handleClick}>
            <div>
              <p>property</p>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6236 1.12001C10.624 0.946246 10.5631 0.777845 10.4515 0.644043C10.3887 0.568737 10.3116 0.506487 10.2245 0.460859C10.1374 0.415232 10.0421 0.387122 9.94413 0.378141C9.84612 0.369161 9.74728 0.379485 9.65329 0.408522C9.5593 0.43756 9.47199 0.48474 9.39637 0.547361L5.38526 3.87916L1.36668 0.666354C1.29013 0.604578 1.20205 0.558444 1.10751 0.530606C1.01296 0.502768 0.913813 0.493774 0.81576 0.50414C0.717706 0.514507 0.62268 0.54403 0.536144 0.591013C0.449609 0.637995 0.373269 0.701511 0.311514 0.77791C0.243388 0.854858 0.192001 0.94497 0.160579 1.04259C0.129157 1.14021 0.118378 1.24323 0.128919 1.34519C0.139459 1.44715 0.171091 1.54584 0.22183 1.63507C0.272569 1.7243 0.341319 1.80215 0.423766 1.86372L4.91381 5.45582C5.04771 5.5652 5.21567 5.625 5.38901 5.625C5.56234 5.625 5.7303 5.5652 5.8642 5.45582L10.3542 1.73729C10.4448 1.66268 10.5164 1.56791 10.5632 1.46066C10.61 1.35341 10.6307 1.23671 10.6236 1.12001Z"
                  fill="white"
                />
              </svg>
            </div>
            {isOpen && (
              <ul>
                <li>House</li>
                <li>Villa</li>
                <li>Apartment</li>
              </ul>
            )}
          </div>
          <button className={styles.signup}>sign up!</button>
        </nav>
        <div className={styles.tiles}>
          <div className={styles.slider}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={
                  index >= currentSlide && index < currentSlide + 3
                    ? styles.active
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
