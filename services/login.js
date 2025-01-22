const bcrypt=require("bcrypt")
const User=require("../models/user")
const {generateToken}=require("../utils/jwtUtils");

async function login(email,password) {
    try {
        const existingUser=await User.findOne({email})
        if(!existingUser){
            throw new Error("User not found");
            
        }
        const isPasswordValid=bcrypt.compare(password,existingUser.password)
        if(!isPasswordValid){
            throw new Error("Incorrect password");
            
        }
        const token=generateToken(existingUser);
        return token;
    } catch (error) {
        throw new Error("Invalid credentials");
        
        
    }
    
}
module.exports={
    login
}