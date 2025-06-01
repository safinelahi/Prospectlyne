const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["student", "recruiter"],
    required: true,
  },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  university: { type: String },
  company: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
