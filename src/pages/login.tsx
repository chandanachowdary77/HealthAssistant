import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [showResend, setShowResend] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // ✅ Password visibility state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
    setShowResend(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", formData.email.toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMsg("This email is not registered. Please sign up first.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      await user.reload();

      if (user.emailVerified) {
        navigate("/index");
      } else {
        setErrorMsg("Please verify your email before logging in.");
        setShowResend(true);
        await signOut(auth);
      }
    } catch (err: any) {
      console.error("Firebase Auth Error Code:", err.code);
      switch (err.code) {
        case "auth/wrong-password":
          setErrorMsg("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setErrorMsg("Invalid email format.");
          break;
        case "auth/too-many-requests":
          setErrorMsg("Too many failed attempts. Please try again later.");
          break;
        case "auth/invalid-credential":
          setErrorMsg("Invalid email or password. Please try again.");
          break;
        default:
          setErrorMsg("Login failed. Please try again.");
      }
    }
  };

  const handleResendVerification = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      await user.reload();

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        alert("Verification email sent. Please check your inbox.");
        await signOut(auth);
      } else {
        alert("Your email is already verified. You can log in.");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
      <div className="bg-white/85 backdrop-blur-md shadow-lg rounded-xl p-8 m-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Health Assistant Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-green-400 focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-gray-600 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          {showResend && (
            <button
              type="button"
              onClick={handleResendVerification}
              className="text-green-600 hover:underline text-sm font-medium mt-2"
            >
              Resend Verification Email
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-700">
          <p>
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-green-600 hover:underline font-medium"
            >
              Sign Up
            </button>
          </p>
          <p className="mt-2">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-green-600 hover:underline font-medium"
            >
              Forgot Password?
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
