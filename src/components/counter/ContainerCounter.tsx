import { useState } from 'react';
import Counter from './Counter';

export const ContainerCounter = () => {
  const [value, setValue] = useState(1);

  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => prev - 1);

  return (
    <article className='ContainerCounter' style={{ textAlign: 'center' }}>
      <Counter
        value={value}
        places={[100, 10, 1]}
        fontSize={80}
        padding={5}
        gap={10}
        textColor='black'
        fontWeight={900}
      />

      <div className='container-buttons'>
        <button onClick={decrement}>➖</button>
        <button onClick={increment}>➕</button>
      </div>
    </article>
  );
};
