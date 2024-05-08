const URL = "https://euiryebbnmbvd.cicc.app/api";
import axios from "axios";
import { PassThrough } from "stream";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export async function loginUser(email: any, password: any, walletAddress:any) {
	const data = {
		email,
		password,
		walletAddress,
	};

	try {
		const response = await axios.post(`${URL}/user/login`, data);
		console.log("User created:", response.data);
		return response.data;
	} catch (error: any) {
		console.error(
			"Error creating user:",
			error.response ? error.response.data : error.message
		);
		
	}
}

export async function signUpUser(
	name: any,
	email: any,
	password: any,
	walletAddress: any
) {
	console.log("NEXt api base url ", URL);
	const data = {
		name,
		email,
		password,
		walletAddress,
	};

	try {
		const response = await axios.post(`${URL}/user/signup`, data);
		console.log("User created:", response.data);
		toast.success("User created successfully")
		return response.data;
	} catch (error: any) {
		console.log(
			"Error creating user is----->:",
			error.response ? error.response.data.error : error.message
		);
		toast.error(error.response ? error?.response?.data?.error : error.message);
		return false;
	}
}

export async function getUser(name:any, email: any, walletAddress:any) {
	console.log("NEXt api base url ", URL);
	const data = {name,email,walletAddress};

	try {
		const response = await axios.post(`${URL}/user/getUser`, data);
		console.log("User created:", response.data);
		return response.data;
	} catch (error: any) {
		console.log(
			"Error creating user is----->:",
			error.response ? error.response.data.error : error.message
		);
		// alert(error.response ? error?.response?.data?.error : error.message);
		return false;
	}
}
