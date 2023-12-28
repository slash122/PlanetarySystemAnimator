const planetList = [];

function addPlanet() {
    planetList.push(new Planet(666, 10, 10));
    renderList();
    animationRequest = redraw(planetList);
}

function renderList() {
    const container = document.getElementById('editor-planet-list');
    container.innerHTML = '';
    let count = 1;
    container.innerHTML = '';
    planetList.forEach((planet) => {
        let planetDiv = `<div class="planetDiv">
            <p class="planetCount">${count}</p>
            <input type="button" value="Delete planet">
            <input type="range" min="0" max="600" value="50" id="distanceRange">
        </div>`;
        count++;
        container.innerHTML += planetDiv;
    });
}
