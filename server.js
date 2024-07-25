const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.listen(8080, () => {
  console.log("server running");
});

let arr = [1, 2, 3, 3, 5];
app.get("/", (req, res) => {
  res.send(arr);
});
//get -read
//post -insert/create
//put - update
//delete - delete

app.post("/", (req, res) => {
  const { num } = req.body;
  arr.push(num);
  res.json(arr);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { num } = req.body;
  console.log(req);
  arr[id] = num;
  res.json(arr);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.json(arr);
});
