import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


// Routes
import ticketRoutes from "./routes/ticket.routes.js";


const app = express();
// for body parser
app.use(express.json());
//for url params
app.use(express.urlencoded({ extended: true }));
//for image,files
app.use(express.static("public"));
// for cookies parsing and setting
app.use(cookieParser());
app.use(cors());
//Server Working
app.get("/", (_, res) => {
  res.send("HLO");
});

app.use("/api/musical-octo-tickets/ticket", ticketRoutes);
//Routes
export default app;
