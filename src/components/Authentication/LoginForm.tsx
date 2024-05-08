import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	// signInWithEmailAndPassword,
} from "firebase/auth";
import { loginUser, getUser } from "@/services/apiservices";

import app from "../../utils/FirebaseAuth"; // Make sure the path is correct for your Firebase configuration

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const auth = getAuth(app);
	const { address, isConnected } = useAccount();
	console.log(isConnected);
	// const [isWalletConnected, setWalletConnected] = useState(false);

	const handleLogin = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		let userAddress = localStorage.getItem("address");
		if (isConnected && userAddress === address) {
			try {
				const response = await loginUser(email, password, address);
				if (response) {
					toast.success("Login successful!");
					window.location.href = "/";
				} else {
					toast.error(`Email or Password is incorrect`);
					console.log(response);
				}
			} catch (error: any) {
				console.error("Login error:", error);
				toast.error(`Login failed: ${error.message}`);
			} finally {
				setLoading(false);
			}
		} else {
			toast.error("Please connect your correct wallet");
		}
	};

	const signInWithGoogle = async () => {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auth, provider);
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential: any =
				GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.

			const user = result.user;
			let response = await getUser(user.displayName, user.email, address);
			console.log(response);
			console.log(user);
			window.location.href = "/dashboard";
			toast.success("Login successful");
		} catch (error: any) {
			// Handle Errors here.
			const errorMessage = error.message;
			toast.error(`Login failed: ${errorMessage}`);
		}
	};

	return (
		<>
			<form className='login-register-form' onSubmit={handleLogin}>
				<h4>Log In To Your Account</h4>

				<div className='form-group'>
					<input
						type='email'
						className='form-control'
						placeholder='Email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Password'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='form-group d-flex justify-content-between'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							id='keepLoggedIn'
						/>
						<label
							className='form-check-label'
							htmlFor='keepLoggedIn'>
							Keep me logged in
						</label>
					</div>
					<Link href='/authentication/forgot-password'>
						Forgot your password?
					</Link>
				</div>

				<div className='form-group'>
					{isConnected ? (
						<div>
							<button
								type='submit'
								// className='default-btn active rounded-10 w-100 text-center d-block border-0'
								className={`default-btn rounded-10 w-100 text-center d-block border-0  active bg-blue-600 hover:bg-blue-700"
						}`}>
								Log In
							</button>
						</div>
					) : (
						<div>
							<button
								type='submit'
								disabled
								// className='default-btn active rounded-10 w-100 text-center d-block border-0'
								className='default-btn rounded-10 w-100 text-center d-block border-0 		
							bg-gray-400 cursor-not-allowed hover:bg-red-600'>
								Please connect your wallet 
							</button>
						</div>
					)}
				</div>

				<div className='form-group text-center or'>
					<span className='bg'>Or</span>
				</div>

				<div className='form-group'>
					{isConnected ? (
						<button
							onClick={(e) => {
								e.preventDefault();
								signInWithGoogle();
							}}
							className='login-others google '
							disabled={!isConnected}>
							Login With Google
						</button>
					) : (
						<button
							className='login-others google  cursor-not-allowed'
							disabled>
							Please connect your wallet
						</button>
					)}
				</div>
			</form>
			<ToastContainer />
		</>
	);
};

export default LoginForm;
