import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'




const cardInfo = [
  {
    name: "Card 1",
    description: "This is the first card."
  },
  {
    name: "Card 2",
    description: "This is the second card."
  },
  {
    name: "Card 3",
    description: "This is the third card."
  },
  {
    name: "Card 4",
    description: "This is the fourth card."
  },
  {
    name: "Card 5",
    description: "This is the fifth card."
  }
]

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
          {cardInfo.map((card, index) => (
            <div key={index}>
              <h1>{card.name}</h1>
              <p>{card.description}</p>
              <button>See more</button>
            </div>
          ))}
      </div>
    </>
  )
}

export default App
