import Lanyard from './Lanyard';

export const ContainerLanyard: React.FC = () => {
  return (
    <article className='ContainerLanyard'>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </article>
  );
};
