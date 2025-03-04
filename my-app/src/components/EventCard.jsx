import React from "react";
import { Link } from "react-router-dom";
import EventData from "../../EventData.js"; // Ensure correct import path

const EventCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {EventData.map((event, index) => (
        <div
          key={index}
          className="max-w-sm mx-auto border border-gray-300 rounded-xl p-4 shadow-md"
        >
          <a href="#">
            <img className="rounded-t-lg" src="" alt={event.eventName} />
          </a>
          <h2 className="text-lg font-semibold leading-tight mt-2">
            {event.eventName}
          </h2>

          <p className="mt-2 text-gray-600">
            Registration Fee: <span className="line-through text-gray-500">₹{event.dummyPrice}</span>{" "}
            <span className="text-black font-semibold">₹{event.finalPrice}*</span>
          </p>

          <p className="text-green-600 font-semibold text-sm">
            {Math.round(((event.dummyPrice - event.finalPrice) / event.dummyPrice) * 100)}% off
          </p>

          <div className="mt-3">
            <p className="font-medium">Coordinators:</p>
            <p className="text-gray-700 text-sm">{event.coordinator1.name} - {event.coordinator1.number}</p>
            <p className="text-gray-700 text-sm">{event.coordinator2.name} - {event.coordinator2.number}</p>
          </div>

          <Link
            to="/Registration"
            className="mt-4 w-full inline-block text-center border border-orange-500 text-orange-500 font-semibold py-2 rounded-xl hover:bg-orange-100 transition"
          >
            Register for {event.eventName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
