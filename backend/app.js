require("dotenv").config();
const express=require("express");
const app=express();
const port=5000;
const cors=require("cors");
const path=require("path");
const session=require("express-session");
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const userRoute=require("./routes/userRoute");
const featureRoute = require("./routes/featureRoute");
const aboutRoute=require("./routes/aboutRoute");
const twoFactorRoute=require("./routes/twoFactorRoute");
const isLoggedIn = require("./utils/middleware");
const passport=require("passport");
const googleAuthRoute=require("./routes/googleAuthRoute");
app.use(express.static(path.join(__dirname,"../Frontend/dist")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
  secret:process.env.SECRET_CODE,
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
    sameSite:"lax",
    maxAge:60*60*24,
  }
}))
app.use(cors({
  origin: "http://localhost:2000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
async function main() {
  await mongoose.connect( process.env.MONGO_URL );
}
main().then(()=>{
    console.log("Successfully Mongoose Connection ");
}).catch((e)=>{
    console.log("Error Occurred in MongoDb = " ,e);
})
app.use(passport.initialize());
app.use(passport.session());
app.use("/2fa", twoFactorRoute);
app.use("/users",userRoute);
app.use("/features",featureRoute);
app.use("/about",aboutRoute);
app.use("/auth", googleAuthRoute);
app.get("/dashboard", isLoggedIn, (req, res) => {
  res.status(200).json({
    message: "Welcome to dashboard",
    user: req.session.user
  });
});


app.listen(process.env.PORT,(req,res)=>{
    console.log(`Port is Working At ${process.env.PORT}`);
})
