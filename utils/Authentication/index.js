import { verify } from "jsonwebtoken"
import Cookies from 'cookies'

const Authentication = (fn) => async (req, res) => {
   const cookie = new Cookies(req, res)
   await verify(cookie.get('auth'), process.env.SECRET, async (error, decoded) => {
      if(!error && decoded){
         return await fn(req, res)
      }
      res.status(400).json({message : "Sorry !!!, Silahkan login terlebih dahulu."})
   })
}

export default Authentication