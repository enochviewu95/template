import { Link, useLocation } from "react-router-dom";
//import Brand from "../../assets/Brand.svg";
//import Brand2 from "../../assets/Brand2.svg";
import Logo from "../img/Logo.png"
import styles from "./Navbar.module.css";
import Account from "../../assets/account.svg";
import { useSelector } from "react-redux";
import Burger from "../Burger/Burger";


const Navbar = () => {
  const patient = useSelector((state) => {
    return state.patient;
  });

  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <div className={styles.logoSection}>
             <img alt="logo" src={Logo} />
              <span className={styles.brand}>
                Health<p className={styles.brandIn}>Doc</p>
              </span>
            </div>
          </Link>
        </div>
        <div className={styles.nav_elements}>
          <ul>
            <li
              className={
                location.pathname === "/HealthHistory" ? styles.active : ""
              }
            >
              <Link to="/health_history">Health History</Link>
            </li>
            <li
              className={
                location.pathname === "/prescription" ? styles.active : ""
              }
            >
              <Link to="/Prescription">Prescriptions</Link>
            </li>
            <li className={location.pathname === "/test" ? styles.active : ""}>
              <Link to="/test">Tests & Reports</Link>
            </li>
            <li>
              <div className={styles.appointment}>
                <Link style={{ color: "black" }} to="/appointment">
                  Appointment
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.signIn}>
                <img alt="account" src={Account} />
                {!patient.isLoggedIn ? (
                   <Link to="/Settings/Account">Account</Link>
                  
                ) : (
                  <Link to= "/Login">Sign In</Link>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.hamburger}><Burger patient/></div>
      </div>
    </nav>
  );
};


export default Navbar;
