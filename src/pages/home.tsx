import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200">
      <header className="flex justify-between items-center bg-green-700 text-white px-8 py-5 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">🌿 Health Dashboard</h1>
        <div>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-green-700 font-semibold px-5 py-2 rounded-lg shadow mr-3 hover:bg-green-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-green-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-green-100 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      <main className="p-8">
        <section className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Your Health Summary</h2>
          <img
            src="https://img.freepik.com/free-vector/flat-design-health-insurance-template_23-2149335642.jpg"
            alt="Health"
            className="w-full max-h-80 object-cover rounded-xl mb-6"
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-green-800">
            <div className="bg-green-100 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-1">💓 Heart Rate</h3>
              <p className="text-lg font-medium">72 bpm</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-1">💧 Water Intake</h3>
              <p className="text-lg font-medium">2.5 L/day</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-1">🛌 Sleep Duration</h3>
              <p className="text-lg font-medium">7 hrs</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-1">🥗 Nutrition Score</h3>
              <p className="text-lg font-medium">Good</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
