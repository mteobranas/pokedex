const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const input = document.getElementById("user_input").value
    const userInput = input.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then(res => res.json())
        .then(data => {
            showCard(data.name.toUpperCase(), data.sprites.other.dream_world.front_default)
        })
        .catch(err => {
            container.innerHTML = "invalid pokemon name"
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