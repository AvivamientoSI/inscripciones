import {ABC, DIS, ES} from '../models/incription.model.js';

export const createABC = async (req, res)=>{
    const abc = req.body;

    if(!abc.name || !abc.lastname || !abc.document || !abc.email || !abc.phone) {
        return res.status(400).json({success: false, message: "Por favor, complete todos los campos"})
    }

    const newABC = new ABC(abc)

    try {
        const {document} = abc;
        const existingPerson = await ABC.findOne({document});

        if(existingPerson) {
            return res.status(400).json({success: false, message: "Ya estas registrado/a" });
        }
        await newABC.save();
        res.status(201).json({success: true, data: newABC, message:"Inscripción creada con éxito"});
    } catch (error) {
        console.error("Error in Create ABC:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createDIS = async (req, res)=>{
    const dis = req.body;

    if(!dis.name || !dis.lastname || !dis.document || !dis.email || !dis.phone) {
        return res.status(400).json({success: false, message: "Por favor, complete todos los campos"})
    }

    const newDIS = new DIS(dis)

    try {
        const {document} = dis;
        const existingPerson = await DIS.findOne({document});

        if(existingPerson) {
            return res.status(400).json({ message: "Ya estas registrado/a" });
        }
        await newDIS.save();
        res.status(201).json({success: true, data: newDIS});
    } catch (error) {
        console.error("Error in Create DIS:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createES = async (req, res)=>{
    const es = req.body;

    if(!es.name || !es.lastname || !es.document || !es.email || !es.phone) {
        return res.status(400).json({success: false, message: "Por favor, complete todos los campos"})
    }

    const newES = new ES(es)

    try {
        const {document} = es;
        const existingPerson = await ES.findOne({document});

        if(existingPerson) {
            return res.status(400).json({ message: "Ya estas registrado/a" });
        }
        await newES.save();
        res.status(201).json({success: true, data: newES});
    } catch (error) {
        console.error("Error in Create ES:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}