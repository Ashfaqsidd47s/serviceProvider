import express from "express";
import Service from "../models/Service.js";

const router = express.Router();


// GET ALL SERVICES OF A SERVICE PROVIDER
router.get("/:id", async (req, res) => {
    try {
        const services = await Service.find({providerId: req.params.id});
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET ALL PAST PROVIDED SERVICES 

// GET CURRENT REQUESTED SERVICES

// GET ACCEPTED SERVICES


export default router;
