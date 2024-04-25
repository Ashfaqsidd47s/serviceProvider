import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 50,
    },
    providerId: {
        type: String,
        required: true,
    },
    providerName: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    consumers: {
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

const Service = mongoose.model("Service",serviceSchema);

export default Service;
