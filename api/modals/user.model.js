import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email:  {
            type: String,
            required: true,
            unique: true,
        },
        password:  {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "https://img2.imgtp.com/2024/04/01/a7ry4B8Q.jpeg"
        },
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;