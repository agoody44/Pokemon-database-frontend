// import HearthstoneClasses from './HearthstoneClasses.jpg';
// import { useState } from 'react'
import pikachu from './pikachu.gif'


export default function CardsPage (props) {
  // console.log(props)



  return (
    <main className='Page'>

          <img src={pikachu} height={100} width={100} alt='hs' />
          <br/>
          <main className='Page'>

            <ul className='cards'>
              
                {props.results && props.results.map((result, idx) => {
                  // console.log(result.url)
                  
                  return (

                   
              

                  <li className='cardsLi'key={idx}>
                    { result.name.toLowerCase().split(' ').map (letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') }
                    <br/>
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
                            {url.sprites}
                      </li>
                    </ul>
                  )
               })
              } */}


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

