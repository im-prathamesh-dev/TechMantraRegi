import React from "react";

export default function PaymentButton({amount,data}) {
  // console.log("Payment Button" , amount);
  let paymentAmount = amount * 100;
  // if(amount === 50){
  //     paymentAmount = 200;
  //     console.log("RE", paymentAmount)
  // }else{
  //     paymentAmount = 200;
  //     console.log("RE", paymentAmount)
  // }
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_ID; // Ensure this is correctly loaded
  // console.log("RazorPAy Key ID", RAZORPAY_KEY_ID);
  // const fee = props.fees.Totalfees;

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Check your internet connection.");
      return;
    }

    try {
      // API call to create an order
      const response = await fetch("https://techmantraregi.onrender.com/api/v1/register/makePayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: paymentAmount }),
      });

      const order = await response.json();
      // console.log(order);

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount, // Amount in paise
        currency: order.currency,
        name: "TechMantra",
        description: "Payment for Event Registration",
        order_id: order.id, // The Order ID from Razorpay backend
        handler: async (response) => {
          // console.log("Payment Successful:", response);
          // console.log("Payment ID:", response.razorpay_payment_id);
          
          alert(`Payment Successful! Your Payment ID: ${response.razorpay_payment_id}`);
      
          // Now send the Payment ID to your backend
          try {
            const verifyResponse = await fetch("https://techmantraregi.onrender.com/api/v1/register/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id, // ✅ Payment ID
                razorpay_signature: response.razorpay_signature,
              }),
            });
      
            const verificationData = await verifyResponse.json();
            // console.log("Payment Verification:", verificationData);
      
            if (verifyResponse.ok) {
              alert("Payment verified successfully!");
      
              // Register the user after successful payment verification
              await fetch("https://techmantraregi.onrender.com/api/v1/register/makeRegistration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data, payment_id: response.razorpay_payment_id }), // ✅ Sending Payment ID to Backend
              });
      
              alert("Registration successful!");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Payment verification failed:", err);
            alert("Payment verification failed. Please try again.");
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.number,
        },
        theme: {
          color: "#3399cc",
        },
      };
      
      

      const rzpay = new window.Razorpay(options);
      rzpay.open();
    } catch (err) {
      alert("Error creating order: " + err.message);
    }
  };

  return <button onClick={handlePayment} className="w-full bg-black text-white py-2 rounded-lg font-medium text-lg hover:bg-gray-800 transition">{`Pay ₹${amount}* and Register`}</button>;
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
