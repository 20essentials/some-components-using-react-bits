import Silk from './Silk';
import './Silk.css'

export const ContainerSilk = () => {
  return (
    <article className='ContainerSilk'>
      <Silk
        speed={5}
        scale={1}
        color='#04aa6d'
        noiseIntensity={1.5}
        rotation={0}
      />
    </article>
  );
};
