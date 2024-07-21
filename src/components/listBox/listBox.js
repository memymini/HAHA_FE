import React from "react";
import styles from "./listBox.module.css";
import {ReactComponent as Run } from '../images/run.svg';
import {ReactComponent as Pen } from '../images/pencil.svg';
import {ReactComponent as Dice } from '../images/dice.svg';

function ListBox({content, category, state, onClick}) {
    return (
            <div className={styles.challenge_top_listBox} onClick={onClick}>
              <div style={{ display: "flex", flexDirection:"row"}}>
              <div className={styles.challenge_top_listBox_icon_pen} style={{backgrondColor: '#FFFCBE'}}>
                <Pen />
              </div>
              <div className={styles.challenge_top_listBox_text}>
                <div className={styles.challenge_top_listBox_text_top}>{content}</div>
                <div className={styles.challenge_top_listBox_text_bottom}>{category}</div>
              </div>
              </div>
              <div className={styles.challenge_top_listBox_state}>{state}</div>
            </div>
    )
}

export default ListBox;