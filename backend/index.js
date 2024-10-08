import express from "express";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import cors from "cors";
import connectDB from "./database/db.js";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL
].filter(Boolean); 
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));


app.use(express.json());

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});


app.post(
  "/api/chats",
  ClerkExpressRequireAuth(),

  async (req, res) => {
    const userId = req.auth.userId;
    const { text } = req.body;
    try {
      const newChat = new Chat({
        userId: userId,
        history: [{ role: "user", parts: [{ text }] }],
      });
      const savedChat = await newChat.save();

      const userChats = await UserChats.find({ userId: userId });
      if (!userChats.length) {  //error
        const newUserChats = new UserChats({
          userId: userId,
          chats: [
            {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          ],
        });
        await newUserChats.save();
      } else {
        await UserChats.updateOne(
          { userId: userId },
          {
            $push: {
              chats: {
                _id: savedChat._id,
                title: text.substring(0, 40),
              },
            },
          }
        );
      }
      res.status(201).send(savedChat._id);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error creating chat");
    }
  }
);

app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const userChats = await UserChats.find({ userId });
    if (!userChats.length || !userChats[0].chats) {  
    res.status(200).send([]);
    }
    else{
      res.status(200).send(userChats[0].chats);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching user chats.");
  }
});

app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    const chat = await Chat.findOne({ _id: req.params.id, userId });
    res.status(200).send(chat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user chats.");
  }
});

app.put("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  const { question, answer, img } = req.body;
  const newItems = [
    ...(question
      ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
      : []),
    { role: "model", parts: [{ text: answer }] },
  ];
  try {
    const updatedChat = await Chat.updateOne(
      { _id: req.params.id, userId },
      {
        $push: {
          history: {
            $each: newItems,
          },
        },
      }
    );
    res.status(200).send(updatedChat);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding conversation");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
