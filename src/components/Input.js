import React from 'react';

function Inputfield({label, name, inputType, changeHandler, value }){
    return (
        <>
        <label htmlFor={`${name}-field`}>{label}</label>
        <input
            name={`${name}`}
            id={`${name}-field`}
            type={inputType}
            value={value}
            onChange={(e)=>changeHandler(e.target.value)}
        />
        </>
    );
}

export default Inputfield;