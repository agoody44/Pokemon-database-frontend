const Cards = (props) => {
    console.log(props)
    return (
    <div className='App-card'>
       <ul>
           <li className='card'>
                <strong>Name</strong> <br/>{props.result.name}
           </li>
       </ul>
         
       
    
    </div>
    )
}

export default Cards;