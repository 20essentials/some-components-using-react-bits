import ASCIIText from './ASCIIText';
import { Tranquiluxe } from 'uvcanvas';

export const ContainerASCIIText = () => {
  return (
    <article className='container-asciiText'>
      <Tranquiluxe />
      <ASCIIText text='hello_world' enableWaves={true} asciiFontSize={5} />
    </article>
  );
};
