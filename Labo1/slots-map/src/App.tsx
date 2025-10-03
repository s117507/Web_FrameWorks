// App.tsx

const slotImages: string[] = [
  new URL("./assets/cherries.png", import.meta.url).href,
  new URL("./assets/diamond.png", import.meta.url).href,
  new URL("./assets/lemon.png", import.meta.url).href,
  new URL("./assets/seven.png", import.meta.url).href,
  new URL("./assets/watermelon.png", import.meta.url).href,
];

const NUMBER_OF_SLOTS = 3;

function getRandomSlots(count: number): number[] {
  const slots: number[] = [];
  for (let i = 0; i < count; i++) {
    slots.push(Math.floor(Math.random() * slotImages.length));
  }
  return slots;
}

function isWinning(slots: number[]): boolean {
  for (let i = 1; i < slots.length; i++) {
    if (slots[i] !== slots[0]) return false;
  }
  return true;
}

function App() {
  const slots = getRandomSlots(NUMBER_OF_SLOTS);
  const winning = isWinning(slots);

  return (
    <div>
      <h1>SLOTS</h1>

      {slots.map((slot, i) => (
        <img src={slotImages[slot]} alt={"slot " + (i + 1)} width={100} />
      ))}

      <p>{winning ? "Je hebt gewonnen!" : "Je hebt verloren!"}</p>
    </div>
  );
}

export default App;
