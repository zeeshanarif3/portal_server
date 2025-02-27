import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import DB from "./db/db";

import mongoose from 'mongoose';
import userRoute from './routes/user';
import authRoute from './routes/auth'
import trainerRoute from './routes/trainer';


mongoose.set("debug", false);


const app = express();

DB();
// app.use(cors({
//     origin: 'https://pxalm.com'
//   }));

 app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
const _dirname = path.resolve();
app.use(bodyParser.json());
app.use(express.static(path.join(_dirname)));

//settleAmountProgram();

app.use((err, req, res, next) => {
    next(err);
});

let body = {
    number: '4242424242424242',
    exp_month: 8,
    exp_year: 2023,
    currency: 'cad',
}
/* addCard(body); */
// console.log(new Date(),"date=====================")
// Routes
app.use("/", express.static("public"));
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/trainer",trainerRoute)



export default app; 