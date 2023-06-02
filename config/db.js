import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

let db
const url = process.env.MONGODB_URL
const dbName = process.env.DB_NAME
const mongoClient = new MongoClient(url)

const connectDB = async () => {
  if(db) return
  try {
    process.on('exit', async () => {
      if(mongoClient.topology.isConnected()) {
        await mongoClient.close()
      }
    })
    await mongoClient.connect()
    console.log('connected to db');
    db = mongoClient.db(dbName)
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

export const getDB = () => {
  return db
}

export default connectDB
