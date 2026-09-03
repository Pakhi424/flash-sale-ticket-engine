const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/health', (req,res) => {
  res.json({
    status: "alive",
    message: "Welcome to the Ticket Reservation Engine Foundation!" 
    });
});

app.list (PORT, ()  => {
  console.log(Engine backbone running smoothly on port ${PORT}`);
});
