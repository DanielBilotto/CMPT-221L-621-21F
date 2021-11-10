const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect("mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/test");