//Handles collapsing and display of full reading recommendation list
document.addEventListener("click", (event) => {                 
    const toggle = event.target.closest(".accordion-toggle");   //allows for any element (ie. the entire title) to be used as accordion button

    //exit function if any other button besides accordion button is clicked
    if (!toggle) {
        return;
    } 

    const content = toggle.nextElementSibling; //finds accordion content as content is the next element in the html

    //expands full reading list
    content.classList.toggle("accordion-open"); //content element doest have this class, adds it 
    toggle.classList.toggle("accordion-active");
});