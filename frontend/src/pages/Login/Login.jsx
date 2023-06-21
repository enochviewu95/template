import styles from "./Login.module.css";
//import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useGLogin } from "../../hooks/useGLogin";
import Navbar from "../../components/Navbar/Navbar";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";



function Login() {
  const [role, setRole] = useState("patient");
  const { handleGoogleLogin, loginResults } = useGLogin(role);

  const { handleLogout } = useLogout();
  const patient = useSelector((state) => {
    return state.patient;
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

//   const loginHandler = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       handleGoogleLogin(tokenResponse);
//     },
//   });

  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
       
        <div className={styles.left_wrapper}>
          <div className={styles.card}>
            <div>
              <h2 className={styles.content_left_wrapper}>
                Manage your Health,not just your Records
              </h2>
            </div>
            <img src="Group 9424.webp" alt="" className={styles.img2} />
          </div>v
        </div>
        <div className={styles.right_wrapper}>
          <h4 className={styles.login_content}>
            Verify Yourself to Proceed Further
          </h4>
          <div className={styles.for_inline}>
            <label className={styles.patients_input} htmlFor="role">
              I am a:
            </label>
            <select
              className={styles.input_text1}
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option className={styles.usertype} value="patient">
                Patient
              </option>
              <option className={styles.usertype} value="doctor">
                Doctor
              </option>
            </select>

          <div className={styles.row}>
          <label className={styles.color} htmlFor="email">
            Email address:
          </label>
          <input
            className={styles.input_text}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={patient.email}
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="password">
            User Password:
          </label>
          <input
            className={styles.input_text}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button disabled={loginResults.isLoading}
                onClick={() => loginHandler()} 
                className={styles.submit_button} type="submit">
          Submit
        </button>

        <div className={styles.signin_option}>
					<span>Don't have account? </span>
					<span className={styles.signin}>  <Link  to="/register">
						SignUp
						</Link>
					</span>
              
        </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
