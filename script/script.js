"use strict";
//TODO: Get rid of repeated functions, condense into one function. Make Animal function. 

//Creating the constructor function for the animal farm
function Animal(animalType) {
  this.animalType = animalType;
}

//Render function for Animals. Able to be used for any animal type.
Animal.prototype.render = function () {
  //Getting the elements, creating them, setting to variables to be used later. 
  let animalDiv = document.createElement('div');
  animalDiv.setAttribute('class',`${this.animalType}Object`);
  animalDiv.textContent = this.animalType;
  
  let makeAnimalButton = document.querySelector(`#${this.animalType}Section`);
  
  //Appending element to webpage
  makeAnimalButton.appendChild(animalDiv);
};

//Setting up the condensed function: 

let catButton = document.getElementById('makeCat');
let dogButton = document.getElementById('makeDog');
let sheepButton = document.getElementById('makeSheep');
let horseButton = document.getElementById('makeHorse');

function makeAnimal(animal){
  let myAnimal = new Animal (animal);

  myAnimal.render();
}

catButton.addEventListener('click', ()=>{
  let theAnimal = 'Cat';

  makeAnimal(theAnimal);
})

dogButton.addEventListener('click', ()=>{
  let theAnimal = 'Dog';

  makeAnimal(theAnimal);
})

sheepButton.addEventListener('click', ()=>{
  let theAnimal = 'Sheep';

  makeAnimal(theAnimal);
})

horseButton.addEventListener('click', ()=>{
  let theAnimal = 'Horse';

  makeAnimal(theAnimal);
})