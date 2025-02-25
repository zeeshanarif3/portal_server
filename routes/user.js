
"use strict";
import express from "express";
import {
    insert
} from "../controllers/user";

const userRoute = express.Router();

userRoute.post("/register",   insert);


export default userRoute;
