// React Event Object
// What is it?
// React automatically passes an event obejct to event handlers
// This object contains details about the event
// eg: input field: event.target.value
// event: info about the input change
// event.target: the HTML input element

import { useState } from "react";

// event.target.value: the current text typed by the user
export function EventObject(){
    const [text,setText] = useState('');
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>Event object</h2>
            <input type="text" value={text}    //type="password" 
            onChange={handleChange}
            placeholder = "Type something"/>
            <p>You typed: {text}</p>
        </section>
    );
}