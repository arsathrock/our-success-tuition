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

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})