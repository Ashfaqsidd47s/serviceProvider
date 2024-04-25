import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

//CREATE SERVICE
router.post("/create", async (req, res) => {
    try {
        const newService = await Service.create({
            name: req.body.name,
            providerId: req.body.providerId,
            providerName: req.body.providerName,
            desc: req.body.desc,
            price: req.body.price,
        })
        res.status(200).json(newService);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

// GET ALL SERVICES THAT ARE THERE
router.get("/", async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json(err);
    }
})

// REQUEST SERVICE

export default router;