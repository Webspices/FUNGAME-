const characters = [
    {
        name: "Mrs. Incredible",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mn1qdzjsqmXEFsCsKIbWl9xO9nuMlYTnHA&s"
    },
    {
        name: "Gwen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfitA3-85l9IP_YzJd-198kBIGVHFP9ameA&s"
    },
    {
        name: "Aunt Cass",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd51OHsAdwia9hXydk_tLF2Q3CFlMLXNglog&s"
    },
    {
        name: "Kim possible",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj5MmrpDK4yNuNpJfmfcKD2ILa_k49jUtgg&s"
    },
    {
        name: "Raven",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNdY2BT9YfDXy9AU1LYfG7kJjNTnnrmsbgQ&s"
    },
    {
        name: "Go go Tomago",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVmluTaSyY460du763UYRtog_qWMry7aVoA&s"
    },
    {
        name: "Jessica Rabbit",
        image: "https://imgix.ranker.com/list_img_v2/11147/311147/original/the-hottest-cartoon-characters-of-all-time-u2?w=817&h=427&fm=jpg&q=50&fit=crop"
    },
    {
        name: "Kai Green",
        image: "https://i.pinimg.com/474x/2c/55/c9/2c55c9e990c93769c897b7ecb59b1383.jpg"
    },
    {
        name: "Charm caster ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvmMXekXO00I-gRL8_pltph-hdoM-oNKDkQ&s"
    }
];

let currentCharacterIndex = 0;
const resultElement = document.getElementById('result');
const characterImage = document.getElementById('character-image');

function displayCharacter() {
    const character = characters[currentCharacterIndex];
    characterImage.src = character.image;
    resultElement.textContent = '';
}

function smash() {
    resultElement.textContent = `You chose ${characters[currentCharacterIndex].name} nice choice i guess!`;
    nextCharacter();
}

function pass() {
    resultElement.textContent = `Why do you pass on ${characters[currentCharacterIndex].name}!`;
    nextCharacter();
}

function nextCharacter() {
    currentCharacterIndex++;
    if (currentCharacterIndex < characters.length) {
        setTimeout(displayCharacter, 1000);
    } else {
        resultElement.textContent = "You've gone through all the characters!";
    }
}

document.addEventListener("DOMContentLoaded", displayCharacter);
