import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.detiail.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectDB() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db("studentManagementDb");
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

const app = express();
app.use(cors()); // Enable CORS

app.get("/", async (req, res) => {
  try {
    const database = await connectDB();
    res.send("Connected to MongoDB");
  } catch (error) {
    res.status(500).send("Failed to connect to MongoDB");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default connectDB;
