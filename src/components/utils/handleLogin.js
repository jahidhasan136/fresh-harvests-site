export const handleSubmit = ({ email, password }) => {
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
