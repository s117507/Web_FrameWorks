// src/ColorSquare.tsx
import React from 'react';

// The props interface remains the same
interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ color, size }) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        // stopProgagation betekent dat enkel de child word geselecteerd en niet de parent
        event.stopPropagation();
        alert(`The color of this square is ${color}`);
    };

    const squareStyle = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
    };

    return (
        <div
            style={squareStyle}
            onClick={handleClick}
        />
    );
};

export default ColorSquare;
