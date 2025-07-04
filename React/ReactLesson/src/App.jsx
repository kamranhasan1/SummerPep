import { useState } from 'react';
import Child from './Child';
import Child2 from './Child2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello world</h1>
      <h2>hello</h2>
      <hr />
      <Child/>
      <hr/>
      <Child2/>
    </>
  );
}

export default App;
