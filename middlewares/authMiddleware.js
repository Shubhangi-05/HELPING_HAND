import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
import ngoModel from "../models/ngoModel.js";
//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const requireSignInngo = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.ngo = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };
