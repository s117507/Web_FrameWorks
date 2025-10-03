const letters : string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

function App() {

  return (
    <>
        <h1>Alien Alphabeth</h1>
        {letters.map(letter => (
            <button><img src={`https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`} alt={letter} /></button>
        ))}
    </>
  )
}

export default App
