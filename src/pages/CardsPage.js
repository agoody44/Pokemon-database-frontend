// import HearthstoneClasses from './HearthstoneClasses.jpg';
// import { useState } from 'react'
import pokemonBanner from './pngegg.png'


export default function CardsPage (props) {
  // console.log(props)



  return (
    <main className='Page' id='cardsPage'>

          <main className='Page'>

          <div>

          <img src={pokemonBanner} alt='hs' />
          </div>
          <br/>

            <ul className='cards'>
              
                {props.results && props.results.map((result, idx) => {
                  {/* console.log(result.url) */}
                  
                  return (

                  <li className='cardsLi'key={idx}>
                    { result.name.toLowerCase().split(' ').map (letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') }
                    <br/>
                    {/* <img src="result.url.sprites.front_default" alt="img"/> */}
                  </li>
                  )
                })
                }
              </ul>
              
              
              {/* {props.results.url && props.results.url.map((url, idx) => {
                  console.log(url)
                  return (
                    <ul>
                      <li>
                      <img src="result.url.sprites.front_default" alt="img"/>
                      </li>
                    </ul>
                  )
              })
              }  */}


          </main>
      </main>
)}

// {/* 
//                 {props.url && props.url.map((url, idx) => {
//                   console.log(url)
//                   return (
//                     <li>
//                           {url.sprites}
//                     </li>
//                   )

                  
//                 })} */}



// {/* <img src={result?.url?.sprites?.front_default} alt="" /> */}

