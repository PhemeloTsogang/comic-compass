//"Start Here" button click auto-scrolls to "Where to Start" Section
const startBtn = document.querySelector("#start-btn1"); //selecting start button html element
const start = document.querySelector(".recommendations");

startBtn.addEventListener("click", () => {
    start.scrollIntoView({
        behavior: "smooth"                             //click of start button creates smooth scroll to desired section 
    });
});

const popStories = [
    {
        title: "Fan Favourite Indie Comic Reading List",
        //image: "images/invincible.png",
        recommendation: "indie"
    },

    {
        title: "Batman: Court of Owls Story Arc Reading Order",
        //image: "images/invincible.png",
        recommendation: "batman"
    }
];

const popularContainer = document.querySelector("#pop-story-grid");

popStories.map(char => {
    //create all home page character image cards
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
    `
        <div class="card-img"></div>
        <h3>${char.title}</h3>
    `;

    popularContainer.appendChild(card); //adds all cards to container

    //allows card clicking to redirect specific recommended list
    card.addEventListener("click", () => {
        const characterCard = document.querySelector(
            `[data-rec="${char.recommendation}"]`
        );

        if (characterCard) {
            characterCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

const recommendData = [
    {
        id : "batman",
        title: "Batman Beginner Reading List",
        titleDescription: "Read Batman for the first time",
        tags: "dc batman beginner",
        comics: [
            "Batman: Year One",
            "The Long Halloween",
            "Batman: Hush"
        ]
    },

    {
        id: "indie",
        title: "Fan Favourite Indie Comic Reading List",
        tags: "image-comics indie beginner",
        comics: [
            "Invincible Volume 1",
            "Radiant Black Volume 1",
            "Saga Volume 1"
        ]
    }
];

const recommendContainer = document.querySelector("#container-rec");

recommendData.map(rec => {

    const card = document.createElement("div");
    card.classList.add("character-card", "recommended-list");
    card.setAttribute("data-rec", rec.id);
    card.setAttribute('data-tags', `${rec.tags}`);

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
                ${rec.comics.map(comic => `
                    <div class="card">
                        <div class="card-img"></div>
                        <h3>${comic}</h3>
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    recommendContainer.appendChild(card);
});

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