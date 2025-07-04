import React, { useState } from 'react';

const Child3 = () => {
    // Correctly initialize state using useState
    const [defaultFruit, setDefaultFruit] = useState('Apple');

    // Function to change the fruit name
    function changeName(fruit) {
        setDefaultFruit(fruit);  
		console.log(defaultFruit);
    }

    return (
        <div>
            <hr />
            <div>
                {defaultFruit}  
            </div>
            <button onClick={() => changeName('Banana')}>Click here to change fruit</button>
        </div>
    );
};

export default Child3;
