import React from "react";
import styles from "./list.module.css";

function List() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>당신을 위한 챌린지</div>
      <div className={styles.inner_container}></div>
    </div>
  );
}

export default List;
