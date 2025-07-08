 

import { useEffect, useState } from 'react';

function App() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);  

    function handleCounter1() {
        setCounter1(counter1 + 1);
    }

    function handleCounterDec1() {
        setCounter1(counter1 - 1);
    }

    function handleCounter2() {
        setCounter2(counter2 + 1);
    }

    function handleCounterDec2() {
        setCounter2(counter2 - 1);
    }

    function callOneTime() {
        console.log("Inside callOneTime function!");
    }

    // useEffect for improving performance
    useEffect(() => {
        callOneTime();
    }, []);

    return (
        <>
            <h1>Counter 1</h1>
            <button onClick={handleCounter1}>Increment Counter 1</button> {counter1}
            <br />
            <button onClick={handleCounterDec1}>Decrement Counter 1</button> {counter1}
            <br />
            <h1>Counter 2</h1>
            <button onClick={handleCounter2}>Increment Counter 2</button> {counter2}
            <br />
            <button onClick={handleCounterDec2}>Decrement Counter 2</button> {counter2}
        </>
    );
}

export default App;
