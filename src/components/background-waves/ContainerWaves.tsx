import Waves from './Waves';

export const ContainerWaves = () => {
  return (
    <article className='ContainerWaves'>
      <Waves
        lineColor='#fff5'
        backgroundColor='rgba(0, 0, 0, 0.8)'
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </article>
  );
};
