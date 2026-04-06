// TODO 1: Import and Create express app instance
import express from "express";

// TODO 1: Define server port


// TODO 4: Import and Apply CORS middleware
import cors from "cors";


// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";

// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route
import { getRandomQuote } from "./quotes.js";


// TODO 7: Start server using app.listen

const app=express();
const PORT= 3000;

app.use(cors());
app.use(morgan("dev"));

// get request (route handler)
app.get("/",(req,res)=>{
    res.send("Backend server is running");
});


app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
