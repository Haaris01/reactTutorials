import React from "react";
import useInputState from "./useInputState";

function SimpleInputStateHook() {
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");
    return (
        <div>
            <h1>Email is : {email}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>

            <h1>Password is : {password}</h1>
            <input value={password}  onChange={updatePassword} />
            <button onClick={resetPassword}>Submit</button>
        </div>
    );
}

export default SimpleInputStateHook;
