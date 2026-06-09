document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".accordion-toggle");

    if (!toggle) return;

    const content = toggle.nextElementSibling;

    content.classList.toggle("accordion-open");

    toggle.classList.toggle("accordion-active");
});