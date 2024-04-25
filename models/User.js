import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    previousServices: {
        type: Array,
        default: []
    },
    currentSevices: {
        type: Array,
        default: []
    }
 },{
    timestamps: true,
 }
)

const User = mongoose.model("User",userSchema);

export default User;
