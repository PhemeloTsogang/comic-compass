const searchInputs = document.querySelectorAll(".search-input");  //selects search bar element

searchInputs.forEach(input => {
    const itemSelector = input.dataset.searchItem;  //contains item/attribute being searched

    if (!itemSelector) {
        return;                                     //if that specific search bar does not have use then that search bar shouldn't be processed
    }

    const items = document.querySelectorAll(itemSelector); //all search bars across every page are selected

    const searchArea = input.closest(".search-bar"); //find the search bar container closest to what was searched

    const filterToggle = searchArea.querySelector(".filter-toggle");     //finds the filter "activator" of that search bar
    const filterPanel = searchArea.querySelector(".filter-panel");       //find the filter panel of the search bar
    const filterButtons = searchArea.querySelectorAll("[data-filter]"); //find the overall filter button

    //reads all the values passed in the pages url
    const params = new URLSearchParams(window.location.search);

    let activeFilter = "all"; //default filter is "all"

    let dataAttribute = null; //stores data attribute of values

    //looks through the values used on that page and searches for items related to that page
    //ie. guide page will use guides, charater page will use charcters....
    if (itemSelector === ".guide-item") {
        initialSelection = params.get("guide");
        dataAttribute = "guide";
    }

    if (itemSelector === ".character-item") {
        initialSelection = params.get("character");
        dataAttribute = "char";
    }

    if (itemSelector === ".recommended-list") {
        initialSelection = params.get("recommendation");
        dataAttribute = "rec";
    }

    //function uses what was searched (not case sensitive) and updates the display with all valid results of that search
    function updateItems() {
        const searchText = input.value.toLowerCase().trim();

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const itemTags = item.dataset.tags || "";

            const matchesSearch = itemText.includes(searchText); //checks if search word and the items test matches 

            const matchesFilter =
                activeFilter === "all" || itemTags.includes(activeFilter); //checks if the item matches to the filter
            
            const matchesInitialSelection =
                !initialSelection || item.dataset[dataAttribute] === initialSelection;

            item.style.display = matchesSearch && matchesFilter && matchesInitialSelection ? "" : "none"; //display waht matches otherwise display nothing
        });
    }

    if (filterToggle && filterPanel) {
        filterToggle.addEventListener("click", () => {
            filterPanel.classList.toggle("filter-panel-open"); //opens and closes filter button when clicked
        });
    }

    //filter button functionality 
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;   //gets filter you chose

            initialSelection = null;    //the first filter that is clicked 

            filterButtons.forEach(btn => {
                btn.classList.remove("active-filter");    //removes the "clicked" state of all buttons 
            });

            button.classList.add("active-filter");       //add the "clicked" UI on filter button chosen

            updateItems();
        });
    });

    //when enter is pressed, the display of that page updates to what you searched
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            
            initialSelection = null;

            updateItems();
        }
    });

    input.addEventListener("input", () => {   //if the value of the search bar is ever empty, default the display to show everything 

        if (input.value.trim() === "") {
                activeFilter = "all";         //makes the filter all

                filterButtons.forEach(btn => {
                    btn.classList.remove("active-filter");  //disables every other filter
                });

                const allButton = searchArea.querySelector(
                    '[data-filter="all"]'
                );

                if (allButton) {
                    allButton.classList.add("active-filter");
                }

                updateItems();                              //after all is the filter, update the display
            }
    });

    updateItems();

    if (initialSelection) {
        const selectedCard = document.querySelector(`[data-${dataAttribute}="${initialSelection}"]`);

        if (selectedCard) {
            selectedCard.classList.add("selected-card");

            selectedCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
});