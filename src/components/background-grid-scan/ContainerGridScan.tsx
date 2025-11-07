import { GridScan } from './GridScan';

export const ContainerGridScan = () => {
  return (
    <article className='ContainerGridScan'>
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor='#392e4e'
        gridScale={0.1}
        scanColor='#FF9FFC'
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
    </article>
  );
};
