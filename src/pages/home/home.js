// src/components/Home/Home.js

import React, { useState } from "react";
import styles from "./home.module.css";
import { ReactComponent as Run } from "../../components/images/run.svg";
import { ReactComponent as Pen } from "../../components/images/pencil.svg";
import { ReactComponent as Dice } from "../../components/images/dice.svg";
import { ReactComponent as Dumbbel } from "../../assets/images/dumbbell.svg";
import { ReactComponent as Study } from "../../assets/images/study.svg";
import { ReactComponent as Dice_3D } from "../../assets/images/dice_3D.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Plus } from "../../assets/images/plus_orange.svg";

import ListBox from "../../components/listBox/listBox";
import RendomBox from "../../components/rendomBox/rendomBox";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleListBoxClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null); // Reset selected image when modal is closed
  };

  const handlePhotoZoneClick = () => {
    document.getElementById("imageUpload").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.profile}>
        <Profile />
        <div style={{ width: "30vw" }}>
          <div className={styles.profile_text}>Hello!</div>
          <div className={styles.profile_text}>김동국님</div>
        </div>
      </div>

      <div className={styles.inner_container}>
        <div className={styles.home_title}>Today's challenge</div>
        <div className={styles.challenge_top}>
          <div className={styles.challenge_top_title}>진행중인 챌린지</div>
          <div className={styles.challenge_top_content}>
            <ListBox
              content={"대운동장 3바퀴 뛰기"}
              category={"운동"}
              state={"완료"}
              onClick={handleListBoxClick}
            />
            <ListBox
              content={"대운동장 3바퀴 뛰기"}
              category={"운동"}
              state={"완료"}
              onClick={handleListBoxClick}
            />
            <ListBox
              content={"대운동장 3바퀴 뛰기"}
              category={"운동"}
              state={"완료"}
              onClick={handleListBoxClick}
            />
          </div>
        </div>

        <div className={styles.challenge_bottom}>
          <div className={styles.challenge_top_title}>추천 챌린지</div>
          <div className={styles.horizontal_scroll_container}>
            <RendomBox content={"캠퍼스 산책"} Icon={Dumbbel} time={"1h"} category={"운동"} />
            <RendomBox content={"다음 수업 예습"} Icon={Study} time={"30m"} category={"공부"} />
            <RendomBox content={"영화 시청"} Icon={Dice_3D} time={"2h"} category={"여가"} />
            <RendomBox content={"캠퍼스 산책"} Icon={Study} time={"1h"} category={"공부"} />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>사진 기록 남기기</h2>
        <div
          className={styles.photozone}
          onClick={handlePhotoZoneClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "150px",
            border: "1px dashed #ccc",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px", // 둥근 모서리 설정
          }}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // 정사각형 비율 유지
                borderRadius: "10px", // 이미지도 둥글게
              }}
            />
          ) : (
            <Plus />
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className={styles.completeButton}>도전 완료하기</div>
      </Modal>
    </div>
  );
}

export default Home;
