import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    
  full_url: {
    type: String,
    required: true,
  },
