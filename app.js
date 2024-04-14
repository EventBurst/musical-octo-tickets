import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Swagger UI
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

// Routes
import ticketRoutes from "./routes/ticket.routes.js";

// Path
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load("./swagger.yaml");
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

// Define route to serve the index.html file
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Send the index.html file
});

// Swagger UI
app.use(
  "/api/musical-octo-tickets/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use("/api/musical-octo-tickets/ticket", ticketRoutes);
//Routes
export default app;
