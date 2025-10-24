import styles from './App.module.css'

const slotImages: string[] = [
    new URL("./assets/cherries.png", import.meta.url).href,
    new URL("./assets/diamond.png", import.meta.url).href,
    new URL("./assets/lemon.png", import.meta.url).href,
    new URL("./assets/seven.png", import.meta.url).href,
    new URL("./assets/watermelon.png", import.meta.url).href,
];

interface SlotMachineProps {
     slots: number;

}
interface SlotProps {
     value: number;
}

function getRandomSlots(count: number): number[] {
    const slots: number[] = [];
    for (let i = 0; i < count; i++) {
        slots.push(Math.floor(Math.random() * slotImages.length));
    }
    return slots;
}

const Slot = ({value}:SlotProps) => {
    return <img src={slotImages[value]} alt="slot" width={100} className={styles.slot}/>
}
const SlotMachine = ({slots}: SlotMachineProps) => {
    const randomSlots = getRandomSlots(slots);
    const winning = isWinning(randomSlots);
    return (
        <div>
            {winning ? <h2 className={styles.won}>Je hebt gewonnen!</h2> : <h2 className={styles.loss}>Je hebt verloren!</h2>}
            {randomSlots.map((slot, i) => (
                <Slot value={slot} key={i}/>
            ))}
        </div>
    )
}

function isWinning(slots: number[]): boolean {
    for (let i = 1; i < slots.length; i++) {
        if (slots[i] !== slots[0]) return false;
    }
    return true;
}

function App() {
    return (
        <div>
            <h1>SLOTS</h1>
            <SlotMachine slots={5}/>
            <SlotMachine slots={4}/>
            <SlotMachine slots={3}/>


            <p></p>
        </div>
    );
}

export default App;
