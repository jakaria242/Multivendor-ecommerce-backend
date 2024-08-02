const mongoose = require("mongoose")
const {Schema} = mongoose

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowecase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
}, { timestamps: true})

module.exports = mongoose.model("Admin",adminSchema)