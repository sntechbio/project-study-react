import React, { useState } from "react";

const scaleNames = {
    c: 'Calsius',
    f: 'Fahrenheit'
}

function TemperatureInput(props) {

    const [temperature, setTemperature] = useState('');

    function handleChange(e) {
        setTemperature(e.target.value)
    }

    const scale = props.scale;

    return (
        <fieldset>
            <legend>inform the temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={handleChange}/>
        </fieldset>
    )

}

export default TemperatureInput