const games = [
    { name: "GTA 5", link: "https://www.downloadcomputergames.net/2020/10/download-gta-5-for-pc.html", image:"Grand_Theft_Auto_V.png" },
    { name: "FIFA 25", link: "https://example.com/fifa25", image: "https://example.com/fifa25.jpg" },
    { name: "Call of Duty: Warzone", link: "https://example.com/cod-warzone", image: "https://example.com/cod-warzone.jpg" },
    // أضف هنا باقي الألعاب الـ 100
];

function renderGames(gamesList) {
    const gamesContainer = document.getElementById('games-list');
    gamesContainer.innerHTML = '';

    gamesList.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');

        gameDiv.innerHTML = 
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <a href="${game.link}" target="_blank">تحميل</a>
        ;
        gamesContainer.appendChild(gameDiv);
    });
}

function searchGames() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
    renderGames(filteredGames);
}

// عرض جميع الألعاب عند تحميل الصفحة
window.onload = () => renderGames(games);