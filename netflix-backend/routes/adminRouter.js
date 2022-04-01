import express, { Router } from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import {auth} from "../middlewares/auth.js";
import {authAdmin} from "../middlewares/authAdmin.js";
const router = express();


const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}
export default router;