import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import { createRequire } from 'module';
import dotenv from "dotenv";
import Users from "./routes/userRouter.js";
import Admin from "./routes/adminRouter.js";
dotenv.config();
const app = express();
const require = createRequire(import.meta.url);
const port = process.env.PORT || 8001;
const { request, response } = require('express');
app.use(express.json())
app.use(Cors());
app.use("/users",Users); //PATH IS /USERS/(ROUTENAME)
app.use("/admin",Admin);
mongoose.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

app.get('/', (req,res) => {
    res.send('Server started')
});

app.listen(port,()=> console.log(`listening on localhost: ${port}`));