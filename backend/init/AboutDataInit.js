require("dotenv").config({ path: "../.env" }); 

const mongoose = require("mongoose");
const About = require("../models/About");

//🔹 MongoDB connection
// async function connectDB() {
//   await mongoose.connect(process.env.MONGO_URL);
//   console.log("✅ MongoDB Connected");
// }

// 🔹 Seed data
async function saveAboutData() {
  const challenges = [
    {
      icon: "psychology",
      title: "Generic Learning Paths",
      description:
        "Students follow one-size-fits-all curricula without understanding what truly aligns with their career goals.",
    },
    {
      icon: "star",
      title: "Lack of Consistency",
      description:
        "Without structured goals and progress tracking, students lose motivation and break their learning flow.",
    },
    {
      icon: "person",
      title: "Education–Industry Gap",
      description:
        "Academic learning rarely matches industry expectations, creating a disconnect between education and career readiness.",
    },
    {
      icon: "award",
      title: "No Real-time Mentorship",
      description:
        "Students need instant help and guidance but traditional methods can't provide on-demand support.",
    },
  ];

  await About.deleteMany({});
  await About.insertMany(challenges);

  console.log("✅ About data saved successfully!");
}

async function run() {
  try {
     await connectDB();
    await saveAboutData();
  } catch (err) {
    console.error("❌ Error Occurred:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  }
}

run();
