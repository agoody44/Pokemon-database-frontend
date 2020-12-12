// import HearthstoneClasses from './HearthstoneClasses.jpg';
// import { useState } from 'react'



export default function CardsPage (props) {
  // console.log(props)

  return (
    <main className='Page'>
        <h1>CardsPage</h1>
          <main className='Page'>
              {/* <img src={HearthstoneClasses} height="1000px" width="1000px" alt="hs"/> */}
            <ul>
              
                {props.results && props.results.map((result, idx) => {
                  // console.log(result)
                  return (
                  <li className='cardsLi'key={idx}>
                    { result.name }
                    <br/>
                    {/* <img src={result.url}
                    alt='img' /> */}
                    {/* { result.url } */}
                  </li> 
                  )
                })}
            </ul>
          </main>
    </main>
  )}
