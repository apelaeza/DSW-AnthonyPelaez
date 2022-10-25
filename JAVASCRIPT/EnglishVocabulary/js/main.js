$(document).ready(function () {
    let id = Number(localStorage.getItem('id'));
    console.log(id);
    id >= 185 ? getVocabulary(id) : getVocabulary(id + 1);
});

//Pixabay
let apiPixabay = 'https://pixabay.com/api/';
let apiKeyPixabay = '30395055-ba5516191b1c7acd73ab2c984';
let num = 10;
let safesearch = true;

//Google
let apiKey = 'AIzaSyB1jiwmXzdBrgKrJqGOyPkzvOqpmPMXWL0'; //Google Custom Search API
let apiSearchGoogle = 'https://www.googleapis.com/customsearch/v1';
let cx = 'c0eda940718aa47b7'
let google = false;

let apiDictionary = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let word = "";

let numImages = 10;
let pronunciation;
let phonetics = ''

function getDefinitions(word) {
    $.ajax({
        url: apiDictionary + word
    }).done(function (response) {

        let html = '';
        let phonetics = response[0].phonetics;
        let phoneticsText = '';

        console.log(response); //Es posible que el fonética no siempre venga. Entonces es necesario dejar el espacio en blanco y el audio de Google.        

        let phoneticsIndex;
        phoneticsIndex = phonetics.findIndex(e => {
            return e.text != null
        });

        console.log("fonetic indice:  " + phoneticsIndex);

        phonetics.length > 0 ? phoneticsText = phonetics[phoneticsIndex].text : phoneticsText = ''

        if (phonetics.length > 0) {
            phonetics[0].audio != '' ? pronunciation = new Audio(phonetics[0].audio) : pronunciation = '';

        }
        else {
            pronunciation = '';
        }
        $(".card-subtitle").html(`${phoneticsText} <span onclick="listenPronunciation()"><img src="./images/iconoAudio.png" alt="audio">`);

        listenPronunciation();

        let responseIndex = 0

        //Determinar la respuesta que contiene las definiciones de los adjetivos        

        for (let i = 0; i < response.length; i++) {
            console.log("aparezco")

            let indexMeanings = response[i].meanings.findIndex(e => {
                return e.partOfSpeech == "adjective"
            })

            console.log("cada uno: " + indexMeanings)

            if (indexMeanings > -1) {
                console.log("para en el indice: " + i)
                responseIndex = i
                break
            }
            console.log("men: " + indexMeanings + " response index: " + i)
        }


        console.log("response index: " + responseIndex)

        let definitions = response[responseIndex].meanings;

        let adjectiveIndex = 0;
        adjectiveIndex = definitions.findIndex(e => {
            return e.partOfSpeech == 'adjective'
        });

        console.log(adjectiveIndex);

        if (adjectiveIndex > -1) {
            let meanings = response[responseIndex].meanings[adjectiveIndex].definitions;

            if (meanings.length > 5) { meanings.length = 5 }

            meanings.forEach(element => {
                html += `<li class="list-group-item">${element.definition}</li>`
            }
            )
        } else {
            html = "There is no definition as an adjective"
        }
        $(".definitions").html(html);
    });

}

function getImagesGoogle(word) {
    $.ajax({
        url: `${apiSearchGoogle}?key=${apiKey}&cx=${cx}&searchType=image&num=${numImages}&q=${word}`
    }).done(function (response) {

        let images = response.items;
        let html = '';

        html += `<div class="carousel-item active">
                    <img src="${images[9].image.thumbnailLink}" class="d-block w-100" alt="...">            
                    </div>`
        //Modifica el DOM agregando el html generado
        $(".imagesCarousel").html(html);


        images.forEach(element => {
            html += `<div class="carousel-item" >
                    <img src="${element.image.thumbnailLink}" class="d-block w-100" alt="...">            
                    </div>`
        });
        //Modifica el DOM agregando el html generado
        $(".imagesCarousel").html(html);
    });
}

function getImagesPixabay(word) {
    $.ajax({
        url: `${apiPixabay}?key=${apiKeyPixabay}&per_page=${num}&safesearch=${safesearch}&q=${word}`
    }).done(function (response) {

        console.log(response);

        let images = response.hits;
        if (images.length > 0) {
            let html = '';
            // html += `<div class="carousel-item active">
            //             <img src="${images[0].webformatURL}" class="d-block w-100" alt="...">            
            //             </div>`
            //Modifica el DOM agregando el html generado
            $(".imagesCarousel").html(html);
            images.forEach((element, index) => {

                html += `<div class="carousel-item item${index}" >
                        <img src="${element.webformatURL}" class="w-100" alt="...">            
                        </div>`
            });
            //Modifica el DOM agregando el html generado
            $(".imagesCarousel").html(html);
        } else {
            $(".imagesCarousel").html('');
        }

        $(".item0").addClass('active');

    });
}

function listenPronunciation() {

    if (pronunciation != '') {
        pronunciation.play();
    }
    else {
        let text = document.querySelector(".card-title").innerHTML
        console.log(text);

        const speechSynthesis = (new SpeechSynthesisUtterance(text));
        speechSynthesis.lang = "en";
        speechSynthesis.rate = 0.8;
        window.speechSynthesis.speak(speechSynthesis);
    }


}

function getVocabulary(id) {
    localStorage.setItem('id', id);
    let html = '';
    let word = '';

    $.ajax({
        url: "http://127.0.0.1:5500/JAVASCRIPT/EnglishVocabulary/vocabulary.json"
    }).done(function (response) {

        //Guarda el resultado en variables
        let words = response.vocabulary;

        word = words[id].word

        document.querySelector(".card-title").innerHTML;
        $(".card-title").html(word);

        getDefinitions(word);
        console.log("word: " + word);

        if (google) {
            getImages(word);
        } else {
            getImagesPixabay(word);
        }



    });


}

function play(id) {
    console.log(id);
    text = document.getElementById("text" + id).innerHTML
    console.log(text);

    const speechSynthesis = (new SpeechSynthesisUtterance(text));
    speechSynthesis.lang = "en";
    speechSynthesis.rate = 0.8;
    window.speechSynthesis.speak(speechSynthesis);

}

function nextWord() {
    let id = Number(localStorage.getItem('id'));
    console.log(id);
    id >= 185 ? getVocabulary(0) : getVocabulary(id + 1);

}



