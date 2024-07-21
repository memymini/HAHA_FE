import React from 'react';
import styles from './login.module.css';
import eyeIcon from '../../assets/images/eye.png';  // 이미지 경로를 적절히 수정하세요

const Login = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>환영합니다!</div>
      <div className={styles.innerContainer}>
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
        <button className={styles.loginButton}>로그인</button>
        <div className={styles.signupLink}>
          계정이 없으신가요? <a href="/signup" className={styles.signupLinkText}>회원가입</a> 하러가기
        </div>
      </div>
    </div>
  );
};

export default Login;
