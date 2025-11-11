const mongoose = require("mongoose");
const about = require("../models/About");


async function saveFeatures() {
  const challenges = [
    {
      icon: "🎯",
      title: "Generic Learning Paths",
      description:
        "Students follow one-size-fits-all curricula without understanding what truly aligns with their career goals.",
    },
    {
      icon: "📈",
      title: "Lack of Consistency",
      description:
        "Without structured goals and progress tracking, students lose motivation and break their learning flow.",
    },
    {
      icon: "👥",
      title: "Education-Industry Gap",
      description:
        "Academic learning rarely matches industry expectations, creating a disconnect between education and career readiness.",
    },
    {
      icon: "💬",
      title: "No Real-time Mentorship",
      description:
        "Students need instant help and guidance but traditional methods can't provide on-demand support.",
    },
  ];

  await about.insertMany(challenges);
  console.log("✅ Data Saved Successfully!");
}

async function run() {
  try {
    await main();
    await saveFeatures();
  } catch (err) {
    console.error("❌ Error Occurred:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  }
}

run();
