import { useState } from 'react';
import './Stepper.css';
import Stepper, { Step } from './Stepper';

export const ContainerStepper = () => {
  const [name, setName] = useState('');

  return (
    <article className='ContainerStepper'>
      <Stepper
        initialStep={1}
        onStepChange={step => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log('All steps completed!')}
        backButtonText='Previous'
        nextButtonText='Next'
      >
        <Step>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <img
            style={{
              height: '100px',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center -70px',
              borderRadius: '15px',
              marginTop: '1em'
            }}
            src='https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894'
          />
          <p>Custom step content!</p>
        </Step>
        <Step>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Your name?'
          />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </article>
  );
};
