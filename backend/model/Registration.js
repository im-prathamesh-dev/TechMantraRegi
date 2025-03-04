import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    clgname: String,
    name: String,
    email: String,
    class: String,
    event: String,
    cnumber: Number,
    type: String, 
    participants: [String],
    pay_id: String,
    paymentStatus: { type: String, default: "Pending" }
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);
