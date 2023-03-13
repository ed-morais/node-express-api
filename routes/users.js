import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);
  // users.push()
  res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
