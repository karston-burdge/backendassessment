const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { getCompliment,
    getFortune,
    deleteCompliment,
    addCompliment,
    updateCompliment
} = require('./controller')

app.get("/api/fortune", getFortune);

app.get("/api/compliment", getCompliment);
app.post("/api/compliment", addCompliment);
app.delete("/api/compliment/", deleteCompliment);
app.put("/api/compliment/:id", updateCompliment);

app.listen(6000, () => console.log("Server running on 6000"));