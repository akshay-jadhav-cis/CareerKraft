const mongoose = require("mongoose");
const about = require("../models/About");


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/CarrerCraftDb');
}
main().then(() => {
    console.log("Successfully Mongoose Connection ");
}).catch((e) => {
    console.log("Error Occurred in MongoDb = ", e);
})
async function saveFeatures() {
    const challenges = [
        {
            icon: "🎯", // Replace with an actual icon or SVG
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
}
saveFeatures().then(console.log("Saved Succesfully"));