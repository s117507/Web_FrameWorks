import React from "react";

interface TextInputProps {
    size: number;
}

const TextInput: React.FC<TextInputProps> = ({size}) => {
    const handleChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        alert(`Textbox ${index + 1}: ${event.target.value}`);
    };

    return (
        <div style={{display:`flex`, gap:`8px`}}>
            {Array.from({length: size}, (_, idx) => (
                <input key={idx}
                type="text"
                onChange={(e) => handleChange(idx, e)}
                       style={{padding: '8px', fontSize: '16px'}}
                />
            ))}
        </div>
    );
};

export default TextInput;

// De _ wordt gebruikt voor een niet gebruikte parameter want we hebbe enkel de index nodig, wat eig de textboxes definieert.

