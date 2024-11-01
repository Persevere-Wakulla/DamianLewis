
import React, {useState} from 'react';
import './ColorPicker.css'
export default function ColorPicker(){

    const [color, setColor] = useState('#ffffff');
    function handleColorChange(e){
        setColor(e.target.value);
    }

    return(
        <div className='color-picker-container'>
            <img src="./public/react.svg" alt="react-logo" />
            <h1>React Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}