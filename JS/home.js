//"Start Here" button click auto-scrolls to "Where to Start" Section
const startBtn = document.querySelector("#start-btn1"); //selecting start button html element
const start = document.querySelector(".start-here");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});

//Home page website links redirect to respective page
const goGuides = document.querySelector(".guides-link");
const goCharacters = document.querySelector(".chars-link"); //selecting start button html element
const goRecommendations = document.querySelector(".recommend-link");
const goGlossary = document.querySelector(".glossary-link");

const links = [goGuides, goCharacters, goRecommendations, goGlossary]; //container of all links

links.map(link => {                                             //every link in array allows click to respective page
    link.addEventListener("click", () => {
        window.location.href = `../${link.dataset.link}.html`;  //uses html data attribute value to acquire name of page
    });
});

//Array for Home page guide cards
const guideCards = [
    //Each object holds card information
    {
        title: "How to Start Reading Spider-Man Comics",
        image: "../images/guide-images/Beginner-spidey.jpg",
        guide: "spider-man"
    },

    {
        title: "How to Start Reading Batman Comics",
        image: "../images/guide-images/batsy.png",
        guide: "batman"
    },

    {
        title: "How to Start Reading DC Comics",
        image: "../images/guide-images/dc.avif",
        guide: "dc"
    }
];

const guideCardGrid = document.querySelector(".start-grid"); //selects entire container of guide cards on home page

//dynamically creates guide cards with relevant information
guideCards.map(guide => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
    `
        <div class="card-img guide-card">
            <img src=${guide.image} alt="Guide Cover Image">
        </div>
        <h3>${guide.title}</h3>
    `;

    guideCardGrid.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific guide on beginner guides page
    card.addEventListener("click", () => {
        window.location.href = `guides.html?guide=${guide.guide}`; //template literal leading to relevant guides page location
    });
});

//Array for Home page recommendation cards
const recommendCards = [
    {
        title: "Fan Favourite Indie Comic Reading List",
        image: "../images/recommendation-covers/radiant-black.jpg",
        recommendation: "indie"
    },

    {
        title: "Batman: Court of Owls Story Arc Reading Order",
        image: "../images/recommendation-covers/batman-CoO.jpg",
        recommendation: "batman"
    }
];

const recommendCardGrid = document.querySelector(".recommended-grid");

recommendCards.map(rec => {
    //create all home page recommendation cards
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
    `
        <div class="card-img reading">
            <img src=${rec.image} alt="Recommendation Cover Image">
        </div>
        <h3>${rec.title}</h3>
    `;

    recommendCardGrid.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific recommended list
    card.addEventListener("click", () => {
        window.location.href = `recommendations.html?recommendation=${rec.recommendation}`; 
    });
});

//Array for Home page character cards
const characterCards = [
    {
        image: "../images/character-faces/peterParker.jpg",
        character: "spider-man-peter",
        tooltip: "Learn more about The Amazing Spider-Man"
    },

    {
        image: "../images/character-faces/superman.avif",
        character: "superman",
        tooltip: "Learn more about The Man of Steel"
    },

    {
        image: "../images/character-faces/barryAllen.jpg",
        character: "flash-barry",
        tooltip: "Learn more about The Scarlet Speedster"
    },

    {
        image: "../images/character-faces/milesMorales.jpg",
        character: "spider-man-miles",
        tooltip: "Learn more about Spider-man: Miles Morales"
    },
];

const charCardGrid = document.querySelector(".character-grid");

characterCards.map(char => {
    //create all home page character image cards
    const card = document.createElement("div");
    card.classList.add("card", "character-preview");

    card.innerHTML =
    `
        <div class="card-img" id="char-card">
            <img src=${char.image} alt="Character Face Image">
        </div>

        <div class="character-tooltip">
            <p>${char.tooltip}</p>
        </div>
    `;

    charCardGrid.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific recommended list
    card.addEventListener("click", () => {
        window.location.href = `characters.html?character=${char.character}`; 
    });
});