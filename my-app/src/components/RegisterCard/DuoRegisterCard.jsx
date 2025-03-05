import React from "react";
import PaymentButton from "../PaymentButton";
import { Link } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast"



function DuoRegisterCard() {
  const [formData, setFormData] = useState({
    clgname: "",
    name: "",
    email: "",
    class: "",
    event: "",
    number: "",
    type: "duo",
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

const handleParticipantsChange = (index, value) => {
    setFormData((prev) => {
        const updatedParticipants = [...prev.participants];
        updatedParticipants[index] = value;
        return { ...prev, participants: updatedParticipants };
    });
};

const addParticipant = () => {
    if (formData.participants.length < 4) {
        setFormData((prev) => ({
            ...prev,
            participants: [...prev.participants, ""]
        }));
    }
};

// const validateForm = () => {
//     if (!formData.name || !formData.email || !formData.class || !formData.event) return false;
//     if (formData.type === "group") return formData.participants.every((p) => p.trim() !== "");
//     return true;
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
    if (!formData.clgname || !formData.name || !formData.email || !formData.class || !formData.event|| !formData.number || formData.participants.length < 1  ||formData.participants.every((p) => p.trim() == "" )){
      toast.error("Please fill in all required information!");
        
    }else{
        setShowPaymentButton(true);
        toast.success("Proceeding to payment...");
        
    }
}


 
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-12 text-white">
  {/* Back Button */}
  <Link to="/" className="absolute left-4 top-4 text-xl  text-white hover:text-gray-300">
    ←
  </Link>

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-bold text-center  mt-4">
    Register for Duo Event TechMantra 2025
  </h1>

  {/* Contact Info */}
  <p className=" text-center mt-2">
    For any issues or queries, please contact our Volunteers at
  </p>
  <p className=" font-semibold text-center">Vaishnav Ghadge: 7218329602</p>
  <p className=" font-semibold text-center">Anurag Shastri: 7798177002</p>
      {/* Disclaimer Message */}
      <div className="bg-yellow-300 text-gray-900 text-center p-3 mt-4 rounded-lg shadow-md w-full max-w-md">
    ⚠️ <strong>Disclaimer:</strong> While registering, please wait until you get <strong>"Registration successful!"</strong> notification after making payment.
  </div>

  {/* Form */}
  <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-md text-gray-900">
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="clgname"
        placeholder="College Name"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="number"
        placeholder="Number"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="class"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Class</option>
        <option value="UG">Undergraduate</option>
        <option value="PG">Postgraduate</option>
      </select>
      <select
        name="event"
        onChange={handleChanges}
        required
        className="p-3 border border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Event</option>
        <option value="Coding-competition">Crossword (11th Mar)</option>
        <option value="Hackathon">Photography (11th Mar)</option>
        <option value="Lan-games">SharkTank (12th Mar)</option>
      </select>

      {formData.type === "duo" && (
        <div className="text-left">
          {formData.participants.map((participant, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Participant ${index + 1} Name`}
              value={participant}
              onChange={(e) => handleParticipantsChange(index, e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
          {formData.participants.length < 2 && (
            <button
              type="button"
              onClick={addParticipant}
              className="mt-2 w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              ➕ Add Participant
            </button>
          )}
        </div>
      )}

      {showPaymentButton ? (
        <PaymentButton amount={100} data={formData} />
      ) : (
        <button
          onClick={handleProceed}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
        >
          Proceed
        </button>
      )}

      {/* Total Fee Section */}
      <p className="text-lg font-bold text-gray-800 mt-2">{/* Total Fee: ₹{totalFee} */}</p>
    </div>
  </div>
</div>

    </>
  );
}

export default DuoRegisterCard;
