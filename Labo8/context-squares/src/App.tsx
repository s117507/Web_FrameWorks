import {createContext, useContext, useState} from 'react'
import './App.css'

interface SettingsContext {
    color: string;
    setColor: (color: string) => void;
}

const SettingsContext = createContext<SettingsContext>({
    color: "red",
    setColor: () => {}
});

const Square = () => {
    const { color } = useContext(SettingsContext);

    return(
        <div style={{width: 100, height: 100, margin: 10, backgroundColor: color}}>

        </div>
    )
}

const SquareRow = () => {
    return(
        <div style={{display: "flex", flexDirection: "row"}}>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}

const SelectionBox = () => {
    const { color, setColor } = useContext(SettingsContext);
    return(
        <>
            <select onChange={(e) => setColor(e.target.value)} value={color}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        </>
    )
}

function App() {
  const [color, setColor] = useState("red")

  return (
    <SettingsContext.Provider value={{color: color, setColor: setColor}}>
        <SelectionBox/>
        <SquareRow/>
    </SettingsContext.Provider>
  )
}

export default App
