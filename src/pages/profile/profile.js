import React from 'react';
import styles from './profile.module.css';
import profileImage from '../../assets/images/profile.JPG'; // 프로필 이미지 경로를 적절히 수정하세요
import badgeImage from '../../assets/images/green.svg';
import grayBadgeImage from '../../assets/images/gray.svg'; // 회색 배지 이미지 경로를 적절히 수정하세요

const Profile = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>프로필 조회</div>
      <div className={styles.innerContainer}>
        <div className={styles.profileContainer}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
          <div className={styles.profileName}>서하은</div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>내 프로필</div>
          <div className={styles.formGroup}>
            <label className={styles.label}>이름</label>
            <input type="text" className={styles.input} value="서하은" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <input type="email" className={styles.input} value="haeun@gmail.com" readOnly />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>획득한 챌린지 배지</div>
          <div className={styles.badgeContainer}>
            <img src={badgeImage} alt="Badge" className={styles.badgeImage} />
            <img src={grayBadgeImage} alt="Gray Badge" className={styles.badgeImage} />
            <img src={grayBadgeImage} alt="Gray Badge" className={styles.badgeImage} />
            <img src={grayBadgeImage} alt="Gray Badge" className={styles.badgeImage} />
            <img src={grayBadgeImage} alt="Gray Badge" className={styles.badgeImage} />
          </div>
          <div className={styles.badgeText}>챌린지를 3번 더 하면 파란색 배지를 얻을 수 있어요!</div>
        </div>
        <div className={styles.links}>
          <div className={styles.linkBlue}>프로필 수정</div>
          <div><span className={styles.linkBlack}>오공챌이란? </span><a href="/about-challenge" className={styles.linkBlue}>설명 보러가기</a></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
