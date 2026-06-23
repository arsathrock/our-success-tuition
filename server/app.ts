const express = require('express');
const cors = require('cors');
const db = require('./firebase');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});



const fs = require("fs");

app.post("/api/bookings", async (req : any, res : any) => {

  const booking = req.body;

  fs.appendFileSync(
    "bookings.json",
    JSON.stringify(booking) + "\n"
  );

  await db.collection("bookings").add(booking);

  res.json({
    success: true
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});