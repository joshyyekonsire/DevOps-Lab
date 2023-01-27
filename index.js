const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getFortuneCompliment,
  addFortune,
  addCompliment,
  deleteFortune,
  deleteCompliment,
  editFortune,
} = require("./controller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortunes", getFortune);
app.get("/api/fortunescompliments", getFortuneCompliment);
app.post("/api/fortunes/input", addFortune);

app.post("/api/compliments/input", addCompliment);

app.delete("/api/fortunes/:index", deleteFortune);

app.delete("/api/compliments/:index", deleteCompliment);

app.put("/api/fortunes/editIndex", editFortune);

app.listen(4000, () => console.log("There is Rock 'n' Roll on 4000"));
