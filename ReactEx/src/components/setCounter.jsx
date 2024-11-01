import { useEffect, useState } from "react";


export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //The code that we want to run!
        console.log('The count is:', count);

        //Optional Return function!
        return () => {
           
        }

    }, [count]);  //The Dependancy Array!
    
    return (
        <div style={{ backgroundColor: 'black', height: 870, 
        textAlign: 'center'}}>
            <div>
            <h1 style={{color: 'white'}}>Count: {count}</h1>
            <button style={{
                backgroundColor: 'purple', width: 150,
                height: 50, borderRadius: 5, border: 'none',
                color: 'white', fontSize: 20
            }}
            onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button style={{
                backgroundColor: 'purple', width: 150,
                height: 50, borderRadius: 5, border: 'none',
                color: 'white', fontSize: 20, marginLeft: 10
            }} onClick={() => setCount(count + 1)}>
                Increment
            </button>
                </div>
                <div>

            <button style={{     backgroundColor: 'purple', width: 150,
                height: 50, borderRadius: 5, border: 'none',
                color: 'white', fontSize: 20, marginTop: 10}} 
                onClick={() => setCount(0)}>Reset</button>
                </div>
        </div>
    )
}