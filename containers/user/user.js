import mongoose, { Schema } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const userSchema = new mongoose.Schema(
    {
        city:{
            type: String,
        },
        state:{
            type: String,
        },
        First_name: {
            type: String,
            // required: true
        },
        Last_name: {
            type: String,
            // required: true
        },
        Pincode: {
            type: String,
         
        },
        whatsapp_no: {
            type: String,
         
        },
        aadhar_no: {
            type: String,
        
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String
        },
        date_of_birth: {
            type: String
        },
        language: {
            type: String
        },
        city: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        province: {
            type: String,
            default: ""
        },
        country: {
            type: String
        },
        postalcode: {
            type: String,
            default: ""
        },
        role: {
            type: Number,
            enum: [0, 1, 2],/* 0=Admin, 1= user 3= seller */
            // required: true,
            default: 0
        },
        token: {
            type: String,
            default: null
        },
        status: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Number
        },
        updatedAt: {
            type: Number
        },
  
    },
    {
        versionKey: false,
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        timestamps: { currentTime: () => Date.now() }
    }
);


userSchema.plugin(mongoosePaginate);
userSchema.plugin(aggregatePaginate);
export default mongoose.model("user", userSchema);