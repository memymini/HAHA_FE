import React, { useState } from 'react';
import styles from './profileUpdate.module.css';
import profileImage from '../../assets/images/profile.JPG'; // 프로필 이미지 경로를 적절히 수정하세요

const ProfileUpdate = () => {
  const [name, setName] = useState('서하은');
  const [email, setEmail] = useState('haeun@gmail.com');

  const handleSave = () => {
    // 여기서 서버에 저장 요청을 보내는 로직을 구현하세요
    console.log('저장된 이름:', name);
    console.log('저장된 이메일:', email);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>프로필 조회</div>
      <div className={styles.innerContainer}>
        <div className={styles.profileContainer}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
          <div className={styles.profileName}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>내 프로필</div>
          <div className={styles.formGroup}>
            <label className={styles.label}>이름</label>
            <input 
              type="text" 
              className={styles.input} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <input 
              type="email" 
              className={styles.input} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>
        <div className={styles.links}>
          <button className={styles.button} onClick={handleSave}>프로필 수정</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
