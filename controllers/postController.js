import postModel from "../models/postModel.js";
import fs from "fs";
import slugify from "slugify";
export const createPostController = async (req, res) => {
    try {

      if (!req.fields) {
        return res.status(400).send({ error: 'Request does not contain expected fields' });
      }
  
      const { name, description, email,phone, address, city, category} =
        req.fields;
      const { photo } = req.files;
      //alidation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !email:
          return res.status(500).send({ error: "Email is Required" });
        case !phone:
          return res.status(500).send({ error: "Phone is Required" });
        case !address:
          return res.status(500).send({ error: "Address is Required" });
        case !city:
          return res.status(500).send({ error: "City is Required" });
        case !category:
            return res.status(500).send({ error: "Category is Required" });
        case photo && photo.size > 1000000:
          return res.status(500).send({ error: "photo is Required and should be less then 1mb" });
      }
  
      const products = new postModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        
        success: true,
        message: "Post Created Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating Post",
      });
    }
  };

  export const displayPostController = async(req,res) =>{
    try{
      const posts=await postModel.find({})
      .select("-photo")
      .sort({createdAt:-1});
      res.status(200).send({
        success: true,
        message: "ALlPosts ",
        posts
    })}
    catch (error){
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in geting posts",
        error:error.message,
      });
    }
  };


  export const postPhotoController= async(req,res)=>{
    try{
      const post=await postModel.findById(req.params.pId).select("photo");
      console.log(post);
      if(post.photo.data){
        res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while getting photo",
        error,
      });
    }
  }



 