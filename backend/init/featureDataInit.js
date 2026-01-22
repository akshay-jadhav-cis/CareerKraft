const mongoose = require("mongoose");
const feature = require("../models/Feature");
// require("dotenv").config({ path: "../.env" }); 
// async function connectDB() {
//   await mongoose.connect(process.env.MONGO_URL);
//   console.log("✅ MongoDB Connected");
// }


async function saveFeatures() {
  const features = [
    {
      icon: "school",
      title: "Personalized Roadmaps",
      desc: "AI-driven learning paths customized for your career goals.",
    },
    {
      icon: "assignment",
      title: "Daily Learning Tasks",
      desc: "Structured daily assignments to keep you consistent.",
    },
    {
      icon: "code",
      title: "AI Chatbot Mentor",
      desc: "Get instant help from an AI-powered mentor anytime.",
    },
    {
      icon: "trending",
      title: "Gamified Learning",
      desc: "Earn XP points, maintain streaks, and stay motivated.",
    },
    {
      icon: "security",
      title: "Progress Analytics",
      desc: "Visualize your learning journey with insights.",
    },
    {
      icon: "assignment",
      title: "Real-time Support",
      desc: "Access mentorship and guidance whenever you need.",
    },
  ];

  await feature.deleteMany({}); // 🔥 prevent duplicates
  await feature.insertMany(features);

  console.log("✅ Features Saved Successfully");
}

async function run() {
  try {
    await connectDB();        
    await saveFeatures();
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  }
}

run();
