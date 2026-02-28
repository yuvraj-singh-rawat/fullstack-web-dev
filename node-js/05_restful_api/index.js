const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} | ${req.ip} | ${req.method} | ${req.path}`,
    (err) => {
      if (err) console.log(err);
      next();
    }
  );
});

// GET All
app.get("/users", (req, res) => {
  res.json(users);
});

// GET One
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST
app.post("/users", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT
app.put("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  users = users.filter(
    (u) => u.id !== Number(req.params.id)
  );

  res.json({ message: "User deleted" });
});

app.listen(PORT, () =>
  console.log(`Server started at ${PORT}`)
);
