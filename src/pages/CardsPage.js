const CardsPage = (props) =>  {
  console.log(props)
    return (
        <main className='Page'>
          <h1>Cards</h1>
          <ul>
            <li>
              {props.result.classes[0]}
            </li>
          </ul>
        </main>
    )
}

export default CardsPage;