import { useState } from "react";
import styles from "./Input.module.css";
import { delay } from "../../utils/helpers";

function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(input_str);
}

const Input = ({ disabled, isSubmitted, setIsSubmitted }) => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value) => {
    setIsLoading(true);
    setIsValid(false);
    await delay(500);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div
      className={`${styles.inputWrapper} {"flex flex__justifyContentSpaceBetween flex__alignItemsCenter}`}
    >
      {isSubmitted ? (
        <button className={styles.download}>Download</button>
      ) : (
        <>
          <input
            onChange={(e) => {
              setValue(e.target.value);
              setIsValid(validatePhoneNumber(e.target.value));
            }}
            value={value}
            type="number"
            placeholder="Enter Phone Number"
          />
          <span className={`${styles.spanText}`}>
            {value?.length ? (
              isValid ? (
                "✓"
              ) : (
                <span className="cursor-pointer" onClick={() => setValue("")}>
                  {"\u2715"}
                </span>
              )
            ) : (
              ""
            )}
          </span>
          <button
            onClick={onSubmit}
            disabled={disabled || (value?.length && !isValid)}
          >
            {isLoading ? <div className={styles.loader}></div> : "Apply Now"}
          </button>
        </>
      )}
    </div>
  );
};

export default Input;
