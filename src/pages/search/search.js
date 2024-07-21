import React from "react";
import styles from "./search.module.css";
import exercise from "../../assets/images/exercise.png";
import study from "../../assets/images/study.png";
import relexing from "../../assets/images/relexing.png";
import OrangeButton from "../../components/button/orange_button";

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>챌린지 찾으러 가기</div>
      <div className={styles.inner_container}>
        <div className={styles.inner_text}>카테고리</div>
        <div className={styles.category_wrapper}>
          <img src={exercise} alt="Exercise" className={styles.category} />
          <img src={study} alt="Exercise" className={styles.category} />
          <img src={relexing} alt="Exercise" className={styles.category} />
        </div>
        <div className={styles.inner_text}>공강시간</div>
        <div className={styles.duration_wrapper}>
          <div
            className={styles.duration}
            style={{ backgroundColor: "#FFC692" }}
          >
            30m
          </div>
          <div
            className={styles.duration}
            style={{ backgroundColor: "#FEB36F" }}
          >
            1h
          </div>
          <div
            className={styles.duration}
            style={{ backgroundColor: "#FFA350" }}
          >
            2h
          </div>
          <div
            className={styles.duration}
            style={{ backgroundColor: "#FF8D24" }}
          >
            3h+
          </div>
        </div>
        <OrangeButton
          text="찾아보기"
          width="80%"
        />
      </div>
    </div>
  );
}

export default Search;
