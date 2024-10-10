
let animals = [
    { id: 1, name: 'Simba', species: 'lion', age: 5, favoriteFood: 'meat' },
    { id: 2, name: 'Dumbo', species: 'elephant', age: 10, favoriteFood: 'fruits' },
    { id: 3, name: 'Pingu', species: 'penguin', age: 3, favoriteFood: 'fish' }
];


function addAnimal(id, name, species, age, favoriteFood) {
    let newAnimal = {
        id: id,
        name: name,
        species: species,
        age: age,
        favoriteFood: favoriteFood
    };

    animals.push(newAnimal);
    return animals;
}

function getAnimals() {
    return animals;
}

function updateAnimal(id, updatedData) {
    let index = animals.findIndex(animals => animals.id === id);

    if (index !== -1) {
        animals[index] = { ...animals[index], ...updatedData };
        return animals[index];
    } else {
        return 'Animal not found';
    }
}

function deleteAnimal(id) {
    let index = animals.findIndex(animals => animals.id === id);

    if (index !== -1) {
        animals.splice(index, 1);
        return animals;
    } else {
        return 'Animal not found';
    }
}