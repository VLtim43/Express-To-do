//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//express 
const app = express();
app.use(express.json());
app.use(cors());