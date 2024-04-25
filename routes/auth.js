import express from "express";
import bcrypt from "bcrypt"
import User from "../models/User.js";
import ServiceProvider from "../models/ServiceProvider.js";

const router = express.Router();


//REGISTER ROUTE
router.post("/user/register", async function(req,res){
    try {
        
        const chekEmailUser = await User.findOne({email: req.body.email});
        if(!chekEmailUser){
            const chekUsername = await User.findOne({username: req.body.username});
            if(!chekUsername){
                const salt =  await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password,salt)
                const newUser = await User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                });
                res.status(200).json(newUser);
            } else {
                res.status(403).json("Username already Taken")
            }
        } else {
            res.status(403).json("Email alredy taken ")
        }
    } catch (err) {
        res.status(500).json("something went wrong");
    }
})

//LOGIN ROUTE
router.post("/user/login", async function(req, res){
    try {
        const checkUser = await User.findOne({email: req.body.email})
        if(checkUser){
            const validate = await bcrypt.compare(req.body.password, checkUser.password);
            if(validate){
                res.status(200).json(checkUser);
            } else {
                res.status(401).json("Invalid password");
            }
        } else {
            res.status(403).json("Email not found...");
        }
    } catch (err) {
        console.log(err)
        res.status(500).json("something went wrong...")
    }
})


//REGISTER ROUTE FOR THE SERVICE PROVIDER
router.post("/provider/register", async function(req,res){
    try {
        
        const chekEmailUser = await ServiceProvider.findOne({email: req.body.email});
        if(!chekEmailUser){
            const chekUsername = await ServiceProvider.findOne({username: req.body.username});
            if(!chekUsername){
                const salt =  await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password,salt)
                const newUser = await ServiceProvider.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                });
                res.status(200).json(newUser);
            } else {
                res.status(403).json("Username already Taken")
            }
        } else {
            res.status(403).json("Email alredy taken ")
        }
    } catch (err) {
        res.status(500).json("something went wrong");
    }
})

//LOGIN ROUTE
router.post("/provider/login", async function(req, res){
    try {
        const checkUser = await ServiceProvider.findOne({email: req.body.email})
        if(checkUser){
            const validate = await bcrypt.compare(req.body.password, checkUser.password);
            if(validate){
                res.status(200).json(checkUser);
            } else {
                res.status(401).json("Invalid password");
            }
        } else {
            res.status(403).json("Email not found...");
        }
    } catch (err) {
        console.log(err)
        res.status(500).json("something went wrong...")
    }
})

//GET ROUTE TEST
router.get("/", function(req, res){
    res.status(200).json("Auth router is working fine ..");
})


export default router;