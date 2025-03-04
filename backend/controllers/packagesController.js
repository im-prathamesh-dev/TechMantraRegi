

import fs from "fs";
import slugify from "slugify";
import dotenv from "dotenv";
import packagesModel from "../models/packagesModel.js";
import userModel from "../models/userModel.js"
import orderModel from "../models/orderModel.js";
import bankModel from "../models/bankModel.js";
import bookingsModel from "../models/bookingsModel.js";
// import { model } from "mongoose";

dotenv.config();

export const createPackageController = async (req, res) => {
  try {
    // {}
    console.log(req.body)
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
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing product",
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

 // get photo
export const packagePhotoController = async (req, res) => {
  try {
    const packages = await packagesModel.findById(req.params.pid).select("image");
    // console.log(packages);
    
    if (packages.image.data ) {
      res.set("Content-type", packages.image.contentType);
      return res.status(200).send(packages.image.data);
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};
 // get photo 1
export const packagePhotoOneController = async (req, res) => {
  try {
    const packages = await packagesModel.findById(req.params.pid).select("image1");
    // console.log(packages);
    
    if (packages.image1.data ) {
      res.set("Content-type", packages.image1.contentType);
      return res.status(200).send(packages.image1.data);
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};
 // get photo 2
export const packagePhotoTwoController = async (req, res) => {
  try {
    const packages = await packagesModel.findById(req.params.pid).select("image2");
    // console.log(packages);
    
    if (packages.image2.data ) {
      res.set("Content-type", packages.image2.contentType);
      return res.status(200).send(packages.image2.data);
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};



// get single product
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


export const xbookingController = async( req, res)=>{
  try {
    // console.log("Inside")
    let dd = req.body;
    console.log(dd.user.email)
    // console.log("Product:",dd)
    // console.log("Email" ,dd.xyz.user.email)

    // if(dd){
    //   console.log(dd.xyz.user.email);
    //   console.log("USerid")
      
       
   
      
      
      

      // toast.success("Order Placed Succesfully");
      // console.log("Order Placed Succesfully")

      res.status(201).send({
        success: true,
        message: "Booking Done  Successfully",
        
      });
    } 
    
    //  if(dd) {res.status(200).send(dd)}
    
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in booking ",
      error: error.message,
    });
  }}



export const bookingController = async( req, res)=>{
  try {
    // console.log("Inside")
    let dd = req.body;
    // console.log("Product:",dd)
    // console.log("Email" ,dd.xyz.user.email)

    // if(dd){
    //   console.log(dd.xyz.user.email);
    //   console.log("USerid")
    const productd = await packagesModel.findById({_id : dd.xyz.product}).select("destinationName activity duration price ")
      console.log(productd)

      const user = await userModel.findOne({email: dd.xyz.user.email }).select("id name email")
      // console.log("USerId: ",userId)
      const order = new orderModel({
        product: productd._id,
        payment: "Success",
        buyer: user._id,
        bookingOn: dd.xyz.bookingOn
      })
      await order.save();
      // toast.success("Order Placed Succesfully");
      // console.log("Order Placed Succesfully")

      const booking = new bookingsModel({
        product: productd,
        payment: "Success",
        buyer: user ,
        bookingOn: dd.bookingOn
      })
      await booking.save();

      res.status(201).send({
        success: true,
        message: "Order Placed  Successfully",
        order,
      });
    } 
    
    //  if(dd) {res.status(200).send(dd)}
    
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in booking ",
      error: error.message,
    });
  }}

export const getOrdersController = async( req, res)=>{
  try {

    const authr = req.body;
    console.log("Auth being used is :" , authr);
// res.status(200).send({success: true,
//   message: " Succesfully",
//   authr, })
    const userId = await userModel.findOne({email: authr.email }).select("_id")

    const orders = await orderModel.find({buyer: userId})
    
  //  console.log("Hiii ")
    // console.log(orders);

    const neworders = await orderModel
    .find({ buyer: userId })
    .populate("product","-image1 -image2 -description -activites -slug")
    .populate("buyer", "name");
    // console.log("Bye.......................", neworders)
    
 
    res.status(200).send({success: true,
      message: "Order Fetched Succesfully",
      orders,neworders})
  
  }  
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Order",
      error: error.message,
    });
  }}

  export const deleteBookingController = async (req, res) => {
  try {
    const id = req.params;
    console.log(id)
    const data = await bookingsModel.findByIdAndDelete(req.params.oid).select("-photo");
    // const data = await orderModel.find
    // console.log("DAta cancelled is", data)
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};





// 




// //get all products
// export const getProductController = async (req, res) => {
//   try {
//     const products = await productModel
//       .find({})
//       .populate("category")
//       .select("-photo")
//       .limit(12)
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
//       countTotal: products.length,
//       message: "ALlProducts ",
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Erorr in getting products",
//       error: error.message,
//     });
//   }
// };
// // get single product
// export const getSingleProductController = async (req, res) => {
//   try {
//     const product = await productModel
//       .findOne({ slug: req.params.slug })
//       .select("-photo")
//       .populate("category");
//     res.status(200).send({
//       success: true,
//       message: "Single Product Fetched",
//       product,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Eror while getitng single product",
//       error,
//     });
//   }
// };

// // get photo
// export const productPhotoController = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.params.pid).select("photo");
//     if (product.photo.data) {
//       res.set("Content-type", product.photo.contentType);
//       return res.status(200).send(product.photo.data);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Erorr while getting photo",
//       error,
//     });
//   }
// };

// //delete controller
// export const deleteProductController = async (req, res) => {
//   try {
//     await productModel.findByIdAndDelete(req.params.pid).select("-photo");
//     res.status(200).send({
//       success: true,
//       message: "Product Deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error while deleting product",
//       error,
//     });
//   }
// };

// //upate product
// export const updateProductController = async (req, res) => {
//   try {
//     const { name, description, price, category, quantity, shipping } =
//       req.fields;
//     const { photo } = req.files;
//     //alidation
//     switch (true) {
//       case !name:
//         return res.status(500).send({ error: "Name is Required" });
//       case !description:
//         return res.status(500).send({ error: "Description is Required" });
//       case !price:
//         return res.status(500).send({ error: "Price is Required" });
//       case !category:
//         return res.status(500).send({ error: "Category is Required" });
//       case !quantity:
//         return res.status(500).send({ error: "Quantity is Required" });
//       case photo && photo.size > 1000000:
//         return res
//           .status(500)
//           .send({ error: "photo is Required and should be less then 1mb" });
//     }

//     const products = await productModel.findByIdAndUpdate(
//       req.params.pid,
//       { ...req.fields, slug: slugify(name) },
//       { new: true }
//     );
//     if (photo) {
//       products.photo.data = fs.readFileSync(photo.path);
//       products.photo.contentType = photo.type;
//     }
//     await products.save();
//     res.status(201).send({
//       success: true,
//       message: "Product Updated Successfully",
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error in Updte product",
//     });
//   }
// };

// // filters
// export const productFiltersController = async (req, res) => {
//   try {
//     const { checked, radio } = req.body;
//     let args = {};
//     if (checked.length > 0) args.category = checked;
//     if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
//     const products = await productModel.find(args);
//     res.status(200).send({
//       success: true,
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       success: false,
//       message: "Error WHile Filtering Products",
//       error,
//     });
//   }
// };

// // product count
// export const productCountController = async (req, res) => {
//   try {
//     const total = await productModel.find({}).estimatedDocumentCount();
//     res.status(200).send({
//       success: true,
//       total,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       message: "Error in product count",
//       error,
//       success: false,
//     });
//   }
// };

// // product list base on page
// export const productListController = async (req, res) => {
//   try {
//     const perPage = 6;
//     const page = req.params.page ? req.params.page : 1;
//     const products = await productModel
//       .find({})
//       .select("-photo")
//       .skip((page - 1) * perPage)
//       .limit(perPage)
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       success: false,
//       message: "error in per page ctrl",
//       error,
//     });
//   }
// };

// // search product
// // export const searchProductController = async (req, res) => {
// //   try {
// //     const { keyword } = req.params;
// //     const resutls = await productModel
// //       .find({
// //         $or: [
// //           { name: { $regex: keyword, $options: "i" } },
// //           { description: { $regex: keyword, $options: "i" } },
// //         ],
// //       })
// //       .select("-photo");
// //     res.json(resutls);
// //   } catch (error) {
// //     console.log(error);
// //     res.status(400).send({
// //       success: false,
// //       message: "Error In Search Product API",
// //       error,
// //     });
// //   }
// // };

// // similar products
// // export const realtedProductController = async (req, res) => {
// //   try {
// //     const { pid, cid } = req.params;
// //     const products = await productModel
// //       .find({
// //         category: cid,
// //         _id: { $ne: pid },
// //       })
// //       .select("-photo")
// //       .limit(3)
// //       .populate("category");
// //     res.status(200).send({
// //       success: true,
// //       products,
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     res.status(400).send({
// //       success: false,
// //       message: "error while geting related product",
// //       error,
// //     });
// //   }
// // };

// // get product by category
// export const productCategoryController = async (req, res) => {
//   try {
//     const category = await categoryModel.findOne({ slug: req.params.slug });
//     const products = await productModel.find({ category }).populate("category");
//     res.status(200).send({
//       success: true,
//       category,
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       success: false,
//       error,
//       message: "Error While Getting products",
//     });
//   }
// };

// //payment gateway api
// //token
// export const braintreeTokenController = async (req, res) => {
//   try {
//     gateway.clientToken.generate({}, function (err, response) {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(response);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //payment
// export const brainTreePaymentController = async (req, res) => {
//   try {
//     const { nonce, cart } = req.body;
//     let total = 0;
//     cart.map((i) => {
//       total += i.price;
//     });
//     let newTransaction = gateway.transaction.sale(
//       {
//         amount: total,
//         paymentMethodNonce: nonce,
//         options: {
//           submitForSettlement: true,
//         },
//       },
//       function (error, result) {
//         if (result) {
//           const order = new orderModel({
//             products: cart,
//             payment: result,
//             buyer: req.user._id,
//           }).save();
//           res.json({ ok: true });
//         } else {
//           res.status(500).send(error);
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };