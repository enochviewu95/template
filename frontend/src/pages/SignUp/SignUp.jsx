import React from 'react';
import styles from "./SignUp.module.css";
import Navbar from '../../components/Navbar/Navbar';

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.mainContainer}>Don't have accounts? SignUp</div>
    </>
  )
}

export default SignUp