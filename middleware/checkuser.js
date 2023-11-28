const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
const User=require('../models/user')

const maxAge=3*24*60*60

router.get("/",async (req,res)=>{
    const token=req.get("Authorization")
    console.log(token,"token")
    if (token){
        jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,decodedToken)=>{
            if (err){
                console.log(err,"err in decoded")
                console.log("error ran in decoded")
                res.status(500).json({error:err,message:"Server Error"})
                return 
            }
            else{
                const user=await User.findById(decodedToken.id)
                res.json({user:user})
                return
            }
        })
        // res.status(400).json({error:"No Token Found"})
        return 
    }
    else{
        res.json({error:"No Token Found"})
        return 
    }
})

module.exports=router