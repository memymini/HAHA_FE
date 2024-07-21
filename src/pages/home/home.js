import styles from "./home.module.css";
import React from "react";
import {ReactComponent as Run } from '../../components/images/run.svg';
import {ReactComponent as Pen } from '../../components/images/pencil.svg';
import {ReactComponent as Dice } from '../../components/images/dice.svg';


function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.profile}></div>
      <div className={styles.inner_container}>
        <div className={styles.home_title}>Today's challenge</div>
        <div className={styles.challenge_top}>
          <div className={styles.challenge_top_title}>진행중인 챌린지</div>
          <div className={styles.challenge_top_content}>
            <div className={styles.challenge_top_listBox}>
              <div style={{ display: "flex", flexDirection:"row"}}>
              <div className={styles.challenge_top_listBox_icon}>
                <Run />
              </div>
              <div className={styles.challenge_top_listBox_text}>
                <div className={styles.challenge_top_listBox_text_top}>대운동장 3바퀴 뛰기</div>
                <div className={styles.challenge_top_listBox_text_bottom}>운동</div>
              </div>
              </div>
              <div className={styles.challenge_top_listBox_state}>완료</div>
            </div>
            
            <div className={styles.challenge_top_listBox}>
              <div style={{ display: "flex", flexDirection:"row"}}>
              <div className={styles.challenge_top_listBox_icon} style={{backgrondColor: '#FFFCBE'}}>
                <Pen />
              </div>
              <div className={styles.challenge_top_listBox_text}>
                <div className={styles.challenge_top_listBox_text_top}>대운동장 3바퀴 뛰기</div>
                <div className={styles.challenge_top_listBox_text_bottom}>운동</div>
              </div>
              </div>
              <div className={styles.challenge_top_listBox_state}>완료</div>
            </div>

            <div className={styles.challenge_top_listBox}>
              <div style={{ display: "flex", flexDirection:"row"}}>
              <div className={styles.challenge_top_listBox_icon} />
              <div className={styles.challenge_top_listBox_text}>
                <div className={styles.challenge_top_listBox_text_top}>대운동장 3바퀴 뛰기</div>
                <div className={styles.challenge_top_listBox_text_bottom}>운동</div>
              </div>
              </div>
              <div className={styles.challenge_top_listBox_state}>완료</div>
            </div>

          </div>

        </div>

        <div className={styles.challenge_bottom}>
          <div className={styles.challenge_top_title}>추천 챌린지</div>
          

        </div>
      </div>
    </div>
  );
}

export default Home;
