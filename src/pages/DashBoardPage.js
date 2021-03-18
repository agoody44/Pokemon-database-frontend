import pokemonBanner from './pngegg.png'
import React, {useState, useEffect} from 'react';
import { getAllPokemon, getPokemon } from '../services/pokemon-api.js';
import Card from '../components/Card.js';

export default function DashBoardPage (props){
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState ('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'

// runs once after component mounts to the page
  useEffect(() =>{
    async function fetchData() {
      let response = await getAllPokemon(initialUrl); 
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  const prev = async () => {
    if (!prevUrl) return
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async(data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
  }
  return (
          <div className='Page' id='cardsPage'>
            <div>
            <img src={pokemonBanner} alt='hs' />
            </div>
            {loading ? (
              <h1>Loading....</h1> 
              ) : (
                <>
                  <div className="btn">
                    <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button>
                  </div>
                    <div className='grid-container'>
                      {pokemonData.map((pokemon, i) => {
                        return <Card key={i} pokemon={pokemon} />;
                      })}
                    </div>
                </>
              )}
          </div>
  );
}




{/* 
export default function DashBoardPage (props) {
    return (
        <main className='Page' id='cardsPage'>

          <div>
          <img src={pokemonBanner} alt='hs' />
          </div>

            <h1>Pick your favorite Pokemon</h1>

            <ul className='cards'>
              
              {props.results && props.results.map((result, idx) => {
                // console.log(result.url)
                
                function sayHello() {
                    alert('Adds to favorite page!');
                  }

                return (

                
            

                <li className='cardsLi'key={idx}>
                  { result.name.toLowerCase().split(' ').map (letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') }
                  <br/>
                  <button className='button' onClick={sayHello}>
                    Fav
                  </button>
                </li>
                )
              })
              }
            </ul>
            

        </main>
    )
} */}