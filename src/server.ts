import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("healthy");
});

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});
