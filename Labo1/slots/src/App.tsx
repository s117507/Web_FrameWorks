let slotImages = [
  new URL('./assets/cherries.png' , import.meta.url).href,
  new URL('./assets/diamond.png', import.meta.url).href,
  new URL('./assets/lemon.png', import.meta.url).href,
  new URL('./assets/seven.png', import.meta.url).href,
  new URL('./assets/watermelon.png', import.meta.url).href
]

function App() {

  let slot1 = Math.floor(Math.random() * 5);
  let slot2 = Math.floor(Math.random() * 5);
  let slot3 = Math.floor(Math.random() * 5);

  let winning = slot1 == slot2 && slot2 == slot3;

  return (
    <div>
    <h1>SLOTS</h1>
    <img src="/cherries.png" alt="cherry" width="100" />
    <img src="diamond.png" alt="diamond" width="100" />
    <img src="lemon.png" alt="lemon" width="100" />
    <img src="seven.png" alt="seven" width="100" />
    <img src="watermelon.png" alt="watermelon" width="100" />

    {winning? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren!</p>}

    <img src={slotImages[slot1]} alt="slot1" width="100" />
    <img src={slotImages[slot2]} alt="slot1" width="100" />
    <img src={slotImages[slot3]} alt="slot1" width="100" />
    </div>
  )
}

export default App
