//"Learn More" button click auto-scrolls to first main interactive section of page
const startBtn = document.querySelector("#start-btn1"); 
const start = document.querySelector(".popular-chars");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //smooth scroll towards that section
    });
});

//array of popular character objects with all their information and tooltip information when hovered on
const popChars = [
    {
        image: "../images/character-faces/peterParker.jpg",
        character: "spider-man-peter",
        name: "Spider-Man",
        tooltip: "Peter Parker (Earth-616)"
    },

    {
        image: "../images/character-faces/superman.avif",
        character: "superman",
        name: "Superman",
        tooltip: "Clark Kent"
    },

    {
        image: "../images/character-faces/barryAllen.jpg",
        character: "flash-barry",
        name: "The Flash",
        tooltip: "Barry Allen"
    },

    {
        image: "../images/character-faces/milesMorales.jpg",
        character: "spider-man-miles",
        name: "Spider-Man",
        tooltip: "Miles Morales (Earth-1610)"
    },

    {
        image: "../images/character-faces/Joker.jpg",
        character: "joker",
        name: "The Joker",
        tooltip: ""
    },

    {
        image: "../images/character-faces/Invincible.jpg",
        character: "invincible",
        name: "Invincible",
        tooltip: ""
    },

    {
        image: "../images/character-faces/black_panther.jpg",
        character: "black-panther",
        name: "Black Panther",
        tooltip: "T'Challa"
    },

    {
        image: "../images/character-faces/Diana.jpg",
        character: "wonder-woman",
        name: "Wonder Woman",
        tooltip: "Diana of Themyscira"
    },
];

const popularContainer = document.querySelector("#pop-char-grid"); //container of all charcater images

