import Beams from './Beams';

export const ContainerBeams = () => {
  return (
    <article className='ContainerBeams'>
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor='#ffffff'
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={45}
      />
    </article>
  );
};
