const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method + " request made to " + req.path);
    next();
});

let notes = [
    { id: 1, title: "Initial Note", content: "Welcome to your scratchpad database!" }
];

// 1. Add 'async' right here before the request parameters!
app.get('/api/notes/:id', async (req, res) => {
    
    // 2. Add 'await' right before your database operational call
    const note = await database.note.findUnique({
        where: { id: parseInt(req.params.id) }
    });

    res.json(note);
});

// 1. Mark the callback function as async
app.post('/api/notes', async (req, res) => {
    // Extract the incoming values from the request body translator
    const { title, content } = req.body;

    // 2. Await the asynchronous database creation query
    const newNote = await database.note.create({
        data: {
            title: title,
            content: content
        }
    });

    // 3. Return a clean confirmation JSON to the user
    res.status(201).json(newNote); 
});

app.get('/health', async (req,res) => {
  res.json({
    status: "alive",
    message: "Welcome to the Ticket Reservation Engine Foundation!" 
    });
});

// 1. Fixed the URL path string to support dynamic ':id' parameters
app.delete('/api/notes/:id', async (req, res) => {
    // Convert the URL string id parameter to an integer number
    const noteId = parseInt(req.params.id);

    // 2. Await the asynchronous database removal instruction
    await database.note.delete({
        where: { id: noteId }
    });

    // 3. Fixed the text string concatenation syntax using clean template backticks
    res.json({ message: `Note with ID ${noteId} has been successfully deleted.` });
});

app.listen (PORT, ()  => {
  console.log(`Engine backbone running smoothly on port ${PORT}`);
});
