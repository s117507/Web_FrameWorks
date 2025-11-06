import {useState} from "react";
import styles from "./App.module.css"
import * as React from "react";

export const Maaltafels: React.FC = () => {
    const [max, setMax] = useState<number>(5)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);
        if (isNaN(value)) value = 2;
        if (value < 2) value = 2;
        if (value > 10) value = 10;
        setMax(value);
    };

    const rows = [];
    for (let i = 0; i <= max ; i++) {
        rows.push(
            <tr key={i}>
                {Array.from({length : max}, (_, j) => (
                    <td key={j}>{i * (j + 1)}</td>
                ))}
            </tr>
        );
    }

    return (
        <div className={styles.maaltafelContainer}>
            <input
                type="number"
                min={2}
                max={10}
                value={max}
                onChange={handleChange}
                className={styles.maaltafelInput}
                />
            <table className={styles.maaltafelTable}>
                <tbody>
                    <tr>
                        <td></td>
                    {Array.from({length : max}, (_, i) => (
                        <th key={i}>{i + 1}</th>
                    ))}
                    </tr>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}