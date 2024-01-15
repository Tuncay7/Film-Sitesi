const okları = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

okları.forEach((ok, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;

    ok.addEventListener("click", function () {
        clickCounter++;

        if (imageItem - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].style.transform === "" ? 0 : parseFloat(movieLists[i].style.transform.match(/-?\d+/)[0]) - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
        }
    });
});
/* dark mode */
const ball = document.querySelectorAll('.toggle .ball');
const items = document.querySelectorAll('.container, .navbar, .sidebar, .sidebar i, .toggle, .toggle .ball, .movis-list-filter select');

ball.forEach(ball => {
    ball.addEventListener('click', function() {
        items.forEach(item => item.classList.toggle('aktive'));
    });
});









