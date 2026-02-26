const pages = document.querySelectorAll(".page");

let currentPage = 0;

pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        if (index === currentPage) {
            // Flip forward
            page.classList.add("flipped");
            currentPage++;
        } else if (index === currentPage - 1) {
            // Flip backward
            page.classList.remove("flipped");
            currentPage--;
        }
    });
});
