import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import rightArrow from "../../assets/right_arrow.svg";

const Navbar = () => {
  const [hamClicked, setHamburgeClicked] = useState(false);
  return (
    <div className={`${styles.navbar} ${"flex flex__justifyContentCenter"}`}>
      <div className={`${styles.navbar__wrapper}`}>
        <ul
          className={`${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
        >
          <li>
            <a className={`${styles.navbar__logo}`} href="/">
              <img src={logo} alt="Uni.cards logo" />
            </a>
          </li>

          <li>
            <a
              className={`${styles.navbar__button}`}
              href="https://paychek.uni.club/"
            >
              Uni Paychek
            </a>
          </li>

          <li>
            <div
              className={`${styles.hamburger} ${
                hamClicked ? styles.active : ""
              } `}
              onClick={() => setHamburgeClicked(!hamClicked)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </li>
        </ul>
      </div>

      {hamClicked && (
        <div className={styles.dropDown}>
          <a
            className={`${
              styles.link
            } ${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
            href="https://paychek.uni.club/"
          >
            <span>Uni Paychek</span>
            <span>
              <img src={rightArrow} alt="Right Arrow" />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
