
import { useState } from 'react';
import styles from "./Register.module.css";
import { Link, useLocation } from "react-router-dom";


export default function Form() {

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className={styles.success}
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h3> {name} successfully registered!!</h3>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className={styles.error}
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the required fields</h1>
			</div>
		);
	};

  const [userGender, setUserGender] = useState("Gender");

  const handleChange = (event) => {
    setUserGender(event.target.value)
  }

	return (
		<div className={styles.form}>
			<div className={styles.register}>
				<h1>Register</h1>
			</div>

			{/* Calling to the methods */}
			<div className={styles.messages}>
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				<label className="label">Name</label>
				<input onChange={handleName} className={styles.input}
					value={name} type="text" />

                <label className="label">Gender</label>
				<select className={styles.label} value={userGender} onChange={handleChange}>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>

       				 {/* <label className="label">Gender</label>
				  <input onChange={handleName} className={styles.input}
					  value={name} type="text" /> */}

                <label className="label">Age</label>
				<input onChange={handleName} className={styles.input}
					value={name} type="text" />

				<label className="label">Email</label>
				<input onChange={handleEmail} className={styles.input}
					value={email} type="email" />

				<label className="label">Password</label>
				<input onChange={handlePassword} className={styles.input}
					value={password} type="password" />

                <label className="label">Weight</label>
				<input onChange={handleName} className={styles.input}
					value={name} type="text" />

                <label className="label">Height</label>
				<input onChange={handleName} className={styles.input}
					value={name} type="text" />

				<button onClick={handleSubmit} className={styles.btn}
						type="submit">
					Submit
				</button>
				<div className={styles.signin_option}>
					<span>Have account? </span>
					<span className={styles.signin}>  <Link  to="/login">
						signin
						</Link>
					</span>
              
        </div>
			</form>
		</div>
	);
}
