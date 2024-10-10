const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servér statiske filer

let animals = [
    { id: 1, name: 'Simba', species: 'lion', age: 5, favoriteFood: 'meat' },
    { id: 2, name: 'Dumbo', species: 'elephant', age: 10, favoriteFood: 'fruits' },
    { id: 3, name: 'Pingu', species: 'penguin', age: 3, favoriteFood: 'fish' }
];

// GET alle dyr
app.get('/api/animals', (req, res) => {
    res.json(animals);
});

// POST nyt dyr
app.post('/api/animals', (req, res) => {
    const { name, species, age, favoriteFood } = req.body;
    const newAnimal = {
        id: animals.length + 1, // Simpel ID-generering
        name,
        species,
        age: parseInt(age),
        favoriteFood
    };
    animals.push(newAnimal);
    res.status(201).json(newAnimal); // Returner det nye dyr med status 201 Created
});

// PUT opdatering af dyr
app.put('/api/animals/:id', (req, res) => {
    const animalId = parseInt(req.params.id);
    const { name, species, age, favoriteFood } = req.body;

    // Find dyret og opdater oplysningerne
    const animalIndex = animals.findIndex(animal => animal.id === animalId);
    if (animalIndex !== -1) {
        animals[animalIndex] = { id: animalId, name, species, age: parseInt(age), favoriteFood };
        res.json(animals[animalIndex]);
    } else {
        res.status(404).json({ message: 'Animal not found' });
    }
});

// DELETE dyret
app.delete('/api/animals/:id', (req, res) => {
    const animalId = parseInt(req.params.id);
    animals = animals.filter(animal => animal.id !== animalId);
    res.status(204).send(); // Sletning var succesfuld
});

// Servér index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

// Start serveren
function startServer() {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
}

startServer();
