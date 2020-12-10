export function getCardsData() {
    return fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "27d5e041ddmshbe87fd4d24cea30p11fb0ejsn4034e6207688",
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
})}