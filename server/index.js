const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps, Postman, etc.)
            if (!origin) return callback(null, true);
            
            const allowedOrigins = [
                "http://localhost:3000",
                "https://lucky-notion.vercel.app"
            ];
            
            // Allow any vercel.app subdomain
            if (origin.includes(".vercel.app") || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            
            return callback(new Error('Not allowed by CORS'), false);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
    })
)

app.use(
    fileUpload({
      useTempFiles:true,
      tempFileDir:"./tmp"
    })
)

// cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// def route

app.get("/", (req,res) =>{
    return res.json({
        success:true,
        message: 'Your server is up and running...'
    });
});

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`)
})