import Counter from '../Counter/Counter'
import { useEffect, useState } from "react";


function StateExample(){
    const [counter, setCounter] = useState(0);
    useEffect(() => {
    document.title = `Count: ${counter}`;
    }, [counter]);

    return (
        <>  
            <h1>Count: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>To +</button>
            <button onClick={() => setCounter(counter - 1)}>To --</button>
        </>
    ) 
}

export default StateExample;