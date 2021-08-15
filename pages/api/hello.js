import nextConnect from "next-connect";
import Cookies from "cookies"

const hello = nextConnect()
.get((req, res) => {
   const cookie = new Cookies (req, res)
   const jwt = cookie.get('auth')
   res.json({jwt})
})

export default hello