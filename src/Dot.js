import React from 'react';

const Dot = ({positionX, positionY}) => {
    const dotStyle = {
        "position": "absolute",
        "top": positionY-12,
        "left": positionX-5,
    }
    return (
        <div style={dotStyle}>
            <span className='inline-block w-[10px] h-[10px] bg-yellow-300 rounded-full'/>
        </div>
    );
}

export default Dot;
