// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://codingchronicles:coding.chronicles_41@coding.aimezxq.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  profession: String,
  age: Number,
  gender: String,
  activityLevel: String,
  sports: String,
  dietaryPreference: String,
  weightGoal: String,
  bodyWeight: Number,
  bodyHeight: Number,
  diabetic: {
    status: String,
    range: Number,
  },
  bloodPressure: {
    status: String,
    range: String,
  },
  cholesterol: {
    status: String,
    level: String,
  },
  disease: {
    status: String,
    details: String,
  },
  smoker: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.number,
    });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res
        .status(200)
        .json({ success: true, data: user, message: "Login successful!" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/storeFormData", async (req, res) => {
  try {
    // Extract form data from the request body
    const formData = req.body;

    // Assuming you have the user's email in the form data
    const userEmail = formData.email;

    // Find the user by email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Update the user's health information
    user.profession = formData.profession;
    user.age = formData.age;
    user.gender = formData.gender;
    user.activityLevel = formData.activityLevel;
    user.sports = formData.sports;
    user.dietaryPreference = formData.dietaryPreference;
    user.weightGoal = formData.weightGoal;
    user.bodyWeight = formData.bodyWeight;
    user.bodyHeight = formData.bodyHeight;
    user.diabetic = {
      status: formData.diabetic.status,
      range: formData.diabetic.range,
    };
    user.bloodPressure = {
      status: formData.bloodPressure.status,
      range: formData.bloodPressure.range,
    };
    user.cholesterol = {
      status: formData.cholesterol.status,
      level: formData.cholesterol.level,
    };
    user.disease = {
      status: formData.disease.status,
      details: formData.disease.details,
    };
    user.smoker = formData.smoker;

    // Save the user document
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Form data submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// app.post("/submitHealthForm", async (req, res) => {
//   try {
//     const userEmail = req.body.email; // Assuming you have the user's email
//     const user = await User.findOne({ email: userEmail });

//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     // Update user document with health form data
//     user.profession = req.body.profession;
//     user.age = req.body.age;
//     user.gender = req.body.gender;

//     // ... update other fields similarly

//     await user.save();

//     res
//       .status(200)
//       .json({ success: true, message: "Health form submitted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
