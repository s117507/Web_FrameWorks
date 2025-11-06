import { useState, useEffect } from 'react'
import './App.css'


const CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let handle = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return() => {
            clearInterval(handle)
        };
    }, []);
    return <>{time}</>
}
const Timer = () => {
    const [time, setTime] = useState(0);
/*
    setInterval(() => {
        setTime((time) => time + 1);
    }, 1000)
*/
    useEffect(() => {
        let handle = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        return() => {
            clearInterval(handle)
        };
    }, []);
    return(
        <>
            {time}
        </>
    )
}

function App() {

  return (
    <div>
        <Timer/>
        <CurrentTime/>
    </div>
  )
}

export default App
