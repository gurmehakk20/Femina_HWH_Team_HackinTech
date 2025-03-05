import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaGlassWhiskey } from 'react-icons/fa';

const GeneralFitness = () => {
  const [hydration, setHydration] = useState(0);
  const hydrationGoal = 8;
  const [popup, setPopup] = useState(false);
  const [steps, setSteps] = useState(7600); // Example steps
  const stepsGoal = 10000; // Example steps goal
  const [distance, setDistance] = useState(7.6); // Example distance
  const distanceGoal = 10; // Example distance goal
  const [height, setHeight] = useState(''); // User's height
  const [weight, setWeight] = useState(''); // User's weight
  const [bmi, setBmi] = useState(null); // BMI value

  useEffect(() => {
    if (hydration === hydrationGoal) {
      setPopup(true);
      const timer = setTimeout(() => {
        setPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hydration]);

  const handleIncrement = () => {
    if (hydration < hydrationGoal) {
      setHydration((prevHydration) => prevHydration + 1);
    }
  };

  const handleDecrement = () => {
    if (hydration > 0) {
      setHydration((prevHydration) => prevHydration - 1);
    }
  };

  const hydrationPercentage = (hydration / hydrationGoal) * 100;
  const stepsPercentage = (steps / stepsGoal) * 100;
  const barWidth = Math.min((hydration / hydrationGoal) * 100, 100);
  const distancePercentage = Math.min((distance / distanceGoal) * 100, 100);

  const handleBmiCalculation = () => {
    if (height && weight) {
      const bmiValue = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
      setBmi(bmiValue);
    }
  };

  // Function to handle goal setting
  const handleSetGoals = () => {
    // Add functionality to set goals here
    console.log("Setting Goals");
  };

  return (
    <div className="flex bg-pink-100 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-200 w-64 p-4">
        <nav>
          <a href="/general-fitness" className="block py-2 px-4 hover:bg-gray-300 rounded">
            General Fitness
          </a>
          <a href="/my-health" className="block py-2 px-4 hover:bg-gray-300 rounded">
            My Health
          </a>
          <a href="/leaderboard" className="block py-2 px-4 hover:bg-gray-300 rounded">
            Leaderboard
          </a>
          <a href="/resources" className="block py-2 px-4 hover:bg-gray-300 rounded">
            Resources
          </a>
          <a href="/diet-plan" className="block py-2 px-4 hover:bg-gray-300 rounded">
            Diet Plan & Exercise
          </a>
          <a href="/chat" className="block py-2 px-4 hover:bg-gray-300 rounded">
            Chat
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Hello Lakshya,</h2>
          <p className="text-lg">How Are You Doing Today?</p>
        </div>

        <div className="p-4 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Fitness Tracker</h1>
            <button
              onClick={handleSetGoals}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Set Goals
            </button>
          </div>

          {/* Steps and Distance Cards - Horizontally Aligned */}
          <div className="flex space-x-4">
            {/* Steps Card */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/2">
              <h2 className="text-2xl font-semibold">Steps</h2>
              <div className="mt-4">
                <div className="relative h-4 bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                    style={{ width: `${stepsPercentage}%` }}
                  />
                </div>
                <p className="mt-2">{steps} / {stepsGoal} steps</p>
              </div>
            </div>

            {/* Distance Card */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/2">
              <h2 className="text-2xl font-semibold">Distance</h2>
              <div className="mt-4">
                <div className="relative h-4 bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                    style={{ width: `${distancePercentage}%` }}
                  />
                </div>
                <p className="mt-2">{distance.toFixed(2)} km / {distanceGoal} km</p>
              </div>
            </div>
          </div>

          {/* Hydration Section */}
          <section className="mb-8">
            <div className="bg-blue-100 rounded-lg p-6 shadow-md relative">
              <h3 className="text-xl font-semibold mb-4">Hydration</h3>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handleDecrement}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  <FaMinus />
                </button>
                <div className="text-2xl font-semibold">
                  {hydration} / {hydrationGoal}
                </div>
                <button
                  onClick={handleIncrement}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="mb-4">
                <p className="text-sm">Glasses of Water</p>
                <div className="bg-gray-200 rounded-full h-6 relative">
                  <div
                    className="bg-blue-500 rounded-full h-6"
                    style={{ width: `${barWidth}%` }}
                  ></div>
                </div>
              </div>
              {/* Glass Icons */}
              <div className="flex justify-center mt-4">
                {[...Array(Math.min(hydration, hydrationGoal))].map((_, index) => (
                  <FaGlassWhiskey key={index} className="text-blue-500 text-2xl mx-1" />
                ))}
                {[...Array(Math.max(0, hydrationGoal - hydration))].map((_, index) => (
                  <FaGlassWhiskey key={index} className="text-gray-400 text-2xl mx-1" />
                ))}
              </div>
              {/* Popup Message */}
              {popup && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-200 text-green-800 p-4 rounded-md shadow-lg">
                  Hurray!! You drank a healthy lot of water!
                </div>
              )}
            </div>
          </section>

          {/* BMI Calculator Section */}
          {/* <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">BMI Calculator</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <label className="block text-sm">Height (in meters)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter height"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">Weight (in kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter weight"
                />
              </div>
              <button
                onClick={handleBmiCalculation}
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              >
                Calculate BMI
              </button>

              {bmi && (
                <div className="mt-4 text-2xl font-semibold">
                  Your BMI is: <span className="text-pink-500">{bmi}</span>
                </div>
              )}
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
};

export default GeneralFitness;
