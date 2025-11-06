import { useState } from 'react'
import './App.css'

function App() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setRandom = () => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        setX(x)
        setY(y)
    }
  return (
    <div>
    <button onClick={setRandom}>Random Image</button>
        {x !== 0 && y !== 0 && (
            <img src="url" style={{position: "fixed", top: x, left: y}}/>
        )}
    </div>
  )
}

export default App
