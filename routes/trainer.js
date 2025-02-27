
"use strict";
import express from "express";
import {
    AddTrainer,
    deactivateTrainer,
    activateTrainer,
    deleteTrainer,
    getAllTrainers,
    getTrainerById,
    
} from "../controllers/Trainer";

const trainerRoute = express.Router();

trainerRoute.post("/add-trainer",   AddTrainer);
trainerRoute.put("/deactivate/:trainerId", deactivateTrainer);
trainerRoute.put("/activate/:trainerId", activateTrainer);
trainerRoute.delete("/delete/:trainerId", deleteTrainer);
trainerRoute.get("/all", getAllTrainers);
trainerRoute.get("/:trainerId", getTrainerById);




export default trainerRoute;
