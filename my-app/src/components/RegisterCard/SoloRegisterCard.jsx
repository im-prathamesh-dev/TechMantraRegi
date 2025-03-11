import React from "react";
import PaymentButton from "../PaymentButton";
import { Link } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast"



function SoloRegisterCard() {
  const [formData, setFormData] = useState({
    clgname: "",
    name: "",
    email: "",
    class: "",
    event: "",
    number: "",
    type: "solo",
    participants: [""]
});

    
const [showPaymentButton, setShowPaymentButton] = useState(false);
// useEffect(() => {
//     if (formData.type === "individual") {
//         setTotalFee(50);
//         setPaymentButtonId("pl_Q1Y9O40Gjo3T22");
//     } else {
//         setTotalFee(150);
//         setPaymentButtonId("pl_Q1YQ04pF6EH0tN");
//     }
// }, [formData.type]);

// useEffect(() => {
//     if (!validateForm()) {
//         setShowPaymentButton(false);
//         return;
//     }

//     setLoading(true);
//     setShowPaymentButton(false);

//     setTimeout(() => {
//         setShowPaymentButton(true);
//         setLoading(false);

//         if (paymentContainerRef.current) {
//             paymentContainerRef.current.innerHTML = ""; // Clear previous scripts
//             const script = document.createElement("script");
//             script.src = "https://checkout.razorpay.com/v1/payment-button.js";
//             script.dataset.payment_button_id = paymentButtonId;
//             script.async = true;
//             paymentContainerRef.current.appendChild(script);
//         }
//     }, 2000);
// }, [formData, paymentButtonId]);

const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

// const handleParticipantsChange = (index, value) => {
//     setFormData((prev) => {
//         const updatedParticipants = [...prev.participants];
//         updatedParticipants[index] = value;
//         return { ...prev, participants: updatedParticipants };
//     });
// };



// const sendRegistrationData = async ()=>{
    
//     console.log(formData)
//     try {
//         const response = await axios.post('http://localhost:5000/api/v1/register/registerUser', formData);
//         console.log(response)
//         // setMessage(response.data.message);
//       } catch (error) {
//         // setMessage(error.response?.data?.message || 'Something went wrong');
//       }

// }
  function handleProceed (){
    // console.log(formData);
    if (!formData.clgname || !formData.name || !formData.email || !formData.class || !formData.event|| !formData.number ){
      toast.error("Please fill in all required information!");
        
    }else{
        setShowPaymentButton(true);
        toast.success("Proceeding to payment...");
        
    }
    // if(formData.participants.length > 1){
    //   // setTotalFee(15
    //   totalFee = 150;
    //   console.log("Payment ", totalFee);
    // }else{
    //   // setTotalFee(50);
    //   totalFee = 50 ;
    //   console.log(totalFee)
    // }
    
   
  }

  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-12 text-white">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute left-4 top-4 text-xl text-white hover:text-gray-300"
      >
        ←
      </Link>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Register for Solo Event - TechMantra 2025
      </h1>

      {/* Contact Info */}
      <p className="text-lg text-center mt-2 font-light">
        For any issues, contact our Volunteers:
      </p>
      <p className="text-md font-semibold">Vaishnav Ghadge: 7218329602</p>
      <p className="text-md font-semibold">Anurag Shastri: 7798177002</p>

      {/* Disclaimer Message */}
      <div className="  mt-3 bg-red-600 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between max-w-md text-center">
  <div className="flex flex-col items-center space-x-2">
    
    <span className="text-lg font-semibold ">⚠️<b>FamPay </b> Payments are not allowed.</span>
    <span>If no alternative is available, please contact the volunteers listed above.</span>
  </div>
</div>
  <div className="bg-yellow-300 text-gray-900 text-center p-3 mt-4 rounded-lg shadow-md w-full max-w-md">
    ⚠️ <strong>Disclaimer:</strong> While registering, please wait until you get <strong>"Registration successful!"</strong> notification after making payment.
    
  </div>

  

      {/* Form Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 mt-6 w-full max-w-md text-gray-900">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="clgname"
            placeholder="College Name"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="number"
            placeholder="Number"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            name="class"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Class</option>
            <option value="UG">Undergraduate</option>
            <option value="PG">Postgraduate</option>
          </select>

          <select
            name="event"
            onChange={handleChanges}
            required
            className="p-3 border border-gray-300 rounded-lg text-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Event</option>
            {/* <option value="Byte Battle">Byte Battle (11th Mar)</option> */}
            {/* <option value="Tech Meme Creation">Tech Meme Creation (11th Mar)</option> */}
            <option value="Web Page Design">Web Page Design (12th Mar)</option>
            <option value="Online Quiz ">Online Quiz (12th Mar)</option>
            <option value="Poster Competition">Poster Competition (12th Mar)</option>
            <option value="Doodle Competition">Doodle Competition (12th Mar)</option>
          </select>

          {showPaymentButton ? (
            <PaymentButton amount={50} data={formData} />
          ) : (
            <button
              onClick={handleProceed}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default SoloRegisterCard;
