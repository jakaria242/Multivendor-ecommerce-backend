const Admin = require('../models/adminModel.js')
const { responseReturn } = require('../utils/response.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { tokenCreate } = require('../utils/tokenCreate.js')

class authControllers  {
     admin_login = async (req, res) => {
        const {email, password} = req.body

        try {
         const admin = await Admin.findOne({email:email}).select('+password')
         if (admin) {
            const match = await bcrypt.compare(password, admin.password)
            if(match){
               const token = await tokenCreate({
                  id: admin._id,
                  role: admin.role
               })
               res.cookie('accessToken', token, {
                  expires: new Date(Date.now() + 7*24*60*60*1000)
               })
               responseReturn(res,200,{token, message:"Login successfull"})
            }else{
               responseReturn(res,404,{error: "password wrong"})
            }
         } else {
            responseReturn(res,404,{error: "email not found"})
         }
        } catch (error) {
         responseReturn(res,500,{error: error.message})
        }
     }  
 }



module.exports = new authControllers