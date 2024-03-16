import styles from "./HowItWorks.module.css";
import downArrow from "../../assets/down_arrow.svg";
import cahback from "../../assets/one_percent_cashback.png";
import reward from "../../assets/five_x_rewards.png";
import globe from "../../assets/forex_globe.png";
import React from "react";
const HowItWorks = () => {
  return (
    <div
      className={`${
        styles.featuresSection
      }  ${"flex flex__justifyContentCenter"}`}
    >
      <div className={`${styles.featuresSection__wrapper}`}>
        <div className={`${styles.textImageContainer}`}>
          <div className={`${styles.textContainer}`}>
            <p>
              Earn 1% assured cashback <span>on your spends. Get</span> 5X
            </p>
            <p>
              more value than cashback
              <span> at the Uni Store. Enjoy</span>
            </p>
            <p>
              <span>round the clock </span>Whatsapp support.{" "}
              <span>And it&apos;s</span>
            </p>
            <p>
              lifetime free<span>; no joining fee, no annual charges.</span>
            </p>
          </div>
          <div
            className={`${
              styles.imageContainer
            } ${"flex flex__justifyContentCenter"}`}
          >
            <div
              className={`${"flex flex__justifyContentCenter flex__alignItemsCenter"}`}
            >
              <img src={downArrow} alt="DownArrow" />
            </div>
          </div>
        </div>
        <div className={`${styles.featureListContainer}`}>
          <div
            className={`${
              styles.featureListContainer__feature
            } ${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  1% assured cashback on your spends.
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  The more you spend, the more you earn.
                </span>
              </div>
              <div
                className={`${styles.featureListContainer__feature__text__small}`}
              >
                Not applicable on fuel purchase, rent & wallet transfers, ATM
                withdrawals & international transactions.
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src={cahback} alt="1% Cahback" />
            </div>
          </div>
          <div
            className={`${
              styles.featureListContainer__feature
            } ${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter flex__rowReverse"}`}
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  5x more value than your cashback,{" "}
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  only at the Uni Store.
                </span>
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src={reward} alt="1% Cahback" />
            </div>
          </div>
          <div
            className={`${
              styles.featureListContainer__feature
            } ${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
          >
            <div className={`${styles.featureListContainer__feature__text}`}>
              <div
                className={`${styles.featureListContainer__feature__text__big}`}
              >
                <span
                  className={`${styles.featureListContainer__feature__text__big__boldspan}`}
                >
                  Zero Forex Markup.{" "}
                </span>
                <span
                  className={`${styles.featureListContainer__feature__text__big__lightspan}`}
                >
                  The more you spend, the more you earn.
                </span>
              </div>
            </div>
            <div className={`${styles.featureListContainer__feature__image}`}>
              <img src={globe} alt="1% Cahback" />
            </div>
          </div>
        </div>

        <div className={`${styles.aboutFee}`}>
          Lifetime <span>free.</span> No joining fee. <br />
          No annual charges.
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
