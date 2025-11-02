import Cubes from './Cubes';

export const ContainerCubes = () => {
  return (
    <article className='ContainerCubes'>
      <Cubes
        gridSize={8}
        maxAngle={180}
        radius={4}
        borderStyle='2px dashed #5227FF'
        faceColor='#1a1a2e'
        rippleColor='#ff6b6b'
        rippleSpeed={1.5}
        autoAnimate={true}
        rippleOnClick={true}
      />
    </article>
  );
};
