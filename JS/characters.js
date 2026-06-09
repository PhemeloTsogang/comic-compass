//"Start Here" button click auto-scrolls to "Where to Start" Section
const startBtn = document.querySelector("#start-btn1"); //selecting start button html element
const start = document.querySelector(".popular-chars");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});

const popChars = [
    {
        //image: "images/invincible.png",
        character: "spider-man-peter",
        name: "Spider-Man",
        tooltip: "Peter Parker (Earth-616)"
    },

    {
        //image: "images/invincible.png",
        character: "superman"
    },

    {
        //image: "images/invincible.png",
        character: "flash-barry"
    },

    {
        //image: "images/invincible.png",
        character: "spider-man-miles"
    },

    {
        //image: "images/invincible.png",
        character: "spider-man-peter"
    },

    {
        //image: "images/invincible.png",
        character: "superman"
    },

    {
        //image: "images/invincible.png",
        character: "flash-barry"
    },

    {
        //image: "images/invincible.png",
        character: "spider-man-miles"
    },
];

const popularContainer = document.querySelector("#pop-char-grid");

popChars.map(char => {
    //create all home page character image cards
    const card = document.createElement("div");
    card.classList.add("card", "character-preview");

    card.innerHTML =
    `
        <div class="card-img" id="char-card"></div>

        <div class="character-tooltip">
            <strong>${char.name}</strong>
            <p>${char.tooltip}</p>
        </div>
    `;

    popularContainer.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific recommended list
    card.addEventListener("click", () => {
        const characterCard = document.querySelector(
            `[data-char="${char.character}"]`
        );

        if (characterCard) {
            characterCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

const characterData = [
    {
        id: "spider-man-peter",
        name: "Spider-Man",
        tags: "marvel spider-man peter-parker superhero",
        identity: `
            <strong>Full Identity:</strong> Peter Benjamin Parker<br>
            <strong>Power Source:</strong> Radioactive spider bite<br>
            <strong>Strength Level:</strong> Superhuman strength, agility, speed, and reflexes<br>
            <strong>Spider-Sense:</strong> Danger detection before threats happen<br>
            <strong>Wall-Crawling:</strong> Can cling to walls and surfaces<br>
            <strong>Web-Shooters:</strong> Mechanical web devices created by Peter Parker
        `,
        universes: `
            <strong>Earth-616:</strong> Main Marvel continuity for Peter Parker.<br>
            <strong>Ultimate Universe:</strong> A modernised alternate version of Spider-Man.
        `,
        stories: `
            <ul>
                <li><strong>Spider-Man: Blue</strong></li>
                <li><strong>Kraven's Last Hunt</strong></li>
                <li><strong>Ultimate Spider-Man</strong></li>
            </ul>
        `
    },

    {
        id: "spider-man-miles",
        name: "Spider-Man",
        tags: "marvel spider-man miles-morales superhero",
        identity: `
            <strong>Full Identity:</strong> Miles Morales<br>
            <strong>Power Source:</strong> Genetically altered spider bite<br>
            <strong>Abilities:</strong> Strength, agility, wall-crawling, and spider-sense<br>
            <strong>Venom Blast:</strong> Bio-electric shock ability<br>
            <strong>Camouflage:</strong> Can briefly turn invisible
        `,
        universes: `
            <strong>Ultimate Universe:</strong> Miles originally comes from Earth-1610.<br>
            <strong>Earth-616:</strong> Miles later becomes part of the main Marvel universe.
        `,
        stories: `
            <ul>
                <li><strong>Ultimate Comics Spider-Man</strong></li>
                <li><strong>Miles Morales: Spider-Man</strong></li>
                <li><strong>Spider-Verse</strong></li>
            </ul>
        `
    },

    {
        id: "flash-barry",
        name: "The Flash",
        tags: "dc flash barry-allen speedster superhero",
        identity: `
            <strong>Full Identity:</strong> Barry Allen<br>
            <strong>Power Source:</strong> Speed Force<br>
            <strong>Abilities:</strong> Super speed, rapid healing, vibration, time travel, and enhanced reflexes<br>
            <strong>Role:</strong> Forensic scientist and one of DC's main speedster heroes
        `,
        universes: `
            <strong>Pre-Crisis:</strong> Classic Barry Allen continuity.<br>
            <strong>Post-Crisis / Rebirth:</strong> Modern versions of Barry and the Speed Force mythology.
        `,
        stories: `
            <ul>
                <li><strong>The Flash: Rebirth</strong></li>
                <li><strong>Flashpoint</strong></li>
                <li><strong>The Flash by Mark Waid</strong></li>
            </ul>
        `
    },

    {
        id: "superman",
        name: "Superman",
        tags: "dc superman clark-kent superhero",
        identity: `
            <strong>Full Identity:</strong> Clark Kent / Kal-El<br>
            <strong>Power Source:</strong> Earth's yellow sun<br>
            <strong>Abilities:</strong> Super strength, flight, heat vision, freeze breath, x-ray vision, and near invulnerability<br>
            <strong>Role:</strong> A symbol of hope, morality, and heroism
        `,
        universes: `
            <strong>Earth-One / Earth-Prime:</strong> Major versions of Superman across DC continuity.<br>
            <strong>New 52 / Rebirth:</strong> Modern continuity updates and reboots.
        `,
        stories: `
            <ul>
                <li><strong>All-Star Superman</strong></li>
                <li><strong>Superman: Birthright</strong></li>
                <li><strong>Superman: For All Seasons</strong></li>
            </ul>
        `
    }
];

const characterContainer = document.querySelector("#container-char");

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

const params = new URLSearchParams(window.location.search);
const selectedCharacter = params.get("character");

if (selectedCharacter) {
    const selectedCharCard =
        document.querySelector(`[data-char="${selectedCharacter}"]`);

    if (selectedCharCard) {
        selectedCharCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        selectedCharCard.classList.add("selected-card");
    }
}
