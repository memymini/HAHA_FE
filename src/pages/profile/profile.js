import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profile.module.css';
import profileImage from '../../assets/images/profile.JPG'; // 프로필 이미지 경로를 적절히 수정하세요
import badgeImage from '../../assets/images/green.svg';
import grayBadgeImage from '../../assets/images/gray.svg'; // 회색 배지 이미지 경로를 적절히 수정하세요

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // localStorage에서 memberId를 제거합니다.
      localStorage.removeItem('memberId');
      navigate('/login'); // 로그아웃 후 로그인 페이지로 리다이렉션
    } catch (error) {
      console.error('로그아웃에 실패했습니다:', error);
      // 오류 처리 (예: 사용자에게 오류 메시지 표시)
    }
  };

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
          <div>
            <span className={styles.linkBlack}>오공챌이란? </span>
            <a href="/about-challenge" className={styles.linkBlue}>설명 보러가기</a>
          </div>
          <div className={styles.linkBlue} onClick={handleLogout} style={{ cursor: 'pointer' }}>로그아웃</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
