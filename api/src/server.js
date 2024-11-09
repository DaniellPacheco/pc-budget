require('dotenv').config()

const express = require("express");
const cors = require("cors")
const routes = require("./routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.port ?? 3333;
app.listen(PORT, console.log(`Server is running at port ${PORT} - http://localhost:${PORT}`));