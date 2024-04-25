import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    serviceId: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        default: "pending" // pending|acepted|done
    }
 },{
    timestamps: true,
 }
)

const Service = mongoose.model("Service",serviceSchema);

export default Service;
