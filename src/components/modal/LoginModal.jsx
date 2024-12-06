import { useState } from "react";
import { EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import SignUpModal from "./SignUpModal";

const LoginModal = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignUpModal = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(!isSignUpOpen);
  };
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value; // Get the email from the form
    const password = e.target.password.value; // Get the password from the form

    fetch("https://api-fresh-harvest.code-commando.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Pass email and password to API
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to log in"); // Handle non-200 responses
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          const token = data.data.token; // Extract the token from the response
          localStorage.setItem("token", token); // Save the token in localStorage
          console.log("Token saved to localStorage:", token);
          alert(data.message); // Notify the user about successful login
          // Redirect or perform further actions
        } else {
          alert(data.message || "Login failed!"); // Notify about any issues
        }
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleLoginModal}
        className="px-4 py-2 text-white rounded"
      >
        Sign in
      </button>

      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <XIcon size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-black">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="remember" className="text-black">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-orange-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4 text-black  font-semibold">
              Dont have an account?{" "}
              <button
                onClick={toggleSignUpModal}
                className="text-orange-500 hover:underline"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={toggleSignUpModal}
        onSwitchToLogin={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
};

export default LoginModal;
