import nextConnect from 'next-connect'
import bcrypt from 'bcrypt'
import User from '../../models/Users'
import connectDatabase from '../../utils/connectDatabase'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

const signup = nextConnect()
.post(async (req, res) => {
   const { username, email, password } = req.body
   const passwordhash = bcrypt.hashSync(password, 10)
   const checkEmail = await User.findOne({email})
   const checkUsername = await User.findOne({username})
   if(checkUsername){
      return res.json({message : "Username sudah ada."})
   }
   if(checkEmail){
      return res.json({message : "Email sudah ada."})
   }
   await new User ({username, email, password : passwordhash})
   .save()
   .then((result) => {
      const claims = { sub: result._id }
      const jwt = sign(claims, process.env.SECRET, {expiresIn : '1h'})
      res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
         httpOnly : true,
         secure : process.env.NODE_ENV !== 'development',
         sameSite : 'strict',
         maxAge : 3600,
         path : '/'
      }))
      res.status(200).json({status : 200, message : 'Selamat!!!, Account anda sudah dibuat.'})
   })
   .catch(error => {
      res.status(400).json({status : 400, message: 'Sign Up Failed.',error})
   })
})

export default connectDatabase(signup)