import Ribbons from './Ribbons';

export const ContainerRibbons = () => {
  return (
    <article className='ContainerRibbons'>
      <Ribbons
        baseThickness={34}
        colors={['#0f0', '#f00', '#00f']}
        speedMultiplier={0.5}
        maxAge={1000}
        enableFade={false}
        enableShaderEffect={true}
      />
    </article>
  );
};
