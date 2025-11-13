require("dotenv").config();

const express = require("express");
const cors = require("cors");
//const authRoutes = require("./routes/auth");
//const { authMiddleware } = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // Protected route example
// app.get("/api/me", authMiddleware, (req, res) => {
//   res.json({ user: req.user });
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
