document.addEventListener("DOMContentLoaded", () => {
    const openLetterBtn = document.getElementById("openLetterBtn");
    const letterContent = document.getElementById("letterContent");

    if (!openLetterBtn || !letterContent) {
        return;
    }

    let isOpen = false;

    function setLetterOpen(open) {
        isOpen = open;
        letterContent.classList.toggle("hidden", !isOpen);
        letterContent.hidden = !isOpen;
        openLetterBtn.textContent = isOpen ? "Carta abierta" : "Abrir carta";
        openLetterBtn.setAttribute("aria-expanded", String(isOpen));
    }

    function toggleLetter() {
        setLetterOpen(!isOpen);
    }

    openLetterBtn.addEventListener("click", toggleLetter);
    setLetterOpen(false);
});
