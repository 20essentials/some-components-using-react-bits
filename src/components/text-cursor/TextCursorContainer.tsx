import './TextCursor.css';
import TextCursor from './TextCursor';
import { Novatrix } from 'uvcanvas';

export const TextCursorContainer = () => {
  return (
    <article className='TextCursorContainer'>
      <Novatrix  />

      <TextCursor
        text='😎'
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
    </article>
  );
};
