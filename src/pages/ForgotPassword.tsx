import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link has been sent to your email.");
    } catch (err: any) {
      console.error("Password reset error:", err);
      if (err.code === "auth/user-not-found") {
        setError("Email not found. Please sign up first.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end bg-no-repeat"
      style={{
        backgroundImage: "url('/images/health.jpg')",
        backgroundPosition: "left center",
        backgroundSize: "auto",
      }}
    >
      <div className="bg-white/85 backdrop-blur-md shadow-xl rounded-xl px-8 py-10 w-full max-w-sm m-10">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          {message && <p className="text-green-600 text-sm">{message}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-semibold"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-700">
          <button
            onClick={() => navigate("/login")}
            className="text-green-600 hover:underline font-medium"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
