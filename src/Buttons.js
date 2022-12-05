import React, { useState } from 'react';

const Buttons = ({setDots, dots}) => {

    const [filteredDots, setFilteredDots] = useState([])

    return (
        <div className='flex gap-3 z-[999999]'>
            <button
            className='bg-gray-300 text-gray-500 px-3 py-2 rounded-lg disabled:bg-gray-600'
            onClick={() => {
                setFilteredDots(prev => [dots.slice(-1)[0], ...prev])
                setDots(prev => prev.filter(d => d.id !== dots.slice(-1)[0].id))
            }}
            disabled={dots.length === 0}
            >Redo</button>
            <button
            className='bg-gray-300 text-gray-500 px-3 py-2 rounded-lg disabled:bg-gray-600'
            onClick={() => {
                setFilteredDots(prev => prev.filter(p => prev.indexOf(p) !== 0))
                setDots(prev => [...prev, filteredDots[0]])
            }}
            disabled={filteredDots.length === 0}
            >Undo</button>
        </div>
    );
}

export default Buttons;
