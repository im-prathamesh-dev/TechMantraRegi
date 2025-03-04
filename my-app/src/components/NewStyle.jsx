import React from "react";
import { Link } from "react-router-dom";
import Solo from "../assets/img/Solo.jpg"
import Duo from "../assets/img/Duo.jpg"
import Squad from "../assets/img/Squad.jpg"


function NewStyle() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 py-12 px-6 md:px-12 text-white text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">🔥 TechMantra Events 🔥</h1>
      <p className="text-lg md:text-xl font-light">
        Register Now and Showcase Your Skills in Solo, Duo, and Squad Events!
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {/* Solo Event */}
        <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900">
          <img className="rounded-t-lg w-full h-48 object-cover" src={Solo} alt="Solo Event" />
          <h2 className="text-lg font-semibold mt-2 text-center">Solo Events</h2>
          <p className="mt-2 text-gray-600 text-center">
            Registration Fee: <span className="line-through text-gray-500">₹100</span>{" "}
            <span className="text-black font-semibold">₹50*</span>
          </p>

          <div className="mt-3 text-center">
            <p className="font-medium">Events</p>
            <p className="text-gray-700 text-sm">Byte Battle</p>
            <p className="text-gray-700 text-sm">Tech Meme Creation</p>
            <p className="text-gray-700 text-sm">Web Page Design</p>
            <p className="text-gray-700 text-sm">Online Quiz</p>
            <p className="text-gray-700 text-sm">Poster Competition</p>
            <p className="text-gray-700 text-sm">Doodle Competition</p>
          </div>

          <Link
            to="/SoloRegistration"
            className="mt-4 w-full inline-block text-center bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Register for Solo Event
          </Link>
        </div>

        {/* Duo Event */}
        <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900">
          <img className="rounded-t-lg w-full h-48 object-cover" src={Duo} alt="Duo Event" />
          <h2 className="text-lg font-semibold mt-2 text-center">Duo Events</h2>
          <p className="mt-2 text-gray-600 text-center">
            Registration Fee: <span className="line-through text-gray-500">₹150</span>{" "}
            <span className="text-black font-semibold">₹100*</span>
          </p>

          <div className="mt-3 text-center">
            <p className="font-medium">Events</p>
            <p className="text-gray-700 text-sm">Crossword</p>
            <p className="text-gray-700 text-sm">Shark Tank</p>
            <p className="text-gray-700 text-sm">Photography</p>
          </div>

          <Link
            to="/DuoRegistration"
            className="mt-19 w-full inline-block text-center bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Register for Duo Event
          </Link>
        </div>

        {/* Squad Event */}
        <div className="max-w-sm mx-auto border border-gray-200 rounded-xl p-4 shadow-xl bg-white text-gray-900">
          <img className="rounded-t-lg w-full h-48 object-cover" src={Squad} alt="Squad Event" />
          <h2 className="text-lg font-semibold mt-2 text-center">Squad Events</h2>
          <p className="mt-2 text-gray-600 text-center">
            Registration Fee: <span className="line-through text-gray-500">₹200</span>{" "}
            <span className="text-black font-semibold">₹150*</span>
          </p>

          <div className="mt-3 text-center">
            <p className="font-medium">Events</p>
            <p className="text-gray-700 text-sm">LAN Games BGMI</p>
            <p className="text-gray-700 text-sm">Hackathon</p>
            <p className="text-gray-700 text-sm">Short Movie Making</p>
            <p className="text-gray-700 text-sm">Treasure Hunt</p>
            <p className="text-gray-700 text-sm">Team Building Games</p>
          </div>

          <Link
            to="/SquadRegistration"
            className="mt-9 w-full inline-block text-center bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Register for Squad Event
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default NewStyle;
