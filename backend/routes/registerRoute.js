import express from "express";
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto'
import Registration from "../model/Registration.js"
const router = express.Router();
dotenv.config();

const RAZORPAY_KEY_ID = process.env.RAZORPAY_ID
const RAZORPAY_KEY = process.env.RAZORPAY_KEY
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY,
});


router.post('/makePayment', async (req,res)=>{
  console.log("Yeee !!!");  
  console.log("Payment Initiation")
    console.log("body", req.body)
    try {
        const options = {
            amount: req.body.amount, // amount in the smallest currency unit, in our case ( INR ) we will be using paisa ( RS * 100) 
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7), //Unique and random receipt ID
        };

        const order = await razorpay.orders.create(options);
        console.log(order)
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
)

router.post('/verify-payment', async (req, res) => {
    console.log("Verify order")

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256', RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            // Payment is verified
            console.log("Payment verified successfully")
            res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            console.log("Invalid payment signature")
            res.status(400).json({ error: 'Invalid payment signature' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/makeRegistration', async(req,res) =>{

    console.log(req.body.data);
    try {
        const {clgname, name, email, class: userClass, event, type, participants, number } = req.body.data;
        const pay_id = req.body.payment_id;
       
        // Check if the user has already registered
        // const existingUser = await Registration.findOne({ email, event });
        // if (existingUser) {
        //   return res.status(400).json({ message: "You have already registered for this event." });
        // }
    
        // const token = generateToken();
    
        const newRegistration = new Registration({
          clgname,
          name,
          email,
          class: userClass,
          event,
          type,
          participants,
          pay_id,
          cnumber: number,
          
        });
    
        await newRegistration.save();
        // await sendMail(email, token);
    
        res.status(201).json({ message: "Registration Successfully Done!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});


export default router