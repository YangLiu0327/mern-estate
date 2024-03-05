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
            default: "http://up.qqmmgg.com/up/33/97/2c/33972c269fad442b494ee6a6d0fe7a94.jpg"
        },
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;