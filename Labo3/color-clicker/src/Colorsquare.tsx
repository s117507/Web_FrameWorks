// src/ColorSquare.tsx
import React from 'react';

// The props interface remains the same
interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ color, size }) => {
    // Explicitly type the event handler function as your teacher demonstrated
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        // It's good practice to stop the event from propagating to parent elements
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
            onClick={handleClick} // The onClick prop now uses the explicitly typed handler
        />
    );
};

export default ColorSquare;
