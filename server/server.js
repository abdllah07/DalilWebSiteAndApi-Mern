const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes 

const authRouter = require('./routes/auth/authRoutes')
const BusinessAndServiceRouter = require('./routes/user/BusinessAndService')


mongoose
    .connect('mongodb+srv://abdallahalhasan2:8XExYjkzG8VOyrZ3@cluster0.wam8n.mongodb.net/myDatabase?retryWrites=true&w=majority')
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());


// the routes 
app.use('/api/auth' , authRouter)
app.use('/api/BusinessAndService' , BusinessAndServiceRouter)



app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
