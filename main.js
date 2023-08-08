const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = document.getElementById("userInput").value
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then(res => res.json())
        .then(data => {
            showData(data.name, data.sprites.front_default)
        })
})

function showData(pokemon, imagen) {
    const name = document.createElement("p")
    name.textContent = pokemon
    const image = document.createElement("img")
    image.src = imagen
    container.appendChild(image)
    container.appendChild(name)
}