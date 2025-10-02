let slotImages = [
  new URL('./assets/cherries.png' , import.meta.url).href,
  new URL('./assets/diamond.png', import.meta.url).href,
  new URL('./assets/lemon.png', import.meta.url).href,
  new URL('./assets/seven.png', import.meta.url).href,
  new URL('./assets/watermelon.png', import.meta.url).href
]

/* Require word niet meer gesupport, gebruik nieuwe handeling new URL('Path', import.meta.url).href */

const getRandomSlots = (numberOfSlots: number) => {
  let slots : number[] = [];
  for (let index = 0; index <numberOfSlots; index++) {
    slots.push(Math.floor(Math.random()*5))
  }
  return slots
}

function App() {

  let slot1 = Math.floor(Math.random() * 5);
  let slot2 = Math.floor(Math.random() * 5);
  let slot3 = Math.floor(Math.random() * 5);

  let slots = getRandomSlots(3);

  let winning = slot1 == slot2 && slot2 == slot3;

  return (
    <div>
    <h1>SLOTS</h1>
    {slotImages.map((images) => (
      <img src={images} alt="slot" width="100"/>
    ))}

    {winning? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren!</p>}

    <img src={slotImages[slot1]} alt="slot1" width="100" />
    <img src={slotImages[slot2]} alt="slot1" width="100" />
    <img src={slotImages[slot3]} alt="slot1" width="100" />
    </div>
  )
}

export default App
