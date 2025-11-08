import Iridescence from './Iridescence';

export const ContainerIridescence = () => {
  return (
    <article className='ContainerIridescence'>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    </article>
  );
};
