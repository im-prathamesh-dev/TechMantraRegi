import React from "react";
// import { Link } from "react-router-dom";
import Solo from "../assets/img/Solo.jpg"
import Duo from "../assets/img/Duo.jpg"
import Squad from "../assets/img/Squad.jpg"


function FinalStyle() {
  return (
    <>
      <div className="w-full  bg-gradient-to-r from-blue-600 to-purple-700 py-12 px-6 md:px-12 text-white text-center">
  <h1 className="text-3xl md:text-5xl font-bold mb-4">🔥 TechMantra Events 🔥</h1>
  <p className="text-lg md:text-xl font-light">
    Registrations are closed for TechMantra 2025. Stay tuned for next year!
    
  </p>
  

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
    {/* Solo Event */}
    <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900 opacity-50">
      <img className="rounded-t-lg w-full h-48 object-cover" src={Solo} alt="Solo Event" />
      <h2 className="text-lg font-semibold mt-2 text-center">Solo Events</h2>
      <p className="mt-2 text-gray-600 text-center">Registrations Closed</p>
    </div>

    {/* Duo Event */}
    <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900 opacity-50">
      <img className="rounded-t-lg w-full h-48 object-cover" src={Duo} alt="Duo Event" />
      <h2 className="text-lg font-semibold mt-2 text-center">Duo Events</h2>
      <p className="mt-2 text-gray-600 text-center">Registrations Closed</p>
    </div>

    {/* Squad Event */}
    <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900 opacity-50">
      <img className="rounded-t-lg w-full h-48 object-cover" src={Squad} alt="Squad Event" />
      <h2 className="text-lg font-semibold mt-2 text-center">Squad Events</h2>
      <p className="mt-2 text-gray-600 text-center">Registrations Closed</p>
    </div>
  </div>
</div>

    </>
  );
}

export default FinalStyle;
