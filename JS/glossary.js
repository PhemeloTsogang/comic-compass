//"Learn More" button click auto-scrolls to main glossary interaction section
const startBtn = document.querySelector("#start-btn2"); //selecting start button html element
const start = document.querySelector(".glossary-term-section");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});

//Glossary data is structured as an object containing more objects so that each value in the list does not need an id 
//to be referenced to the corresponding glossary term button
const glossaryData = {

    //default data shown if no definition is shown
    default: {
        title: "Definition",
        definition: "Click/search a glossary term to view its definition.",
        example: "Select a term above to see an example."
    },

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

//Reusable function allowning a glossary term within the data set to be displayed
function displayTerm(termKey) {

    const termInfo = glossaryData[termKey];

    if (!termInfo) {
        return;                                  //exit function if glossary term does not exist in data set
    }

    //Assignment of corresponding glosarry term data to the variable it represents
    titleElement.textContent = termInfo.title;
    definitionElement.textContent = termInfo.definition;
    exampleElement.textContent = termInfo.example;
}

//allows click of each glossary ter on page to display corresponding definition
glossaryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedTerm = button.dataset.term;    //selectedTerm becomes the key data-attribute value corresponding to that definition

        displayTerm(selectedTerm);                  //uses that selected term and displayTerm function to display corresponding definition in data set

        //displayTerm usually removes active funtionality
        glossaryButtons.forEach(btn => {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
    });

});

//definition display display default term if search bar is empty
searchInput.addEventListener("input", () => {

    if (searchInput.value.trim() === "") {

        glossaryButtons.forEach(term => {
            term.style.display = "";      //turns off turn button active filter
        });

        displayTerm("default"); 

        return;
    }
});


//only displays search if user clicks enter
searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        const searchText = searchInput.value.toLowerCase().trim();

        if (searchText === "") {
            return;                                     //exit is serach bar empty
        } 
         //looks through each object in the larger object container and finds corresponding term
        const matchingTerm = Object.keys(glossaryData).find(term =>
            term.includes(searchText)
        );

        if (matchingTerm) {
            displayTerm(matchingTerm);
        }
    }
});

