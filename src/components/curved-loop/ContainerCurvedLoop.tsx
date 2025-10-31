import CurvedLoop from './CurvedLoop';
import { Zenitho } from 'uvcanvas';

export const ContainerCurvedLoop = () => {
  return (
    <article className='container-curved-loop'>
      <Zenitho />
      <CurvedLoop
        marqueeText='Ufficiami ✦ Ufficiami ✦ Ufficiami ✦ Ufficiami ✦ Ufficiami ✦'
        speed={3}
        curveAmount={500}
        direction='right'
        interactive={true}
        className='custom-text-style'
        
      />
    </article>
  );
};
