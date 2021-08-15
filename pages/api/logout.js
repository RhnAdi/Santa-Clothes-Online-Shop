import Cookies from 'cookies'

export default function Logout (req, res) {
   const cookie = new Cookies (req, res)
   cookie.set('auth', '', { expires : 0 })
   res.json({message : 'Logout'})
}