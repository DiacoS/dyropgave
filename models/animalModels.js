class AnimalModel {
    // Private fields
    #id;
    #name;
    #species;
    #age;
    #favoriteFood;

    constructor(id, name, species, age, favoriteFood) {
        this.#id = id;
        this.#name = name;
        this.#species = species;
        this.#age = age;
        this.#favoriteFood = favoriteFood;
    }

    // Getter methods to access private fields
    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getSpecies() {
        return this.#species;
    }

    getAge() {
        return this.#age;
    }

    getFavoriteFood() {
        return this.#favoriteFood;
    }

    // Setter methods to modify private fields
    setName(newName) {
        this.#name = newName;
    }

    setSpecies(newSpecies) {
        this.#species = newSpecies;
    }

    setAge(newAge) {
        this.#age = newAge;
    }

    setFavoriteFood(newFavoriteFood) {
        this.#favoriteFood = newFavoriteFood;
    }

}

function saveAnimalData(){
    const animalsJSON = JSON.stringify(animals);
    localStorage.setItem('animals', animalsJSON);
    return 'Animal data saved successfully!';
}