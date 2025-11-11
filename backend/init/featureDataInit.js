const mongoose = require("mongoose");
const feature = require("../models/Feature");



async function saveFeatures() {
  const features = [
    { icon: "🎯", title: "Personalized Roadmaps", desc: "AI-driven learning paths..." },
    { icon: "⚡", title: "Daily Learning Tasks", desc: "Structured daily assignments..." },
    { icon: "🤖", title: "AI Chatbot Mentor", desc: "Get instant help..." },
    { icon: "🏆", title: "Gamified Learning", desc: "Earn XP points, maintain streaks..." },
    { icon: "📊", title: "Progress Analytics", desc: "Visualize your learning journey..." },
    { icon: "💬", title: "Real-time Support", desc: "Access mentorship whenever..." }
  ];

  await feature.insertMany(features);
  console.log("✅ Features Saved Successfully");
}

async function run() {
  try {
    await main();         // connect to DB
    await saveFeatures(); // insert data
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  }
}

run();
