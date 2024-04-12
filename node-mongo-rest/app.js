const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ashutosh', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    mobileNumber: String,
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

// GET /person: Get a list of all people
app.get('/person', async (req, res) => {
    try {
        const people = await Person.find();
        res.json(people);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch people' });
    }
});

// POST /person: Create a new person
app.post('/person', async (req, res) => {
    try {
        const { name, age, gender, mobileNumber } = req.body;
        const person = new Person({ name, age, gender, mobileNumber });
        await person.save();
        res.status(201).json(person);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create person' });
    }
});

// PUT /person/:id: Update a person with the specified ID
app.put('/person/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, mobileNumber } = req.body;
        const person = await Person.findByIdAndUpdate(
            id,
            { name, age, gender, mobileNumber },
            { new: true }
        );
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update person' });
    }
});

// DELETE /person/:id: Delete a person with the specified ID
app.delete('/person/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findByIdAndRemove(id);
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json({ message: 'Person deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
