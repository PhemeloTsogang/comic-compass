//"Start Here" button click auto-scrolls to "Where to Start" Section
const startBtn = document.querySelector("#start-btn2"); //selecting start button html element
const start = document.querySelector(".glossary-term-section");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});


const glossaryData = {
    retcon: {
        title: "Retcon",
        definition: "A retcon is a change made to previously established story continuity.",
        example: "A writer may reveal that a character's origin happened differently than originally shown."
    },

    volume: {
        title: "Volume",
        definition: "A volume is a collected group of comic issues, usually forming part of a larger series.",
        example: "Invincible Volume 1 collects the earliest issues of the Invincible comic series."
    },

    "trade-paperback": {
        title: "Trade Paperback",
        definition: "A trade paperback is a softcover collection of several comic issues.",
        example: "A six-issue Batman storyline may later be released as one trade paperback."
    },

    reboot: {
        title: "Reboot",
        definition: "A reboot restarts or refreshes a comic continuity to make it easier for new readers to follow.",
        example: "DC's New 52 was a major reboot of many DC characters and storylines."
    },

    omnibus: {
        title: "Omnibus",
        definition: "An omnibus is a large collected edition containing many issues or story arcs.",
        example: "A Spider-Man omnibus might collect dozens of issues from one writer's run."
    },

    canon: {
        title: "Canon",
        definition: "Canon refers to the official events, stories, and continuity recognised within a fictional universe.",
        example: "A mainline Batman story is usually considered canon, while some alternate-universe stories are not."
    },

    continuity: {
        title: "Continuity",
        definition: "Continuity is the connected timeline of events within a comic universe.",
        example: "A character's history, relationships, and major events form part of their continuity."
    },

    issue: {
        title: "Issue",
        definition: "An issue is a single released comic book, similar to one episode in a larger story.",
        example: "Amazing Spider-Man #1 is one individual issue."
    }
};

const glossaryButtons = document.querySelectorAll(".glossary-term");

const titleElement = document.querySelector("#glossaryTitle");
const definitionElement = document.querySelector("#glossaryDefinition");
const exampleElement = document.querySelector("#glossaryExample");

const searchInput = document.querySelector(".search-input");

function displayTerm(termKey) {

    const termInfo = glossaryData[termKey];

    if (!termInfo) return;

    titleElement.textContent = termInfo.title;
    definitionElement.textContent = termInfo.definition;
    exampleElement.textContent = termInfo.example;
}

glossaryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedTerm = button.dataset.term;

        displayTerm(selectedTerm);

        glossaryButtons.forEach(btn => {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
    });

});

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") return;

    const matchingTerm = Object.keys(glossaryData).find(term =>
        term.includes(searchText)
    );

    if (matchingTerm) {
        displayTerm(matchingTerm);
    }
});