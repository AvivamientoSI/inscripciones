import { text } from 'express';
import {ABC, DIS, ES} from '../models/incription.model.js';
import nodemailer from "nodemailer";


const sendConfirmationEmailABC = async (email, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otro servicio SMTP
            auth: {
                user: "avivamientosanisidro@gmail.com", // Tu correo
                pass: "hxmv dqun hyur cbtu" // Tu contraseña o App Password
            }
        });

        const mailOptionsABC = {
            from: '"AvivamientoSI" <avivamientosanisidro@gmail.com>',
            to: email,
            subject: "¡Inscripción confirmada!",
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                <h2 style="color: #4CAF50;">✅ Inscripción confirmada</h2>
                <p>Hola <strong>${nombre}</strong>,</p>
                <p>Te confirmamos que tu inscripción en <strong>El ABC del Evangelio</strong> ha sido registrada con éxito.</p>
                <br/>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p>¡Bendiciones!</p>
                <hr>
                <p style="font-size: 12px; color: #888;">Este es un mensaje automático, por favor no respondas a este correo.</p>
            </div>`
        };

        await transporter.sendMail(mailOptionsABC);
        console.log("Correo enviado a:", email);

    } catch (error) {
        console.error("Error al enviar correo:", error.message);
    }
};


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
        await sendConfirmationEmailABC(abc.email, abc.name);
        res.status(201).json({success: true, data: newABC, message:"Inscripción creada con éxito"});
    } catch (error) {
        console.error("Error in Create ABC:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

const sendConfirmationEmailDIS = async (email, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otro servicio SMTP
            auth: {
                user: "avivamientosanisidro@gmail.com", // Tu correo
                pass: "hxmv dqun hyur cbtu" // Tu contraseña o App Password
            }
        });

        const mailOptionsDIS = {
            from: '"AvivamientoSI" <avivamientosanisidro@gmail.com>',
            to: email,
            subject: "¡Inscripción confirmada!",
            text: "hola",
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                <h2 style="color: #4CAF50;">✅ Inscripción confirmada</h2>
                <p>Hola <strong>${nombre}</strong>,</p>
                <p>Te confirmamos que tu inscripción en el <strong>Discipulado</strong> ha sido registrada con éxito.</p>
                <br/>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p>¡Bendiciones!</p>
                <hr>
                <p style="font-size: 12px; color: #888;">Este es un mensaje automático, por favor no respondas a este correo.</p>
            </div>`
        };

        await transporter.sendMail(mailOptionsDIS);
        console.log("Correo enviado a:", email);

    } catch (error) {
        console.error("Error al enviar correo:", error.message);
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
        await sendConfirmationEmailDIS(dis.email, dis.name);
        res.status(201).json({success: true, data: newDIS});
    } catch (error) {
        console.error("Error in Create DIS:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

const sendConfirmationEmailES = async (email, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otro servicio SMTP
            auth: {
                user: "avivamientosanisidro@gmail.com", // Tu correo
                pass: "hxmv dqun hyur cbtu" // Tu contraseña o App Password
            }
        });

        const mailOptionsES = {
            from: '"AvivamientoSI" <avivamientosanisidro@gmail.com>',
            to: email,
            subject: "¡Inscripción confirmada!",
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                <h2 style="color: #4CAF50;">✅ Inscripción confirmada</h2>
                <p>Hola <strong>${nombre}</strong>,</p>
                <p>Te confirmamos que tu inscripción en <strong>La Escuela de Vida</strong> ha sido registrada con éxito.</p>
                <br/>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p>¡Bendiciones!</p>
                <hr>
                <p style="font-size: 12px; color: #888;">Este es un mensaje automático, por favor no respondas a este correo.</p>
            </div>`
        };

        await transporter.sendMail(mailOptionsES);
        console.log("Correo enviado a:", email);

    } catch (error) {
        console.error("Error al enviar correo:", error.message);
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
        await sendConfirmationEmailES(es.email, es.name);
        res.status(201).json({success: true, data: newES});
    } catch (error) {
        console.error("Error in Create ES:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}