import React, { useState } from 'react';
import styles from './signup.module.css';
import profileImagePlaceholder from '../../assets/images/profile.JPG'; // 프로필 이미지 경로를 적절히 수정하세요
import eyeIcon from '../../assets/images/eye.png'; // 눈 아이콘 경로를 적절히 수정하세요

const Signup = () => {
  const [profileImage, setProfileImage] = useState(profileImagePlaceholder);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>회원가입</div>
      <div className={styles.innerContainer}>
        <div className={styles.profileContainer}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
          <label htmlFor="fileInput" className={styles.fileInputLabel}>사진 선택</label>
          <input 
            type="file" 
            id="fileInput"
            accept="image/*" 
            className={styles.fileInput} 
            onChange={handleImageChange} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>이름</label>
          <input type="text" id="name" className={styles.input} placeholder="이름을 입력해주세요." />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>이메일</label>
          <input type="email" id="email" className={styles.input} placeholder="이메일을 입력해주세요." />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>비밀번호</label>
          <div className={styles.passwordContainer}>
            <input type="password" id="password" className={styles.input} />
            <img src={eyeIcon} alt="Eye Icon" className={styles.eyeIcon} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>비밀번호 확인</label>
          <div className={styles.passwordContainer}>
            <input type="password" id="confirmPassword" className={styles.input} />
            <img src={eyeIcon} alt="Eye Icon" className={styles.eyeIcon} />
          </div>
        </div>
        <button className={styles.signupButton}>회원가입</button>
        <div className={styles.loginLink}>
          계정이 있으신가요? <a href="/login" className={styles.loginLinkText}>로그인</a> 하러가기
        </div>
      </div>
    </div>
  );
};

export default Signup;
