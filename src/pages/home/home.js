import styles from "./home.module.css";
import React from "react";
import {ReactComponent as Run } from '../../components/images/run.svg';
import {ReactComponent as Pen } from '../../components/images/pencil.svg';
import {ReactComponent as Dice } from '../../components/images/dice.svg';
import {ReactComponent as Dumbbel } from '../../assets/images/dumbbell.svg';
import {ReactComponent as Study } from '../../assets/images/study.svg';
import {ReactComponent as Dice_3D } from '../../assets/images/dice_3D.svg';
import {ReactComponent as Profile } from '../../assets/images/profile.svg';

import RendomBox from "../../components/rendomBox/rendomBox";

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.profile}>
        <Profile />
        <div style={{width: '30vw'}}>
          <div className={styles.profile_text}>
            Hello!
          </div>
          <div className={styles.profile_text}>
            김동국님
          </div>
        </div>
      </div>

      <div className={styles.inner_container}>
        <div className={styles.home_title}>Today's challenge</div>
        <div className={styles.challenge_top}>
          <div className={styles.challenge_top_title}>진행중인 챌린지</div>
          <div className={styles.challenge_top_content}>
            <div className={styles.challenge_top_listBox}>
              <div style={{ display: "flex", flexDirection:"row"}}>
              <div className={styles.challenge_top_listBox_icon_run}>
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
              <div className={styles.challenge_top_listBox_icon_pen} style={{backgrondColor: '#FFFCBE'}}>
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
              <div className={styles.challenge_top_listBox_icon_dice}>
                <Dice/>
              </div>
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
          <div className={styles.horizontal_scroll_container}>
            <RendomBox content={"캠퍼스 산책"} Icon={Dumbbel} time={"1h"} category={"운동"}/>
            <RendomBox content={"다음 수업 예습"} Icon={Study} time={"30m"} category={"공부"}/>
            <RendomBox content={"영화 시청"} Icon={Dice_3D} time={"2h"} category={"여가"}/>
            <RendomBox content={"캠퍼스 산책"} Icon={Study} time={"1h"} category={"공부"}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
