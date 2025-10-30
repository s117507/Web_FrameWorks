import styles from './App.module.css';

interface CheckboxProps {
    size: number;
}

const CheckboxGrid: React.FC<CheckboxProps> = ({size}) => {
    const handleChange = (row: number, col: number, event: React.ChangeEvent<HTMLInputElement>) => {
        alert(`Checkbox [${row + 1}, ${col + 1}] is ${event.target.checked? 'Checked' : 'Unchecked'}`)
    };

    return (
        <div
            className={styles.checkboxGrid}
            style={{ gridTemplateColumns: `repeat(${size}, 24px`}}
        >
            {Array.from({ length: size }).map((_, row) =>
                Array.from({ length: size }).map((_, col) => (
                    <input
                        key={`${row}-${col}`}
                        type="checkbox"
                        onChange={e => handleChange(row, col, e)}
                    />
                ))
            )}
        </div>
    )

};

export default CheckboxGrid;


