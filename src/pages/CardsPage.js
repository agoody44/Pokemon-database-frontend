// import HearthstoneClasses from './HearthstoneClasses.jpg';
// import { useState } from 'react'



export default function CardsPage (props) {
  // console.log(props)


  return (
    <main className='Page'>
        <h1>CardsPage</h1>
          <main className='Page'>
              {/* <img src={HearthstoneClasses} height="1000px" width="1000px" alt="hs"/> */}
            <ul className='cards'>
              
                {props.results && props.results.map((result, idx) => {
                  console.log(result)
                  return (
                  <li className='cardsLi'key={idx}>
                    { result.name.toLowerCase().split(' ').map (letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') }
                    <br/>
                    {/* <img src={result.url.sprites.front_default} alt='img' /> */}
                  </li> 
                  )
                })}
            </ul>
          </main>
    </main>
  )}
