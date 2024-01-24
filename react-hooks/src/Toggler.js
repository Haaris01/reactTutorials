import React from "react";
import {useState} from "react";
function Toggler() {
    const [counter, setCounter] = useState(0);
    const handleClick =  () => {
        setCounter(counter+1);
    }

    const [isHappy, setIsHappy] = useState(true);
    return (
        <div>
            <div>
                <h1>Increment Number : {counter+1}</h1>
                <button onClick={() => {handleClick()}}>Increment</button>
            </div>
            <div>
                <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "happy" : "notHappy"}</h1>
            </div>
        </div>
    );
}

export default Toggler;
