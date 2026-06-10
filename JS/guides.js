//"Learn more" button operates same way as characters page code.
//"Learn more" leads to popula beginner guides
const startBtn = document.querySelector("#start-btn2"); 
const start = document.querySelector(".pop-search");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             
    });
});

//popular searches data array
const popSearch = [
    //Each object holds card information
    {
        title: "How to Start Reading Spider-Man Comics",
        image: "images/guide-images/beginner-spidey.jpg",
        guide: "spider-man"
    },

    {
        title: "How to Start Reading Miles Morales Comics",
        image: "images/guide-images/beginner-miles.jpg",
        guide: "miles-morales"
    },

    {
        title: "How to Start Reading Flash Comics",
        image: "images/guide-images/beginner-flash.jpg",
        guide: "flash-wally"
    },    
];

const popularContainer = document.querySelector("#pop-search-grid");

//creates all guide cards
popSearch.map(char => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
    `
        <div class="card-img guide-card">
            <img src=${char.image} alt="Guide Cover Image">
        </div>
        <h3>${char.title}</h3>
    `;

    popularContainer.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific guide
    card.addEventListener("click", () => {
        const characterCard = document.querySelector(
            `[data-guide="${char.guide}"]`
        );

        // Removes any previous highlighted guide
        document.querySelectorAll(".selected-card").forEach(card => {
            card.classList.remove("selected-card");
        });

        // Highlights the current character guide 
        characterCard.classList.add("selected-card");

        if (characterCard) {
            characterCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

//Main beginner guides data
const guideData = [
    {
        id: "spider-man",                                   //id value allows actual beginner guide to be linked to popular guide cards 
        name: "Spider-Man (Earth-616)",                     //and to be searched for
        tags: "marvel spider-man peter-parker beginner",
        intro: "Spider-Man is Marvel's flagship superhero and one of the most recognizable comic characters ever created. Peter Parker balances everyday life with superhero responsibilities, making him one of the most relatable heroes in comics.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Spider-Man Earth-616 Reading Order (Short):</strong>
                    Spider-Man: Blue → Ultimate Spider-Man → Amazing Spider-Man by J. Michael Straczynski
                </li>
                <li>
                    <strong>Spider-Man Earth-616 Reading Order (Long):</strong>
                    Amazing Fantasy #15 → The Amazing Spider-Man (Stan Lee) → Spider-Man: Blue → Kraven's Last Hunt → Amazing Spider-Man by J. Michael Straczynski
                </li>
            </ul>
        `
    },

    {
        id: "miles-morales",
        name: "Spider-Man (Miles Morales - Earth-1610)",
        tags: "marvel spider-man miles-morales beginner",
        intro: "Miles Morales is the Spider-Man of Marvel's Ultimate Universe. After gaining powers similar to Peter Parker, Miles becomes one of Marvel's most popular modern heroes while forging his own legacy.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Miles Morales Reading Order (Short):</strong>
                    Ultimate Comics: Spider-Man → Spider-Men → Miles Morales: Spider-Man
                </li>
                <li>
                    <strong>Miles Morales Reading Order (Long):</strong>
                    Ultimate Fallout #4 → Ultimate Comics: Spider-Man → Cataclysm → Spider-Men → Miles Morales: Spider-Man
                </li>
            </ul>
        `
    },

    {
        id: "green-lantern",
        name: "Green Lantern (Hal Jordan)",
        tags: "dc green-lantern hal-jordan beginner",
        intro: "Green Lantern is a member of the intergalactic Green Lantern Corps. Armed with a power ring fueled by willpower, Hal Jordan protects countless worlds across the DC Universe.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Green Lantern Reading Order (Short):</strong>
                    Green Lantern: Rebirth → Sinestro Corps War → Blackest Night
                </li>
                <li>
                    <strong>Green Lantern Reading Order (Long):</strong>
                    Green Lantern: Rebirth → Green Lantern by Geoff Johns → Sinestro Corps War → Rage of the Red Lanterns → Blackest Night
                </li>
            </ul>
        `
    },

    {
        id: "nightwing",
        name: "Nightwing",
        tags: "dc nightwing dick-grayson beginner",
        intro: "Formerly the first Robin, Dick Grayson became Nightwing to establish his own identity outside of Batman's shadow. He is one of DC's most respected heroes and leaders.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Nightwing Reading Order (Short):</strong>
                    Nightwing: Year One → Nightwing by Chuck Dixon → Nightwing: Leaping into the Light
                </li>
                <li>
                    <strong>Nightwing Reading Order (Long):</strong>
                    Robin: Year One → Nightwing: Year One → Nightwing by Chuck Dixon → Batman and Robin by Morrison → Nightwing: Leaping into the Light
                </li>
            </ul>
        `
    },

    {
        id: "batman",
        name: "Batman",
        tags: "dc batman bruce-wayne beginner",
        intro: "Batman is Gotham City's Dark Knight and one of DC Comics' most iconic heroes. Using his intellect, detective skills, and advanced technology, Bruce Wayne wages war on crime.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Batman Reading Order (Short):</strong>
                    Batman: Year One → The Long Halloween → Batman: Hush
                </li>
                <li>
                    <strong>Batman Reading Order (Long):</strong>
                    Batman: Year One → The Man Who Laughs → The Long Halloween → Dark Victory → Batman: Hush → Under the Red Hood
                </li>
            </ul>
        `
    },

    {
        id: "dc",
        name: "DC Comics",
        tags: "dc publisher beginner",
        intro: "DC Comics is one of the largest comic publishers in the world and home to heroes such as Superman, Batman, Wonder Woman, and The Flash. Its stories often focus on mythology, legacy, and larger-than-life heroes.",
        readingOrders: `
            <ul>
                <li>
                    <strong>DC Comics Reading Order (Short):</strong>
                    Superman: Birthright → Batman: Year One → Green Lantern: Rebirth
                </li>
                <li>
                    <strong>DC Comics Reading Order (Long):</strong>
                    Superman: Birthright → Batman: Year One → The Long Halloween → Green Lantern: Rebirth → Justice League: Origin → DC Universe Rebirth
                </li>
            </ul>
        `
    },

    {
        id: "marvel",
        name: "Marvel Comics",
        tags: "marvel publisher beginner",
        intro: "Marvel Comics is home to Spider-Man, Iron Man, Captain America, the X-Men, and countless other heroes. Marvel stories are known for their interconnected universe and relatable characters.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Marvel Comics Reading Order (Short):</strong>
                    Spider-Man: Blue → Marvels → Astonishing X-Men
                </li>
                <li>
                    <strong>Marvel Comics Reading Order (Long):</strong>
                    Marvels → Spider-Man: Blue → Astonishing X-Men → Civil War → Planet Hulk → Secret Wars (2015)
                </li>
            </ul>
        `
    },

    {
        id: "flash-wally",
        name: "The Flash (Wally West)",
        tags: "dc flash wally-west beginner",
        intro: "Wally West is the third Flash and one of the fastest beings in the DC Universe. Originally Kid Flash, he eventually succeeded Barry Allen and became the definitive Flash for an entire generation of readers.",
        readingOrders: `
            <ul>
                <li>
                    <strong>Wally West Reading Order (Short):</strong>
                    Born to Run → The Return of Barry Allen → Terminal Velocity
                </li>
                <li>
                    <strong>Wally West Reading Order (Long):</strong>
                    Born to Run → The Return of Barry Allen → Terminal Velocity → Chain Lightning → Blitz
                </li>
            </ul>
        `
    },
];


const guidesContainer = document.querySelector("#container-guides");

//adds guides to main section
guideData.map(guide => {

    const card = document.createElement("div");
    card.classList.add("character-card", "guide-item");
    card.setAttribute("data-guide", guide.id);
    card.setAttribute('data-tags', `${guide.tags}`);

    card.innerHTML = `
        <button class="accordion-toggle" type="button">
            ${guide.name} ▼
        </button>

        <div class="accordion-content">
            <div class="char-intro">
                <h3>Character Introduction:</h3>
                <p>${guide.intro}</p>
            </div>

            <div class="beginner-guide">
                <h3>Beginner Reading Orders:</h3>
                ${guide.readingOrders}
            </div>
        </div>
    `;

    guidesContainer.appendChild(card);   //adds guides to parent container
});

