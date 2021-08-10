import mongoose from 'mongoose'

const connectDatabase = (handler) => {
   return async (req, res) => {
      if(mongoose.connections[0].readyState){
         return handler(req, res)
      }
      await mongoose.connect(process.env.DB_URI, { 
         useNewUrlParser      : true, 
         useUnifiedTopology   : true, 
         useFindAndModify     : false,
         useCreateIndex       : true 
      })
      console.log('database is connected')
      return handler(req, res)
   }
}

export default connectDatabase