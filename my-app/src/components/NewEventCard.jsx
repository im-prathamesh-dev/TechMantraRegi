import React from "react";
import { Link } from "react-router-dom";





function NewEventCard() {


  return (
    <>
    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Solo */}
    <div
   
      className="max-w-sm mx-auto border border-gray-300 rounded-xl p-4 shadow-md"
    >
      <a href="#">
        <img className="rounded-t-lg" src="" alt={""} />
      </a>
      <h2 className="text-lg font-semibold leading-tight mt-2">
        Solo Events
      </h2>

      <p className="mt-2 text-gray-600">
        Registration Fee: <span className="line-through text-gray-500">₹100</span>{" "}
        <span className="text-black font-semibold">₹50*</span>
      </p>

      <p className="text-green-600 font-semibold text-sm">
        {/* {Math.round(((event.dummyPrice - event.finalPrice) / event.dummyPrice) * 100)}% off */}
      </p>

      <div className="mt-3">
        <p className="font-medium">Events</p>
        <p className="text-gray-700 text-sm">Byte Battle</p>
        <p className="text-gray-700 text-sm">Tech Meme Creation</p>
        <p className="text-gray-700 text-sm">Web Page Design </p>
        <p className="text-gray-700 text-sm">Online Quiz</p>
        <p className="text-gray-700 text-sm">Poster Competition</p>
        <p className="text-gray-700 text-sm">Doodle Competition</p>
      </div>
     

      <Link
        to="/SoloRegistration"
        className="mt-4 w-full inline-block text-center border border-orange-500 text-orange-500 font-semibold py-2 rounded-xl hover:bg-orange-100 transition"
      >
        Register for Solo Event
      </Link>
    </div>


    {/* Duo */}
    <div
   
      className="max-w-sm mx-auto border border-gray-300 rounded-xl p-4 shadow-md"
    >
      <a href="#">
        <img className="rounded-t-lg" src="" alt={""} />
      </a>
      <h2 className="text-lg font-semibold leading-tight mt-2">
        Duo Events 
      </h2>

      <p className="mt-2 text-gray-600">
        Registration Fee: <span className="line-through text-gray-500">₹150</span>{" "}
        <span className="text-black font-semibold">₹100*</span>
      </p>

      <p className="text-green-600 font-semibold text-sm">
        {/* {Math.round(((event.dummyPrice - event.finalPrice) / event.dummyPrice) * 100)}% off */}
      </p>

      <div className="mt-3">
        <p className="font-medium">Events</p>
        <p className="text-gray-700 text-sm">Crossword</p>
        <p className="text-gray-700 text-sm">Shark Tank</p>
        <p className="text-gray-700 text-sm">Photography</p>
       
        
        
      </div>
     

      <Link
        to="/DuoRegistration"
        className="mt-4 w-full inline-block text-center border border-orange-500 text-orange-500 font-semibold py-2 rounded-xl hover:bg-orange-100 transition"
      >
        Register for Duo Event
      </Link>
    </div>

    {/* Squad */}
    <div
   
      className="max-w-sm mx-auto border border-gray-300 rounded-xl p-4 shadow-md"
    >
      <a href="#">
        <img className="rounded-t-lg" src="" alt={""} />
      </a>
      <h2 className="text-lg font-semibold leading-tight mt-2">
        Squad Events 
      </h2>

      <p className="mt-2 text-gray-600">
        Registration Fee: <span className="line-through text-gray-500">₹200</span>{" "}
        <span className="text-black font-semibold">₹150*</span>
      </p>

      <p className="text-green-600 font-semibold text-sm">
        {/* {Math.round(((event.dummyPrice - event.finalPrice) / event.dummyPrice) * 100)}% off */}
      </p>

      <div className="mt-3">
        <p className="font-medium">Events</p>
        <p className="text-gray-700 text-sm">LAN Games BGMI</p>
        <p className="text-gray-700 text-sm">Hackathon</p>
        <p className="text-gray-700 text-sm">Short Movie Making</p>
        <p className="text-gray-700 text-sm">Treasure Hunt</p>
        <p className="text-gray-700 text-sm">Team Bulding Games</p>
        
      </div>
     

      <Link
        to="/SquadRegistration"
        className="mt-4 w-full inline-block text-center border border-orange-500 text-orange-500 font-semibold py-2 rounded-xl hover:bg-orange-100 transition"
      >
        Register for Squad Event
      </Link>
    </div>

 
</div>
      
    </>
  )
}

export default NewEventCard

