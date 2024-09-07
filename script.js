// Script to handle search bar
document.getElementById('searchBar').addEventListener('keyup', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const games = document.querySelectorAll('.game-card');

    games.forEach(function(game) {
        const gameTitle = game.querySelector('h3').innerText.toLowerCase();
        if (gameTitle.includes(searchQuery)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});