//map apply functionality to all charcter image cards
popChars.map(char => {
    //creates all home page character image cards
    const card = document.createElement("div");
    card.classList.add("card", "character-preview");  //adds two classes for universal character card styling
                                                      //"character-preview" allows for tooltip to be displayed when hovered

    //card image structure
    card.innerHTML =
    `
        <div class="card-img" id="char-card">
            <img src=${char.image} alt="Character Face Image">
        </div>

        <div class="character-tooltip">
            <strong>${char.name}</strong>
            <p>${char.tooltip}</p>
        </div>
    `;

    popularContainer.appendChild(card); //adds all cards to container

    //allows card clicking to redirect to corresponding character description
    card.addEventListener("click", () => {
        const characterCard = document.querySelector(
            `[data-char="${char.character}"]`                       //data-char of card is same as value of "character" in the data set
                                                                    //therefore card and charcater descr linked
        );

        // Removes any previous highlight character identification
        document.querySelectorAll(".selected-card").forEach(card => {
            card.classList.remove("selected-card");
        });

        // Highlights the current character 
        characterCard.classList.add("selected-card");

        if (characterCard) {
            characterCard.scrollIntoView({            //scrolls to corresponding character description
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

//character data and descriptions for main character identification section
const characterData = [
    {
        id: "spider-man-peter",
        name: "Spider-Man",
        tags: "marvel spider-man peter-parker superheroes",
        identity: `
            <p>Full Identity: Peter Benjamin Parker</p>
            <p>Power Source: Radioactive spider bite</p>
            <p>Strength Level: Superhuman strength, agility, speed, and reflexes</p>
            <p>Spider-Sense: Danger detection before threats happen</p>
            <p>Wall-Crawling: Can cling to walls and surfaces</p>
            <p>Web-Shooters: Mechanical web devices created by Peter Parker
        `,
        universes: `
            <p>Earth-616: Main Marvel continuity for Peter Parker.</p>
            <p>Ultimate Universe: A modernised alternate version of Spider-Man.
        `,
        stories: `
            <ul>
                <li>Spider-Man: Blue</li>
                <li>Kraven's Last Hunt</li>
                <li>Ultimate Spider-Man</li>
            </ul>
        `
    },

    {
        id: "spider-man-miles",
        name: "Spider-Man",
        tags: "marvel spider-man miles-morales superheroes",
        identity: `
            <p>Full Identity: Miles Morales</p>
            <p>Power Source: Genetically altered spider bite</p>
            <p>Abilities: Strength, agility, wall-crawling, and spider-sense</p>
            <p>Venom Blast: Bio-electric shock ability</p>
            <p>Camouflage: Can briefly turn invisible
        `,
        universes: `
            <p>Ultimate Universe: Miles originally comes from Earth-1610.</p>
            <p>Earth-616: Miles later becomes part of the main Marvel universe.
        `,
        stories: `
            <ul>
                <li>Ultimate Comics Spider-Man</li>
                <li>Miles Morales: Spider-Man</li>
                <li>Spider-Verse</li>
            </ul>
        `
    },

    {
        id: "flash-barry",
        name: "The Flash",
        tags: "dc flash barry-allen speedster superheroes",
        identity: `
            <p>Full Identity: Barry Allen</p>
            <p>Power Source: Speed Force</p>
            <p>Abilities: Super speed, rapid healing, vibration, time travel, and enhanced reflexes</p>
            <p>Role: Forensic scientist and one of DC's main speedster heroes
        `,
        universes: `
            <p>Pre-Crisis: Classic Barry Allen continuity.</p>
            <p>Post-Crisis / Rebirth: Modern versions of Barry and the Speed Force mythology.
        `,
        stories: `
            <ul>
                <li>The Flash: Rebirth</li>
                <li>Flashpoint</li>
                <li>The Flash by Mark Waid</li>
            </ul>
        `
    },

    {
        id: "superman",
        name: "Superman",
        tags: "dc superman clark-kent superheroes",
        identity: `
            <p>Full Identity: Clark Kent / Kal-El</p>
            <p>Power Source: Earth's yellow sun</p>
            <p>Abilities: Super strength, flight, heat vision, freeze breath, x-ray vision, and near invulnerability</p>
            <p>Role: A symbol of hope, morality, and heroism
        `,
        universes: `
            <p>Earth-One / Earth-Prime: Major versions of Superman across DC continuity.</p>
            <p>New 52 / Rebirth: Modern continuity updates and reboots.
        `,
        stories: `
            <ul>
                <li>All-Star Superman</li>
                <li>Superman: Birthright</li>
                <li>Superman: For All Seasons</li>
            </ul>
        `
    },

    {
        id: "batman",
        name: "Batman",
        tags: "dc batman bruce-wayne superheroes",
        identity: `
            <p>Full Identity: Bruce Wayne</p>
            <p>Power Source: Peak human training, wealth, and technology</p>
            <p>Combat Skills: Master martial artist and detective</p>
            <p>Equipment: Utility belt, Batmobile, advanced gadgets</p>
            <p>Intellect: One of DC's greatest strategists and investigators
        `,
        universes: `
            <p>Post-Crisis: Definitive modern Batman continuity.</p>
            <p>New 52: DC's 2011 reboot featuring a younger Batman.</p>
            <p>Rebirth: Restoration of much of Batman's classic history.
        `,
        stories: `
            <ul>
                <li>Batman: Year One</li>
                <li>The Long Halloween</li>
                <li>Batman: Hush</li>
            </ul>
        `
    },

    {
        id: "wonder-woman",
        name: "Wonder Woman",
        tags: "dc wonder-woman diana-prince superheroes",
        identity: `
            <p>Full Identity: Diana of Themyscira</p>
            <p>Power Source: Amazonian heritage and divine blessings</p>
            <p>Strength Level: Among DC's strongest heroes</p>
            <p>Equipment: Lasso of Truth, Bracelets of Submission, Sword and Shield</p>
            <p>Role: Warrior, diplomat, and founding Justice League member
        `,
        universes: `
            <p>Post-Crisis: Modern origin rooted in Greek mythology.</p>
            <p>New 52: Reimagined as the daughter of Zeus.</p>
            <p>Rebirth: Combines classic and modern elements of Diana's history.
        `,
        stories: `
            <ul>
                <li>The Hiketeia</li>
                <li>Wonder Woman: Year One</li>
                <li>Gods and Mortals</li>
            </ul>
        `
    },

    {
        id: "black-panther",
        name: "Black Panther",
        tags: "marvel black-panther tchalla superheroes",
        identity: `
            <p>Full Identity: T'Challa</p>
            <p>Power Source: Heart-Shaped Herb and Wakandan training</p>
            <p>Role: King of Wakanda and protector of the nation</p>
            <p>Equipment: Vibranium suit and advanced Wakandan technology</p>
            <p>Intellect: One of Marvel's greatest scientific minds
        `,
        universes: `
            <p>Earth-616: Main Marvel continuity for T'Challa.</p>
            <p>Ultimate Universe: Alternate modern interpretation of Black Panther.
        `,
        stories: `
            <ul>
                <li>Who Is the Black Panther?</li>
                <li>A Nation Under Our Feet</li>
                <li>Panther's Rage</li>
            </ul>
        `
    },

    {
        id: "green-lantern-hal",
        name: "Green Lantern",
        tags: "dc green-lantern hal-jordan superheroes",
        identity: `
            <p>Full Identity: Hal Jordan</p>
            <p>Power Source: Green Lantern Power Ring</p>
            <p>Abilities: Energy constructs limited only by willpower</p>
            <p>Affiliation: Green Lantern Corps</p>
            <p>Role: Intergalactic law enforcement officer
        `,
        universes: `
            <p>Post-Crisis: Core Green Lantern continuity.</p>
            <p>New 52: Continuation of Geoff Johns' Lantern mythology.</p>
            <p>Rebirth: Restoration of Hal Jordan's heroic legacy.
        `,
        stories: `
            <ul>
                <li>Green Lantern: Rebirth</li>
                <li>Sinestro Corps War</li>
                <li>Blackest Night</li>
            </ul>
        `
    },

    {
        id: "iron-man",
        name: "Iron Man",
        tags: "marvel iron-man tony-stark superheroes",
        identity: `
            <p>Full Identity: Anthony Edward Stark</p>
            <p>Power Source: Advanced powered armor suits</p>
            <p>Intellect: Genius inventor and engineer</p>
            <p>Equipment: Various Iron Man armors with specialized functions</p>
            <p>Role: Industrialist, Avenger, and technological innovator
        `,
        universes: `
            <p>Earth-616: Main Marvel continuity.</p>
            <p>Ultimate Universe: Alternate modern interpretation of Tony Stark.
        `,
        stories: `
            <ul>
                <li>Extremis</li>
                <li>Demon in a Bottle</li>
                <li>Armor Wars</li>
            </ul>
        `
    },

    {
        id: "flash-wally",
        name: "The Flash",
        tags: "dc flash wally-west superheroes",
        identity: `
            <p>Full Identity: Wally West</p>
            <p>Power Source: Connection to the Speed Force</p>
            <p>Speed Level: One of the fastest beings in DC Comics</p>
            <p>Abilities: Time travel, phasing, and speed constructs</p>
            <p>Legacy: Former Kid Flash and successor to Barry Allen
        `,
        universes: `
            <p>Post-Crisis: Wally's defining era as the primary Flash.</p>
            <p>Rebirth: Reintroduced as a central part of DC continuity.
        `,
        stories: `
            <ul>
                <li>The Return of Barry Allen</li>
                <li>Terminal Velocity</li>
                <li>Blitz</li>
            </ul>
        `
    },

    {
        id: "invincible",
        name: "Invincible",
        tags: "image-comics invincible mark-grayson superheroes",
        identity: `
            <p>Full Identity: Mark Grayson</p>
            <p>Power Source: Viltrumite heritage</p>
            <p>Abilities: Flight, super strength, durability, and healing</p>
            <p>Affiliation: Guardians of the Globe</p>
            <p>Role: Earth's protector and heir to the Viltrumite legacy
        `,
        universes: `
            <p>Invincible Universe: Shared superhero universe created by Robert Kirkman.
        `,
        stories: `
            <ul>
                <li>Invincible Volume 1: Family Matters</li>
                <li>The Viltrumite War</li>
                <li>The Death of Everyone</li>
            </ul>
        `
    },

    {
        id: "radiant-black",
        name: "Radiant Black",
        tags: "image-comics radiant-black nathan-burnett superheroes",
        identity: `
            <p>Full Identity: Nathan Burnett</p>
            <p>Power Source: The Radiant cosmic entity</p>
            <p>Abilities: Flight, gravity manipulation, energy projection</p>
            <p>Affiliation: Massive-Verse heroes</p>
            <p>Role: Chicago-based superhero balancing ordinary life and cosmic responsibility
        `,
        universes: `
            <p>Massive-Verse: Shared superhero universe published by Image Comics.
        `,
        stories: `
            <ul>
                <li>Radiant Black Volume 1</li>
                <li>Catalyst War</li>
                <li>Radiant Black Volume 3</li>
            </ul>
        `
    },

    {
        id: "joker",
        name: "The Joker",
        tags: "dc joker villians batman",
        identity: `
            <p>Full Identity: Unknown</p>
            <p>Role: Batman's greatest enemy</p>
            <p>Abilities: Criminal genius, manipulation, unpredictability</p>
            <p>Weapons: Joker toxin, traps, and psychological warfare</p>
            <p>Threat Level: One of DC's most dangerous villains
        `,
        universes: `
            <p>Post-Crisis: Modern interpretation of the Joker.</p>
            <p>New 52: More horror-focused portrayal.</p>
            <p>Three Jokers: Alternate exploration of the character's history.
        `,
        stories: `
            <ul>
                <li>The Killing Joke</li>
                <li>A Death in the Family</li>
                <li>Death of the Family</li>
            </ul>
        `
    },

    {
        id: "bane",
        name: "Bane",
        tags: "dc bane villians batman",
        identity: `
            <p>Full Identity: Unknown (commonly called Bane)</p>
            <p>Power Source: Venom-enhanced strength</p>
            <p>Strength Level: Superhuman when using Venom</p>
            <p>Intellect: Brilliant tactician and strategist</p>
            <p>Role: One of Batman's most physically dangerous enemies
        `,
        universes: `
            <p>Post-Crisis: Original continuity introduction of Bane.</p>
            <p>New 52: Modern reinterpretation of the character.
        `,
        stories: `
            <ul>
                <li>Knightfall</li>
                <li>Batman: I Am Bane</li>
                <li>Secret Six</li>
            </ul>
        `
    }
];

const characterContainer = document.querySelector("#container-char"); //charcter description container

//each character data object displays description and info in charcater description section
characterData.map(char => {

    const card = document.createElement("div");
    card.classList.add("character-card", "character-item");
    card.setAttribute("data-char", char.id);
    card.setAttribute('data-tags', `${char.tags}`);

    card.innerHTML = `
        <button class="accordion-toggle" type="button">
            ${char.name} ▼
        </button>

        <div class="accordion-content">
            <div class="char-id-title">
                <h3>Character Identification:</h3>
                <div>${char.identity}</div>
            </div>

            <div class="key-universes">
                <h3>Key Universes and Reboots:</h3>
                <div>${char.universes}</div>
            </div>

            <div class="story-arcs">
                <h3>Popular Story Arcs:</h3>
                ${char.stories}
            </div>
        </div>
    `;

    characterContainer.appendChild(card);
});

//finds values passed through the page
const params = new URLSearchParams(window.location.search);
const selectedCharacter = params.get("character");  //finds the specific character

if (selectedCharacter) {
    const selectedCharCard =
        document.querySelector(`[data-char="${selectedCharacter}"]`);  //finds the corresponsing character 

    if (selectedCharCard) {
        selectedCharCard.scrollIntoView({                              //scrolls to that selected charcter 
            behavior: "smooth",
            block: "center"
        });

        selectedCharCard.classList.add("selected-card");
    }
}
