const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = document.getElementById("user_input").value
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then(res => res.json())
        .then(data => {
            showCard(data.name, data.sprites.other.dream_world.front_default)
        })
})

function showCard(pokemon, imagen) {
    container.innerHTML = '';
    container.innerHTML = 
    `<div class="card">
            <div class="card_title">
                <h2>${pokemon}</h2>
            </div>
            <div class="card_image">
                <img src="${imagen}" alt="${pokemon}">
            </div>
        </div>`
}