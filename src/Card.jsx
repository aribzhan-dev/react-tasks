function Card(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>See more</button>
        </div>
    )
}


export default Card;