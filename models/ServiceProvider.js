import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 70,
    },
    password: {
        type: String,
        max: 25,
    },
    services: {
        type: Array,
        default: []
    },
    serviceCount: {
        type: Number,
        default: 0,
    }
 },{
    timestamps: true,
 }
)

const ServiceProvider = mongoose.model("ServiceProvider",serviceProviderSchema);

export default ServiceProvider;
