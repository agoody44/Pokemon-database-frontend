export function getCardsData() {
    return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    // .then(response => {
    //     console.log(response);
    // })
    }