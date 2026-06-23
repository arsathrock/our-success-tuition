const express = require('express');
const cors = require('cors');
const db = require('./firebase');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});



app.post("/api/bookings", async (req: any, res: any) => {
  console.log("RECEIVED FROM FRONTEND:", req.body);

  try {
    const result = await db.collection("bookings").add(req.body);

    console.log("FIREBASE SAVED:", result.id);

    res.json({
      success: true,
      message: "Booking saved"
    });

  } catch (error) {
    console.error("FIREBASE ERROR:", error);

    res.status(500).json({
      success: false
    });
  }
});

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})