```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log('Component rendered:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```