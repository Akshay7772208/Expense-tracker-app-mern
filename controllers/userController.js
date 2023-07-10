const userModel=require('../models/userModel')

const loginController= async(req,res)=>{
	try{
		const {email,password}=req.body;
		const user=await userModel.findOne({email,password})
		if(!user){
			return res.status(404).send('User not found')
		}
		return res.status(200).json({
			success: true,
			user
		})
	}catch(error){
		res.status(400).json({
			success: false,
			error
		})
		///console.log("error in login controller")
	}
}

const registerController= async(req,res)=>{
	try{
		const newUser=new userModel(req.body);
		await newUser.save()
		res.status(201).send({
			success: true,
		 	newUser
		})
		///console.log('user registered',{newUser})
	}catch(error){
		res.status(400).json({
			success: false,
			error
		})
		///console.log("error in register controller")
	}
}

module.exports={
	loginController, 
	registerController
}