const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

// Test de connexion à la base de données
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const app = express();

// Middleware pour activer les CORS

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware pour parser les cookies
app.use(cookieParser());
app.use(express.json());
// Routes
app.use("/api/participants", require("./routes/participantRoutes"));
app.use("/api/formateurs", require("./routes/formateurRoutes"));
app.use("/api/profils", require("./routes/profilRoutes"));
app.use("/api/domaines", require("./routes/domaineRoutes"));
app.use("/api/formations", require("./routes/formationRoutes"));
app.use("/api/utilisateurs", require("./routes/utilisateurRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
