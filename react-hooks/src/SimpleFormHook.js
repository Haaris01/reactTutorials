import React from "react";
import { useState } from "react";

function SimpleFormHook() {
    const [inp, setInp] = useState("ksjdbfsd");
    const handleChange = (evt) => {
        setInp(evt.target.value);
    }
    return (
        <div>
            <h1>Input is : {inp}</h1>
            <input type="text" value={inp} onChange={handleChange} />
            <button onClick={() => setInp("")}>Submit</button>
        </div>
    );
}

export default SimpleFormHook;
