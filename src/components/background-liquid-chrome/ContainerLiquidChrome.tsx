import LiquidChrome from './LiquidChrome';

export const ContainerLiquidChrome = () => {
  return (
    <article className='ContainerLiquidChrome'>
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={1}
        amplitude={0.6}
        interactive={true}
      />
    </article>
  );
};
