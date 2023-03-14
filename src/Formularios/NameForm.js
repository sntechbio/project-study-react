import React, { useState } from "react";

function NameForm() {
    const [value, setValue] = useState('coco');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        alert('your favorite fruit is: ' + value)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Escolha seu sabor favorito:
                <select value={value} onChange={handleChange}>
                    <option value="laranja">Laranja</option>
                    <option value="limao">Limão</option>
                    <option value="coco">Coco</option>
                    <option value="manga">Manga</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    )
}

export default NameForm;
