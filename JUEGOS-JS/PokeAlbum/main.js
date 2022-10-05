let totalPokemons = 50;
let pokemonPerPage = 10;
let totalPages = totalPokemons / pokemonPerPage;

let pokemons = [];
let cardsContainer = document.querySelector('.cards-container');
let actualPagePokemons = [];
let actualPage = 1;
let selectedPokemons;
selectedPokemons = localStorage.getItem('selectedPokemons');

if(selectedPokemons != null){
selectedPokemons = selectedPokemons.split(',').map(x => parseInt(x))
}else{
    selectedPokemons = [];
}


// Pokemon Class
class CardPokemon {
    constructor(id, name, img, hp, attack, defense, speed) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }
}

for (let i = 1; i <= totalPokemons; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(data => {

            let id = data.id;
            let name = data.name;
            let img = data.sprites.other['official-artwork'].front_default;
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let speed = data.stats[5].base_stat;

            let newPokemon = new CardPokemon(id, name, img, hp, attack, defense, speed)
            pokemons.push(newPokemon)

            if (pokemons.length == totalPokemons) {

                pokemons.sort(function (a, b) { return a.id - b.id; }) //Se orden los pokemons por ID

                actualPagePokemons = selectPokemonsCurrentPage(pokemons, actualPage);
                drawPokemons(actualPagePokemons);
                updatePageCounter(actualPage, totalPages);
                updatePokeCounter(selectedPokemons, totalPokemons)

                //Cambio de pagina
                const nextButton = document.querySelector('.next');
                const previusButton = document.querySelector('.previus');

                nextButton.addEventListener('click', () => {
                    if (actualPage == totalPages) {
                        actualPage = 1;
                    } else {
                        actualPage++;
                    }
                    actualPagePokemons = selectPokemonsCurrentPage(pokemons, actualPage);
                    drawPokemons(actualPagePokemons);
                    updatePageCounter(actualPage, totalPages);
                });

                previusButton.addEventListener('click', () => {
                    if (actualPage == 1) {
                        actualPage = totalPages;
                    } else {
                        actualPage--;
                    }

                    actualPagePokemons = selectPokemonsCurrentPage(pokemons, actualPage);
                    drawPokemons(actualPagePokemons);
                    updatePageCounter(actualPage, totalPages);
                });
            }
        })
}

function drawPokemons(pokemonsArray) {
    cardsContainer.innerHTML = '';
    pokemonsArray.forEach(pokemon => {
        let activeClass = '';
        if (selectedPokemons.includes(pokemon.id)) {
            activeClass = 'selected';
        }
        cardsContainer.innerHTML += `<div class="card ${activeClass}" id="${pokemon.id}">
        <span id="id">${pokemon.id}</span>
        <span id="name">${pokemon.name}</span>
        <div id="circle"></div>
        <img class="pokemon-img" src="${pokemon.img}" alt="">

        <div class="stats-container">
            <div class="stat-hp">
                <img src="./img/hp.png" alt="">
                <progress min="0" max="200" value="${pokemon.hp}"></progress>
                <span id="value">${pokemon.hp}</span>
            </div>
            <div class="stat-attack">
                <img src="./img/attack.png" alt="">
                <progress min="0" max="200" value="${pokemon.attack}"></progress>
                <span id="value">${pokemon.attack}</span>
            </div>
            <div class="stat-defense">
                <img src="./img/defense.png" alt="">
                <progress min="0" max="200" value="${pokemon.defense}"></progress>
                <span id="value">${pokemon.defense}</span>
            </div>
            <div class="stat-speed">
                <img src="./img/speed.png" alt="">
                <progress min="0" max="200" value="${pokemon.speed}"></progress>
                <span id="value">${pokemon.speed}</span>
            </div>
        </div>
    </div>`
    });
    clickingCard();
}

function selectPokemonsCurrentPage(pokemonsArray, page) {
    return actualPagePokemons = pokemonsArray.slice(page * 10 - 10, page * 10);
}

function updatePageCounter(actualPage, totalPages) {
    totalPages < 1 ? totalPages = 1 : totalPages;
    document.querySelector('.page-number-container').innerHTML = `<p> ${actualPage} / ${totalPages}`;
}

function clickingCard() {
    let cards = document.querySelectorAll('.card');
    cards = [...cards];
    cards.forEach(card => {
        card.addEventListener('click', event =>{
            card.classList.toggle('selected');
            if (selectedPokemons.includes(parseInt(card.id))) {
                selectedPokemons = selectedPokemons.filter(x => x != parseInt(card.id))
                updatePokeCounter(selectedPokemons, totalPokemons)
            } else {
                selectedPokemons.push(parseInt(card.id));
                updatePokeCounter(selectedPokemons, totalPokemons)
            }
        })
    })
}

function updatePokeCounter(selectedPokemons, totalPokemons) {
    document.getElementById('poke-counter').innerHTML = `${selectedPokemons.length} / ${totalPokemons}`;
    if(selectedPokemons.length != 0){
        localStorage.setItem('selectedPokemons', selectedPokemons);
    }else{
        localStorage.clear();
    }
    
}