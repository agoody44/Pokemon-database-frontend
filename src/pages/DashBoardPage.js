import pokemonBanner from './pngegg.png'

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
}