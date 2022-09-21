import React from 'react';
import Button from "./Button";

function Counter({setFruitcount, fruitCount}) {
    return (
        <>
            <Button
                type="button"
            disabled={fruitCount===0}
            clickHandler={()=>setFruitcount(fruitCount-1)}
            >-
            </Button>
            <p>{fruitCount}</p>
            <Button
                type="button"
                disabled={fruitCount===0}
                clickHandler={()=>setFruitcount(fruitCount+1)}
            >+
            </Button>
        </>
    );
}

export default Counter;