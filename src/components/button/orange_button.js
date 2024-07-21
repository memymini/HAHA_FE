import React, { useState } from "react";
import styles from "./orange_button.module.css";

const OrangeButton = ({ text, width }) => {
  const buttonStyle = {
    width: width,
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {text}
    </button>
  );
};

export default OrangeButton;
