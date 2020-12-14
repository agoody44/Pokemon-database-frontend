export function getPokemonData() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then(res => res.json())
    
}


//     export function getPokemonData() {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(res => res.json())
    

//     }