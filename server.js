const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Utility function to find the highest lowercase alphabet
const findHighestLowercaseAlphabet = (alphabets) => {
  const lowercaseAlphabets = alphabets.filter((ch) => ch >= "a" && ch <= "z");
  return lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];
};

// POST Endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const user_id = "john_doe_17091999"; // Replace with dynamic generation if needed
  const email = "john@xyz.com"; // Replace with dynamic generation if needed
  const roll_number = "ABCD123"; // Replace with dynamic generation if needed

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highest_lowercase_alphabet = findHighestLowercaseAlphabet(alphabets);

  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet,
  };
  res.json(response);
});

// GET Endpoint
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
