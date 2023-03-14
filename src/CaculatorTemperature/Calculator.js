import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator() {
    const [temperature, setTemperature] = useState('')

    function handleChange(e) {
        setTemperature(e.target.value)
    }

    return (
        <fieldset>
            <legend>Enter the temperature in Celsius:</legend>
            <input
                value={temperature}
                onChange={handleChange}
            />
            <BoilingVerdict celsius={parseFloat(temperature)}/>
        </fieldset>
    )
}

export default Calculator