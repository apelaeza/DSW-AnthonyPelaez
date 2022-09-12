//variables
const CARDS = 5;
let pokemons = [];
let pokemonsNames = [];
let draggablePokemons = document.querySelector('.draggable-pokemons');
let pokemonBox = document.querySelector('.pokemon-box');
let allDraggablePokemons = [];
let allNames = [];
let points = 0;

//Consumo de API Pokemon según la cantidad de tarjetas con las que se vaya a jugar
for (let i = 1; i <= CARDS; i++) {
    let id = getRandomId(248);
    getPokemonById(id);
}

//funciones
function getRandomId(max) {
    return Math.floor(Math.random() * max + 1);
}

async function getPokemonById(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await res.json()
    pokemons.push(data)
    pokemonsNames.push(data.name)

    pokemonsNames = pokemonsNames.sort(() => Math.random() - 0.5)

    draggablePokemons.innerHTML = '';

    pokemons.forEach(pokemon => {

        draggablePokemons.innerHTML += `<div class="pokemon">
        <img draggable="true" src="${pokemon.sprites.other["official-artwork"].front_default}" class="image" id="${pokemon.name}">
        </div>`
    })
    pokemonBox.innerHTML = '';
    pokemonsNames.forEach(name => {
        pokemonBox.innerHTML += `<div class="names">${name}</div>`
    })


    allDraggablePokemons = document.querySelectorAll('.image');
    allDraggablePokemons = [...allDraggablePokemons];
    allDraggablePokemons.forEach(element => {
        element.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text', event.target.id)
        })
    })

    allNames = document.querySelectorAll('.names');
    allNames = [...allNames];
    allNames.forEach(name => {
        name.addEventListener('dragover', event => {
            event.preventDefault()
        })
        name.addEventListener('drop', event => {
            const draggablePokemonData = event.dataTransfer.getData('text');
            let pokemonImagen = document.querySelector(`#${draggablePokemonData}`);
            console.log(event.target.innerHTML);
            console.log(draggablePokemonData);

            if (event.target.innerHTML == draggablePokemonData) {
                points++;
                console.log("yes");
                event.target.innerHTML = '';
                event.target.appendChild(pokemonImagen);

                if(points==CARDS){
                    draggablePokemons.innerHTML = `<p class="win">¡Has Ganado!</p>`
                }
            }else{
                console.log("no");
            }

        })
    });

}




