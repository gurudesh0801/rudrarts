import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // On success, store the JWT token and navigate to the dashboard
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      } else {
        // Handle errors
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-teal-600 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Login to manage your account and explore more.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-teal-500 focus:border-teal-500 text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border rounded-lg focus:ring-teal-500 focus:border-teal-500 text-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 px-4 rounded-lg font-bold text-lg hover:opacity-90 transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 py-3 px-4 bg-gray-100 border rounded-lg hover:bg-gray-200 transition duration-300">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="inline w-5 h-5 mr-2"
            />
            Google
          </button>
          <button className="flex-1 py-3 px-4 bg-gray-100 border rounded-lg hover:bg-gray-200 transition duration-300">
            <img
              src="https://img.icons8.com/ios-filled/24/facebook-new.png"
              alt="Facebook"
              className="inline w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
