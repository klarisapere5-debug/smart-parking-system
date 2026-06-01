// Author: Klarisa Pere
// HW4 Backend Server
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const parkingRoutes = require("./app_api/routes/parking");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1/Loc8r")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
app.use("/api/parking", parkingRoutes);
app.get("/", (req, res) => {
    res.send("Klarisa HW4 Backend Running");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
