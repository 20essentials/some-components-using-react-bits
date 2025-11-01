import './DecryptedText.css';
import DecryptedText from './DecryptedText';

export const DecryptedTextContainer = () => {
  return (
    <article className='DecryptedTextContainer'>
      <div style={{ marginTop: '4rem' }}>
        <DecryptedText
          text='This text animates when in view'
          animateOn='view'
          revealDirection='center'
          maxIterations={100}

        />
      </div>
    </article>
  );
};
