const mongoose=require("mongoose");
const feature=require("../models/Feature");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/CarrerCraftDb');
}
main().then(()=>{
    console.log("Successfully Mongoose Connection ");
}).catch((e)=>{
    console.log("Error Occurred in MongoDb = " ,e);
})
async function saveFeatures(){
     const features = [
    { icon: "🎯", title: "Personalized Roadmaps", desc: "AI-driven learning paths..." },
    { icon: "⚡", title: "Daily Learning Tasks", desc: "Structured daily assignments..." },
    { icon: "🤖", title: "AI Chatbot Mentor", desc: "Get instant help..." },
    { icon: "🏆", title: "Gamified Learning", desc: "Earn XP points, maintain streaks..." },
    { icon: "📊", title: "Progress Analytics", desc: "Visualize your learning journey..." },
    { icon: "💬", title: "Real-time Support", desc: "Access mentorship whenever..." }
  ];
  await feature.insertMany(features);
}
saveFeatures().then(console.log("Saved Succesfully"));