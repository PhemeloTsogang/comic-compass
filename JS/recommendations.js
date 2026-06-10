const startBtn = document.querySelector("#start-btn1"); 
const start = document.querySelector(".recommendations");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});

//popular stories data used for popular stories section on page
const popStories = [
    {
        title: "Avatar the Last Airbender Comic Reading List",
        image: "../images/recommendation-covers/avatar.jpg",
        recommendation: "atla"                                      // each "recommendation" value  is the corresponding name 
                                                                    // of the attribute associated to the actual recommendation
    },

    {
        title: "Spider-man Earth 616: Symbiote Story Arc (Canon)",
        image: "../images/recommendation-covers/venom.jpg",
        recommendation: "spider-616-venom"
    }
];

const popularContainer = document.querySelector("#pop-story-grid");  //container of popular story cards

//creating all cards 
popStories.map(char => {
    //create all home page character image cards
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
    `
        <div class="card-img guide-card">
            <img src=${char.image} alt="Recommendation Cover Image">
        </div>

        <h3>${char.title}</h3>
    `;

    popularContainer.appendChild(card); //adds all cards to container

    //allows card clicking to scrolll to the specific recommended list
    card.addEventListener("click", () => {
        const characterCard = document.querySelector(
            `[data-rec="${char.recommendation}"]`
        );

        // Removes any previously highlighted recommendation
        document.querySelectorAll(".selected-card").forEach(card => {
            card.classList.remove("selected-card");
        });

        // Highlights the current recommendation
        characterCard.classList.add("selected-card");

        if (characterCard) {
            characterCard.scrollIntoView({    //smooth scroll to to the reading list section from the popular story card
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

//main recommendation lists data
const recommendData = [
    {
        id: "reverse-flash-saga",                                                   //each recommendation order has this id to correspond to the display data attribute
        title: "The Flash (Barry Allen): Reverse Flash Saga",
        titleDescription: "Follow Barry Allen's journey against his greatest rival, the Reverse Flash.",
        tags: "dc flash barry-allen reverse-flash canon long",
        comics: [
            { title: "The Flash #1-12 (New 52)", image: "../images/recommend-lists/flash1.jpg" },
            { title: "The Flash: Rebirth", image: "../images/recommend-lists/flash2.jpg" },
            { title: "The Flash: Running Scared", image: "../images/recommend-lists/flash3.jpg" }
        ]
    },

    {
        id: "court-of-owls",
        title: "Batman: Court of Owls Story Arc Reading Order",
        titleDescription: "Batman uncovers a secret society that has manipulated Gotham City for centuries.",
        tags: "dc batman court-of-owls canon short",
        comics: [
            { title: "Batman: The Court of Owls", image: "../images/recommend-lists/batman_Coo1.jpg" },
            { title: "Batman: Night of the Owls", image: "../images/recommend-lists/batman_Coo2.jpg" },
            { title: "Batman: City of Owls", image: "../images/recommend-lists/batman_Coo3.jpg" }
        ]
    },

    {
        id: "atla",
        title: "Avatar: The Last Airbender Comics Reading Order",
        titleDescription: "Continue Avatar Aang's story after the original animated series.",
        tags: "dark-horse-comics avatar aang canon long",
        comics: [
            { title: "The Promise Omnibus", image: "../images/recommend-lists/atla1.jpg" },
            { title: "The Search Omnibus", image: "../images/recommend-lists/atla2.jpg" },
            { title: "The Rift Omnibus", image: "../images/recommend-lists/atla3.jpg" },
            { title: "Smoke and Shadow Omnibus", image: "../images/recommend-lists/atla4.jpg" },
            { title: "North and South Omnibus", image: "../images/recommend-lists/atla5.jpg" },
            { title: "Imbalance Omnibus", image: "../images/recommend-lists/atla6.jpg" }
        ]
    },

    {
        id: "spider-616-venom",
        title: "Spider-Man Earth-616: Symbiote Saga Reading Order",
        titleDescription: "Watch Peter Parker obtain and eventually lose the alien symbiote that becomes Venom.",
        tags: "marvel spider-man venom symbiote canon long",
        comics: [
            { title: "Marvel Super Heroes Secret Wars", image: "../images/recommend-lists/symbiote1.jpg" },
            { title: "The Amazing Spider-Man #252-259", image: "../images/recommend-lists/symbiote2.jpg" },
            { title: "Spectacular Spider-Man #90-100", image: "../images/recommend-lists/symbiote3.jpg" },
            { title: "Web of Spider-Man #1", image: "../images/recommend-lists/symbiote4.jpg" }
        ]
    },

    {
        id: "indie-starter",
        title: "Fan-Favourite Indie Comics Reading List",
        titleDescription: "A collection of some of the most beloved creator-owned comics outside Marvel and DC.",
        tags: "image-comics indie starter short",
        comics: [
            { title: "Invincible Volume 1", image: "../images/recommend-lists/indie1.jpg" },
            { title: "Saga Volume 1", image: "../images/recommend-lists/indie2.jpg" },
            { title: "Radiant Black Volume 1", image: "../images/recommend-lists/indie3.jpg" },
            { title: "Something is Killing the Children Volume 1", image: "../images/recommend-lists/indie4.jpg" },
            { title: "Black Science Volume 1", image: "../images/recommend-lists/indie5.jpg" }
        ]
    },

    {
        id: "darth-vader",
        title: "Star Wars: Darth Vader Reading Order (Canon)",
        titleDescription: "Follow Darth Vader's journey between Revenge of the Sith and A New Hope.",
        tags: "star-wars darth-vader canon long",
        comics: [
            { title: "Darth Vader (2015)", image: "../images/recommend-lists/vader1.jpg" },
            { title: "Darth Vader Annual #1", image: "../images/recommend-lists/vader2.jpg" },
            { title: "Darth Vader: Dark Lord of the Sith", image: "../images/recommend-lists/vader3.jpg" },
            { title: "Darth Vader (2020)", image: "../images/recommend-lists/vader4.jpg" }
        ]
    },

    {
        id: "dark-phoenix-saga",
        title: "X-Men: Dark Phoenix Saga Reading Order (Canon)",
        titleDescription: "Experience one of the most influential X-Men stories ever published.",
        tags: "marvel x-men dark-phoenix canon short",
        comics: [
            { title: "X-Men #129-137", image: "../images/recommend-lists/x-men1.jpg" }
        ]
    },

    {
        id: "civil-war",
        title: "Marvel Civil War Reading Order",
        titleDescription: "Marvel's heroes are divided over superhero registration in one of the publisher's biggest events.",
        tags: "marvel civil-war canon long",
        comics: [
            { title: "Civil War #1-7", image: "../images/recommend-lists/civil-war.jpg" }
        ]
    },

    {
        id: "ultimate-spider-man",
        title: "Ultimate Spider-Man Reading Order",
        titleDescription: "A modern retelling of Spider-Man's origin and career set in Marvel's Ultimate Universe.",
        tags: "marvel spider-man miles-morales ultimate non-canon long",
        comics: [
            { title: "Ultimate Spider-Man Omnibus Vol. 1", image: "../images/recommend-lists/ult-spidey1.jpg" },
            { title: "Ultimate Spider-Man Omnibus Vol. 2", image: "../images/recommend-lists/ult-spidey2.jpg" },
            { title: "Ultimate Spider-Man Omnibus Vol. 3", image: "../images/recommend-lists/ult-spidey3.jpg" },
            { title: "Ultimate Spider-Man Omnibus Vol. 4", image: "../images/recommend-lists/ult-spidey4.jpg" },
            { title: "Ultimate Spider-Man: Death of Spider-Man", image: "../images/recommend-lists/ult-spidey5.jpg" },
            { title: "Ultimate Comics: Spider-Man Vol. 1", image: "../images/recommend-lists/ult-spidey6.jpg" }
        ]
    },

    {
        id: "venom-solo",
        title: "Venom Solo Reading Order",
        titleDescription: "Follow Eddie Brock's journey from Spider-Man villain to anti-hero.",
        tags: "marvel venom eddie-brock canon long",
        comics: [
            { title: "Venom: Lethal Protector", image: "../images/recommend-lists/venom1.jpg" },
            { title: "Venom: Separation Anxiety", image: "../images/recommend-lists/venom2.jpg" },
            { title: "Venom by Rick Remender", image: "../images/recommend-lists/venom3.jpg" },
            { title: "Venom by Donny Cates", image: "../images/recommend-lists/venom4.jpg" },
            { title: "King in Black", image: "../images/recommend-lists/venom5.jpg" }
        ]
    },    
];

//adds all recommendations to the main section container
const recommendContainer = document.querySelector("#container-rec");

recommendData.map(rec => {

    const card = document.createElement("div");
    card.classList.add("character-card", "recommended-list");
    card.setAttribute("data-rec", rec.id);
    card.setAttribute('data-tags', `${rec.tags}`);

    let comicsHTML = "";

    rec.comics.map((comic, index) => {

        comicsHTML += `
            <div class="card">
                <div class="card-img guide-card">
                    <img src=${comic.image} alt="Recommendation Cover Image">
                </div>

                ${comic.title}
            </div>
        `;

        if (index < rec.comics.length - 1) {                  //ensures that my arrows arent created for the last comic in 
                                                              //the list/order
            comicsHTML += `
                <div class="reading-arrow"></div>
            `;
        }
    });

    //actual recommendation structure that adds the accordion feature to the reading list title so it can expand and collapse
    card.innerHTML = `

        <button class="accordion-toggle" type="button">
            <div class="recommendation-title">
                ${rec.title} ▼

                <div class="recommendation-note">
                    ${rec.titleDescription}
                </div>
            </div>
        </button>

        <div class="accordion-content">
            <div class="card-grid">
                ${comicsHTML}
            </div>
        </div>
    `;

    recommendContainer.appendChild(card);
});

//same thing as all other page js files
//seearches the values passed ind the page and uses that to find match cards and guides to allow scrolling from one connected card 
//to the relevant reading order 
const params = new URLSearchParams(window.location.search);
const selectedRec = params.get("recommendation");

if (selectedRec) {
    const selectedRecCard =
        document.querySelector(`[data-rec="${selectedRec}"]`);

    if (selectedRecCard) {
        selectedRecCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        selectedRecCard.classList.add("selected-card");
    }
}