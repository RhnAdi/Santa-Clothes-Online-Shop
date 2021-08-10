import { verify } from "jsonwebtoken"

const Authentication = (fn) => async (req, res) => {
   verify(req.headers.auth, process.env.SECRET, async (error, decoded) => {
      if(!error && decoded){
         return await fn(req, res)
      }
      res.status(400).json({message : "Sorry !!!, Silahkan login terlebih dahulu."})
   })
}

export default Authentication