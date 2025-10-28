import { projects } from '@/App';
import '@/styles/ContainerComponents.css';
import { useNavigate } from 'react-router-dom';
import DomeGallery from './dome-gallery/DomeGallery';
import { withBase } from '@/utils/functionsTs';

export const ContainerComponents = () => {
  const navigate = useNavigate();

  const projects_ = projects.slice(1);
  const arrayOfImages = projects_.map(obj => ({
    src: withBase(obj.imageUrl),
    web: obj.path
  }));

  return (
    <article className='container-components'>
      {/* {projects_.map(({ path }) => (
        <button onClick={() => navigate(path)}>{path}</button>
      ))} */}
      <DomeGallery
        images={arrayOfImages}
        grayscale={false}
        overlayBlurColor={'transparent'}
      />
    </article>
  );
};
