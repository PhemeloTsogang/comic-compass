//"Start Here" button click auto-scrolls to "Where to Start" Section
const startBtn = document.querySelector("#start-btn2"); //selecting start button html element
const start = document.querySelector(".pop-search");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});


const guideData = [
    {
        id: "flash",
        name: "The Flash",
        tags: "dc flash beginner",
        intro: "The Flash is a DC speedster hero...",
        readingOrder: "Start with Mark Waid's Flash..."
    },

    {
        id: "batman",
        name: "Batman",
        tags: "dc batman beginner",
        intro: "Batman is Gotham's Dark Knight...",
        readingOrder: "Year One → Long Halloween → Hush"
    },

    {
        id: "spider-man",
        name: "Spider-Man",
        tags: "marvel spider-man beginner",
        intro: "Spider-Man is Marvel's most iconic street-level hero...",
        readingOrder: "Ultimate Spider-Man → Spider-Man Blue"
    },

    {
        id: "dc",
        name: "DC Comics",
        tags: "dc beginner",
        intro: "DC is one of the largest comic publishers...",
        readingOrder: "Batman Year One → Superman Birthright → Green Lantern Rebirth"
    }
];


const guidesContainer = document.querySelector("#container-guides");

guideData.map(guide => {

    const card = document.createElement("div");
    card.classList.add("character-card", "guide-item");
    card.setAttribute("data-guide", guide.id);
    card.setAttribute('data-tags', `${guide.tags}`);

    card.innerHTML = `
        <button class="accordion-toggle" type="button">
            <h2>${guide.name} ▼</h2>
        </button>

        <div class="accordion-content">
            <div class="char-intro">
                <h3>Character Introduction:</h3>
                <p>${guide.intro}</p>
            </div>

            <div class="beginner-guide">
                <h3>Beginner Reading Orders:</h3>
                <p>${guide.readingOrder}</p>
            </div>
        </div>
    `;

    guidesContainer.appendChild(card);
});

