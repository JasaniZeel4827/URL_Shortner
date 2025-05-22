import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    
  full_url: {
    type: String,
    required: true,
  },
    short_url: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
