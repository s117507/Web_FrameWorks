import {useState} from "react";
import * as React from "react";
import styles from "./App.module.css"

export const InputFields: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={styles.inputFieldsContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
                <input
                key={index}
                type="text"
                className={styles.inputField}
                value={inputValue}
                onChange={handleChange}/>
                ))}
        </div>
    );
};