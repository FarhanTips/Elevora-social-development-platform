
import express from'express';
import 'dotenv/config'
import { MongoClient, ObjectId } from 'mongodb';
import cors from "cors";
import { createRemoteJWKSet, jwtVerify } from 'jose';

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());     // Important: Put app.use(express.json()) before your routes so the middleware can parse the request body before those routes execute.



const client = new MongoClient(process.env.MONGODB_URL);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await connectToMongoDB();

const db = connectedClient.db("elevora");
const eventCollection = db.collection("events");
const joinedCollection = db.collection("joined");


const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  if (!authHeader) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  // console.log(token);
  if (!token) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  const JWKS = createRemoteJWKSet(new URL(`${process.env.CLIENT_URL}/api/auth/jwks`));
  

  try {
    const {payload} = await jwtVerify(token, JWKS);
    // console.log(payload);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "Server Error" });
  }
  
};

app.get('/', (req, res) => {
  res.send('Working')
})

app.post("/add-event", async (req, res) => {
  const newData = req.body;
  console.log(newData);

  const result = await eventCollection.insertOne(newData);
  console.log(result);
  res.send(result);
})

app.get('/events', async (req, res) => {
  const result = await eventCollection.find().toArray();
  res.send(result);
})

app.get('/manage-events', verifyToken, async (req, res) => {
  const result = await eventCollection.find({userEmail: req.user.email}).toArray();
  res.send(result);
})

app.delete('/events/:id', async (req, res) => {
  const id = req.params.id;
  const result = await eventCollection.deleteOne({ _id: new ObjectId(id) });

  res.send(result);
})

app.patch('/events/:id', async (req, res) => {
  const id = req.params.id;
  const result = await eventCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body }
  );

  res.send(result);
})

app.get('/events/:id', async (req, res) => {
  const id = req.params.id;
  const result = await eventCollection.findOne({ _id: new ObjectId(id) });
  res.send(result);
})

app.post("/joined", verifyToken, async (req, res) => {
    const newData = req.body;

    const existingData = await joinedCollection.findOne({
        joinerEmail: newData.joinerEmail,
        title: newData.title,
        date: newData.date
    });

    if (existingData) {
        return res.send({ message: "Already added" });
    }

    const result = await joinedCollection.insertOne(newData);

    res.send(result);
});

app.get('/joined', verifyToken, async (req, res) => {
  const result = await joinedCollection.find({joinerEmail: req.user.email}).toArray();
  console.log(result);
  res.send(result);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
