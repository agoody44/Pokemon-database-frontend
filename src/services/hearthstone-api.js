export function getCardsData() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then(res => res.json())
    
    }