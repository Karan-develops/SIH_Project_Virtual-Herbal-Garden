const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());

app.get("/api/plants", async (req, res) => {
  const { page, filter } = req.query;
  let query = page ? `&page=${page}` : "";

  if (filter) {
    query += `&filter[common_name]=${encodeURIComponent(filter)}`;
  }

  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=-OZ9S7Hdvr4emdBDZVWeTvYljfg4XDesWTBFjRW32r8${query}`
    );
    const data = await response.json();
    // console.log("API Response:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
