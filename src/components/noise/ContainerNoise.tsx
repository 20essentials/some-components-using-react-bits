import Noise from './Noise';

export const ContainerNoise = () => {
  return (
    <article className='ContainerNoise'>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
    </article>
  );
};
