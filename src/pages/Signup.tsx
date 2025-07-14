import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const startsWithCapital = /^[A-Z]/.test(password);
    const hasSymbol = /[@$!%*?&]/.test(password);
    const hasNumber = /\d/.test(password);
    const minLength = password.length >= 6;
    return startsWithCapital && hasSymbol && hasNumber && minLength;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must start with a capital letter, contain at least one number and symbol, and be at least 6 characters long.";
    } else if (password !== confirmPassword) {
      newErrors.password = "Passwords do not match.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date(),
        emailVerified: user.emailVerified,
      });

      alert("Account created! Please verify your email before logging in.");
      navigate("/login");
    } catch (err: any) {
      console.error("Signup error:", err.code, err.message);
      if (err.code === "auth/email-already-in-use") {
        setErrors({ email: "This email is already registered." });
      } else if (err.code === "auth/invalid-email") {
        setErrors({ email: "Invalid email address." });
      } else if (err.code === "auth/weak-password") {
        setErrors({ password: "Weak password. Please choose a stronger password." });
      } else {
        alert("Signup failed: " + err.message);
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
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              required
              className="w-full p-3 border border-gray-300 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-600 text-sm"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-700">
          <p>
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-600 hover:underline font-medium"
            >
              Login
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

export default Signup;
