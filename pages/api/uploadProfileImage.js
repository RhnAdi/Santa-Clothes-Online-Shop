import nextConnect from "next-connect"
import mongoose from "mongoose"

const { GridFsStorage } = require('multer-gridfs-storage')
const multer = require('multer')
const URL = process.env.DB_URI
const Grid = require('gridfs-stream')

const conn = mongoose.createConnection(URL)
let gfs

UploadProfileImage.patch((req, res) => {
   res.json(res.body)
})

export default UploadProfileImage