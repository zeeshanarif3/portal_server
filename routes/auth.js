
"use strict";
import express from "express";
import {
    login
} from "../auth/auth";

const authRoute = express.Router();

authRoute.post("/login",   login);


export default authRoute;
