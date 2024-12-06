import { useState } from "react";
import { EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

const SignUpModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState(""); // Added state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use state variables instead of accessing e.target directly
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Send POST request to the API
    fetch("https://api-fresh-harvest.code-commando.com/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName: name, email, password }), // Pass user details in request body
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // const handleSubmitUtils = ({ email, password }) => {
          //   fetch(
          //     "https://api-fresh-harvest.code-commando.com/api/v1/auth/login",
          //     {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //       body: JSON.stringify({ email, password }), // Pass email and password to API
          //     }
          //   )
          //     .then((res) => {
          //       if (!res.ok) {
          //         throw new Error("Failed to log in"); // Handle non-200 responses
          //       }
          //       return res.json();
          //     })
          //     .then((data) => {
          //       if (data.success) {
          //         const token = data.data.token; // Extract the token from the response
          //         localStorage.setItem("token", token); // Save the token in localStorage
          //         console.log("Token saved to localStorage:", token);
          //         alert(data.message); // Notify the user about successful login
          //         // Redirect or perform further actions
          //       } else {
          //         alert(data.message || "Login failed!"); // Notify about any issues
          //       }
          //     })
          //     .catch((error) => {
          //       console.error("Error during login:", error.message);
          //       alert("An error occurred. Please try again.");
          //     });
          // };

          alert(data.message); // Notify user about successful registration
          onClose(); // Close the modal after successful signup
        } else {
          alert(data.message || "Registration failed!");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
        alert("An error occurred. Please try again.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <XIcon size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="signup-name" className="block mb-1 text-black">
              Name
            </label>
            <input
              type="text"
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input change
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-email" className="block mb-1 text-black">
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-password" className="block mb-1 text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
                className="w-full px-3 py-2 border rounded pr-10 text-black"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-1 text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update state on input change
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 font-semibold text-black">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-orange-500 hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
