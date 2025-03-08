import School from "../models/school.model.js";

export const getSchools = async (req, res) => {
    try {
        const schools = await School.find({});
        res.status(200).json({success: true, data: schools});
    } catch (error) {
        console.log("error in fetching schools:", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
};

export const createSchool = async (req, res)=>{
    const school = req.body;

    if(!school.name || !school.info || !school.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new School(school)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create school:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};