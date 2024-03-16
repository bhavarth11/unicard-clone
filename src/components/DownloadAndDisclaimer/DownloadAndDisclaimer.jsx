import React from "react";
import styles from "./DownloadAndDisclaimer.module.css";

const DownloadAndDisclaimer = () => {
  return (
    <>
      <div className={styles.disclaimerContainer}>
        <div className={styles.disclaimerText}>
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
      </div>
      <div className={styles.downloadContainer}>
        <div>Download now to get started</div>
        <div className={styles.downloadLinksContainer}>
          <div className={styles.downloadLink}>
            <img
              class="h-5 w-5"
              alt="Google Play"
              src="https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Google_Play-512.png"
            />
            Google Play
          </div>
          <div className={styles.downloadLink}>
            <img
              class="h-5 w-5"
              alt="App Store"
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
            />
            App Store
          </div>
        </div>
      </div>
      <div className={styles.securityContainer}>
        Uni maintains the highest level of security standards
        <img
          alt="pci_cert_img"
          src="https://www.uni.cards/images/pcidss_cert.svg"
        />
      </div>
    </>
  );
};

export default DownloadAndDisclaimer;
