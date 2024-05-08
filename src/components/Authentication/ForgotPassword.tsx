"use client"

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
	// State to store form fields
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");

	// // Function to handle form submission
	// const handleSubmit = async (event: any) => {
	// 	event.preventDefault();

	// 	// Check if passwords match
	// 	if (password !== confirmPassword) {
	// 		// alert("Passwords do not match!");
	// 		toast.error("Passwords do not match");

	// 		return;
	// 	}

	// 	// API request body
	// 	const requestBody = {
	// 		email,
	// 		password,
	// 	};

	// 	try {
	// 		// API call to forgotPassword endpoint
	// 		const response = await fetch("/api/forgotPassword", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(requestBody),
	// 		});

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			// Handle success response
	// 			console.log("Password reset successful", data);
	// 			toast.success("Password reset successful");
	// 			window.location.href = "/authentication";
	// 			// alert("Password reset link has been sent to your email.");
	// 		} else {
	// 			// Handle server errors or unsuccessful responses
	// 			const errorData = await response.json();
	// 			// console.error("Password reset failed", errorData);
	// 			toast.error("Password reset failed", errorData);

	// 			// alert(errorData.message || "Failed to reset password.");
	// 		}
	// 	} catch (error) {
	// 		// Handle network errors
	// 		console.error("Network error:", error);
	// 		toast.error("Password reset failed");

	// 		// alert("Network error. Please try again later.");
	// 	}
	// };

	return (
		<>
			<div className='login-register-area ptb-175'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<form
								className='login-register-form'
								>
								<h4>Forgot your Password?</h4>

								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										placeholder='Email'
										// value={email}
										// onChange={(e) =>
										// 	setEmail(e.target.value)
										// }
									/>
								</div>

								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='New Password'
										// value={password}
										// onChange={(e) =>
										// 	setPassword(e.target.value)
										// }
									/>
								</div>

								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Confirm New Password'
										// value={confirmPassword}
										// onChange={(e) =>
										// 	setConfirmPassword(e.target.value)
										// }
									/>
								</div>

								<div className='form-group'>
									<button
										type='submit'
										className='default-btn active rounded-10 w-100 text-center d-block border-0'>
										Reset Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default ForgotPassword;
