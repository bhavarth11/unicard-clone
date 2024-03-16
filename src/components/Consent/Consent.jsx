import styles from "./Consent.module.css";

const Consent = ({ hasUserConsent, setHasUserConsent }) => {
  return (
    <div className={`${styles.concentWrapper} `}>
      <input
        className={styles.customCheckbox}
        type="checkbox"
        checked={hasUserConsent}
        onChange={() => setHasUserConsent((prev) => !prev)}
        id="consent-msg"
      />
      <label htmlFor="consent-msg">
        You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp
        to guide you through your application.
      </label>
    </div>
  );
};

export default Consent;
