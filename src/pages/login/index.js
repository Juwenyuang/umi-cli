import React from 'react';
import styles from './page.css';
import LoginComponent from './components/login';

function Login() {
  return (
    <div className={styles.normal}>
      <LoginComponent />
    </div>
  );
}

export default Login;
