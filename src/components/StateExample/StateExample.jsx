import Counter from '../Counter/Counter'
import { useEffect, useState } from "react";


function StateExample(){
    const [seconds, setSeconds] = useState(0);
        
    useEffect(() => {
        const intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
        }, 1000);
        
        return () => {
        clearInterval(intervalId);
        };
    }, []);

    return (
        <>  
            <h1>Proshlo: {seconds}</h1>
        </>
    ) 
}

export default StateExample;