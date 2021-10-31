const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyUserLogin = async (email,password)=>{
    try {
        const user = await userModel.findOne({email}).lean()
        if(!user)
            return {status:'error',error:'user not found'}
        if(await bcrypt.compare(password, user.password)){
            token = jwt.sign({id:user._id,username:user.email,type:'user'},JWT_SECRET,{ expiresIn: '2h'})
            return {status:'ok',data:token}
        }
        return {status:'error',error:'invalid password'}
    } catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

module.exports.login = async (req, res) => {
    const {email,password}=req.body;
    const response = await verifyUserLogin(email,password);
    if(response.status === 'ok')
        res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
    else
        res.json(response);
};