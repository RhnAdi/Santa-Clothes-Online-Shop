import User from '../../models/Users'

export default async function Hello (req, res) {
   await User.find({email : 'rphtl@gmail.com'})
   .then(result => res.status(400).json({data:result}))
   .catch(err => res.status(400).json({error : err}))
}