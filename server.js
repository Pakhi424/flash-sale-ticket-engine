const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [
    { id: 1, title: "Initial Note", content: "Welcome to your scratchpad database!" }
];

app.get('/api/notes', (req, res) => {
    res.json(notes); 
});

app.post('/api/notes', (req,res) => {
  const { title, content } = req.body;

  const newNote = {
    id: notes.length + 1,
    title: title,
    content: content
  };

  notes.push(newNote); 

   res.status(201).json(newNote); 
});

app.get('/health', (req,res) => {
  res.json({
    status: "alive",
    message: "Welcome to the Ticket Reservation Engine Foundation!" 
    });
});

app.listen (PORT, ()  => {
  console.log(`Engine backbone running smoothly on port ${PORT}`);
});
