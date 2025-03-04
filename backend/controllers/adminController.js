

import fs from "fs";
import slugify from "slugify";
import dotenv from "dotenv";
import packagesModel from "../models/packagesModel.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import bankModel from "../models/bankModel.js";
import bookingsModel from "../models/bookingsModel.js";
// import { model } from "mongoose";

dotenv.config();

export const createPackageController = async (req, res) => {
  try {
    // {}
    console.log("Got request")
    console.log(req.fields)
    console.log(req.files)
    const { destinationName,activity,price, description} = req.fields;
    // const { destinationName,slug,activity,duration,price,rating, description, activities} = req.fields;
    const { image, image1, image2 } = req.files;
    //validation
    switch (true) {
      case !destinationName:
        return res.status(500).send({ error: "Name is Required" });
    case !description:
      return res.status(500).send({ error: "Description is Required" });
    case !price:
      return res.status(500).send({ error: "Price is Required" });
    // case !rating:
    //   return res.status(500).send({ error: "Rating is Required" });
    case !activity:
      return res.status(500).send({ error: "Activity is Required" });
    // case !duration:
    //   return res.status(500).send({ error: "Duration is Required" });
    // case !activities:
    //   return res.status(500).send({ error: "Activities is Required" });
      
      
      case image && image.size > 1000000000: 
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb and it should be in PNG format" });
      case image1 && image1.size > 1000000000: 
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb and it should be in PNG format" });
      case image2 && image2.size > 1000000000: 
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb and it should be in PNG format" });
    }

    const packages = new packagesModel({ ...req.fields, slug: slugify(destinationName) });
    if (image) {
      packages.image.data = fs.readFileSync(image.path);
      packages.image.contentType = image.type;
    }
    if (image1) {
      packages.image1.data = fs.readFileSync(image1.path);
      packages.image1.contentType = image1.type;
    }
    if (image) {
      packages.image2.data = fs.readFileSync(image2.path);
      packages.image2.contentType = image2.type;
    }
    await packages.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      packages,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing product",
    });
  }
};


export const getSinglePackageController = async (req, res) => {
  try {
    const pack = await packagesModel
      .findOne({ slug: req.params.slug })
      .select("-image");
    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      pack,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single product",
      error,
    });
  }
};

export const deletePackageController = async (req, res) => {
  try {
    const id = req.params;
    console.log(id)
    const data = await packagesModel.findByIdAndDelete(req.params.pid).select("-photo");
    // const data = await orderModel.find
    // console.log("DAta cancelled is", data)
    res.status(200).send({
      success: true,
      message: "Package Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Package",
      error,
    });
  }
};
export const deleteBookingController = async (req, res) => {
  try {
    const id = req.params;
    console.log(id)
    const data = await bookingsModel.findByIdAndDelete(req.params.pid).select("-photo");
    // const dat = await orderModel.findByIdAndDelete(req.params.pid).select("-photo");
    
    // const data = await orderModel.find
    // console.log("DAta cancelled is", data)
    res.status(200).send({
      success: true,
      message: "Booking Cancel successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Package",
      error,
    });
  }
};


export const getPackageController = async (req, res) => {
  try {
    const packages = await packagesModel
      .find({})
      .select("-image")
      .sort({ createdAt: -1 });
    // console.log("get",packages)
    res.status(200).send({
      success: true,
      countTotal: packages.length,
      message: "ALlProducts ",
      packages,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};


export const getAllBookingController = async( req, res)=>{

  try {

    const authr = req.body;
    console.log("Auth being used is :" , authr);
// res.status(200).send({success: true,
//   message: " Succesfully",
//   authr, })
    // const userId = await userModel.findOne({email: authr.email }).select("_id")

    const bookings = await bookingsModel.find({})
    console.log("hiii",bookings)
   

    
  //  console.log("Hiii ")
    // console.log(orders);

    // const neworders = await orderModel
    // .find({ buyer: userId })
    // .populate("product","-image1 -image2 -description -activites -slug")
    // .populate("buyer", "name");
    // console.log("Bye.......................", neworders)
    
 
    res.status(200).send({success: true,
      message: "Bookings Fetched Succesfully",
      bookings})
  
  }  
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Bookings",
      error: error.message,
    });
  }}