import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submission:", { name, email, message });
  res.json({ success: true, message: "Form received!" });
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});