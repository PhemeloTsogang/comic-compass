const searchInputs = document.querySelectorAll(".search-input");

searchInputs.forEach(input => {
    const itemSelector = input.dataset.searchItem;

    if (!itemSelector) return;

    const items = document.querySelectorAll(itemSelector);

    const searchArea = input.closest(".search-bar");

    const filterToggle = searchArea.querySelector(".filter-toggle");
    const filterPanel = searchArea.querySelector(".filter-panel");
    const filterButtons = searchArea.querySelectorAll("[data-filter]");

    const params = new URLSearchParams(window.location.search);

    let activeFilter = "all";

    let dataAttribute = null;

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

    
    function updateItems() {
        const searchText = input.value.toLowerCase().trim();

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const itemTags = item.dataset.tags || "";

            const matchesSearch = itemText.includes(searchText);

            const matchesFilter =
                activeFilter === "all" || itemTags.includes(activeFilter);
            
            const matchesInitialSelection =
                !initialSelection || item.dataset[dataAttribute] === initialSelection;

            item.style.display = matchesSearch && matchesFilter && matchesInitialSelection ? "" : "none";
        });
    }

    if (filterToggle && filterPanel) {
        filterToggle.addEventListener("click", () => {
            filterPanel.classList.toggle("filter-panel-open");
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;

            // Once user filters manually, stop locking to the Home-page guide
            initialSelection = null;

            filterButtons.forEach(btn => {
                btn.classList.remove("active-filter");
            });

            button.classList.add("active-filter");

            updateItems();
        });
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            // Once user searches manually, stop locking to the Home-page guide
            initialSelection = null;

            updateItems();
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