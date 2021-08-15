import nextConnect from "next-connect"
import connectDatabase from '../../../utils/connectDatabase'
import Users from '../../../models/Users'


const Account = nextConnect()
.get((req, res) => {
   const { id } = req.query
   Users.findById(id)
   .then(result => {
      res.status(200).json({message : "Success", status : "OK", result})
   })
   .catch(error => {
      res.status(400).json({message : "Failed."})
   })
})
.put((req, res) => {
   const { firstName, lastName, username, email, phoneNumber, address } = req.body
   const { id } = req.query
   Users.findById(id)
   .then(result => {
      result.username = username
      result.email = email
      result.profile = {
         firstName, lastName, phoneNumber, address
      }
      return result.save()
   })
   .then(result => {
      res.status(200).json({message : "Updated Success", status : 'OK', result})
   })
   .catch(error => {
      console.log(error)
      res.status(400).json({message : "Update failed."})
   })
})

export default connectDatabase(Account)