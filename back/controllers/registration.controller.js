import Registration from "../models/registration.model.js";
import mongoose from "mongoose";

export const createRegistration = async (req, res) => {
    const reg = req.body;
    
        if(!reg.name || !reg.lastname) {
            return res.status(400).json({success: false, message: "Por favor, complete todos los campos"})
        }
    
        const newReg = new Registration(reg)
    
        try {
            const {document} = reg;
            const existingPerson = await Registration.findOne({document});
    
            if(existingPerson) {
                return res.status(400).json({success: false, message: "Ya estas registrado/a", data: existingPerson});
            }
            await newReg.save();
            res.status(201).json({success: true, data: newReg, message:"Registro exitoso"});
        } catch (error) {
            console.error("Error in Create Registration:", error.message);
            res.status(500).json({success: false, message: "Server Error"});
        }
};

export const getRegistrations = async (req, res) => {
    try {
            const registration = await Registration.find({})
            res.status(200).json({success: true, data: registration});
    } catch (error) {
            console.log("error in fetching inscriptions:", error.message);
            res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateRegistration = async (req, res) => {
    const {id} = req.params;
    const registration = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Person not found"});
    }

    try {
        const updateRegistration = await Registration.findByIdAndUpdate(id, registration, {new: true});
        res.status(200).json({success: true, data: updateRegistration});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }

};

export const deleteRegistration = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Person not found"});
    }
    try {
        await Registration.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Person deleted successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
};