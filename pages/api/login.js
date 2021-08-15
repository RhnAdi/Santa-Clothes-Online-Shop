import nextConnect from 'next-connect'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'
import User from '../../models/Users'
import connectDatabase from '../../utils/connectDatabase'

const login = nextConnect()
.post((req, res) => {
   const { email, password } = req.body
   User.findOne({email})
   .then(result => {
      compare(password, result.password, (error, status) => {
         console.log(status)
         if(status){
            const claims = {sub : result._id}
            const jwt = sign(claims, process.env.SECRET, {expiresIn : '1d'})
            res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
               httpOnly : true,
               secure : process.env.NODE_ENV !== 'development',
               sameSite : 'strict',
               maxAge : 86400,
               path : '/'
            }))
            res.status(200).json({status : 200, message : 'Selamat, datang !!!'})
         } else {
            res.status(400).json({message : 'Maaf, Password yang anda masukkan salah.'})
         }
      })
   })
   .catch(error => {
      res.status(400).json({message : 'Ups... Email yang anda masukkan salah.', error})
   })
})

export default connectDatabase(login)