import React from 'react';

function Button({children,clickHandler, type, disabled}) {
    return (
        <button
            onClick={clickHandler}
            type={type}
            disabled={disabled || false}>
            {children}
        </button>
    );
}

export default Button;