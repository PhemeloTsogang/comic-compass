//Dynamic JavaScript-driven navigation bar 
//Navigation bar element is selected then singular list of hyperlinks added to function on all pages
const navBar = document.querySelector(".nav-bar");

navBar.innerHTML = 
`
    <a href="index.html" class="nav-link" id="home-btn" >Home</a>
    <a href="characters.html" class="nav-link" "char-btn">Characters</a>
    <a href="guides.html" class="nav-link" "guides-btn">Beginner Guides</a>
    <a href="recommendations.html" class="nav-link" "recomm-btn">Recommended Comics</a>
    <a href="glossary.html" class="nav-link" "glossary-btn">Glossary</a>
`;

const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav-open");
});


//Navigation to home page by clicking website logo
const logo = document.querySelector(".logo-title img");
const logoTitle = document.querySelector(".logo-title h1"); //selecting logo html element

logo.addEventListener("click", () => {
    window.location.href = "../index.html"; //click of the specified html element redirects to home page
});

logoTitle.addEventListener("click", () => {
    window.location.href = "../index.html";
});
