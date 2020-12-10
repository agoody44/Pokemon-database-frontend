




export default function CardsPage (props) {
    console.log(props)
      return (
          <main className='Page'>
            <h1>Cards</h1>
            {props.results.classes.mage}
          </main>
      )
  }
  