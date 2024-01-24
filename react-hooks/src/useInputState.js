import React from "react";
import { useState } from "react";

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (evt) => {
        setValue(evt.target.value);
    };
    const resetValue = () => {
        setValue("");
    };

    return [value, handleChange, resetValue];
}
