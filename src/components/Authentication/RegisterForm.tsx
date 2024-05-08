import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import toastify components
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import { signUpUser } from "@/services/apiservices";
import { error } from "console";
import { useAccount } from "wagmi";


const RegisterForm = () => {
  const [error, setError] = useState(false);
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = () => {
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    } else if (formData.password !== formData.repeatPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

 const handleSubmit = async (e: any) => {
		e.preventDefault(); // Prevent the form from submitting traditionally

		// Check if the user is connected and has a valid address
		if (isConnected && address) {
			console.log("Connected with address:", address);
			localStorage.setItem("address", address); // Save the address in local storage

			// Validate the password input
			if (!validatePassword()) {
				toast.error("Password validation failed.");
				return;
			}

			try {
				// Make the API call to register the user
				const response = await signUpUser(
					formData.name,
					formData.email,
					formData.password,
          address
				);
				console.log("Registration response:", response);

				// Assuming the response includes the user's data if successful
				localStorage.setItem("name", formData.name);
				localStorage.setItem("email", formData.email);

				// Clear the form data
				setFormData({
					name: "",
					email: "",
					password: "",
					repeatPassword: "",
				});

				// Notify the user of success
				// toast.success("User Registered Successfully");
			} catch (error:any) {
				console.error("Registration error:", error);
				toast.error("Registration failed: " + error.message);
			}
		} else {
			// Notify the user that their wallet needs to be connected
			toast.error("Please connect your wallet to register.");
		}
 };


  return (
    <>
      <form className="login-register-form">
        <h4>Create An Account</h4>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error-message">Something Went Wrong</div>}

        <div className="form-group">
          <button
            className="default-btn active rounded-10 w-100 text-center d-block border-0"
            onClick={handleSubmit}
          >
            Register Now
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
