import Navbar from "../Navbar/Navbar";
import styles from "./HeroVideo.module.css";
import heroImage from "../../assets/nx_wave_hero.png";
import star from "../../assets/star.svg";
import Input from "../Input/Input";
import Consent from "../Consent/Consent";
import React, { useState } from "react";

const HeroVideo = () => {
  const [hasUserConsent, setHasUserConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className={`${styles.backgroundVideoSection}`}>
      <video className={styles.video} autoPlay muted loop>
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.overlay}`}>
        <Navbar />
        <div
          className={`${
            styles.heroSection
          } ${"flex flex__justifyContentCenter"}`}
        >
          <div
            className={`${
              styles.heroSection__wrapper
            } ${"flex flex__justifyContentSpaceBetween"}`}
          >
            <div className={`${styles.heroSection__content}`}>
              <h1>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </h1>
              <div className={`${styles.heroSection__content__para}`}>
                <p>
                  1% Cashback <img src={star} alt="Star" /> 5x Rewards Zero{" "}
                  <img src={star} alt="Star" /> Forex Markup
                </p>
                <div className={`${styles.form}`}>
                  <Input
                    disabled={!hasUserConsent}
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
                  />
                  <Consent
                    hasUserConsent={hasUserConsent}
                    setHasUserConsent={setHasUserConsent}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.heroSection__image}`}>
              <img src={heroImage} alt="NX Wave" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
