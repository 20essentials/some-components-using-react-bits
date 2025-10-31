import { projects } from '@/App';
import '@/styles/ContainerComponents.css';
import DomeGallery from './dome-gallery/DomeGallery';
import { withBase } from '@/utils/functionsTs';

export const ContainerComponents = () => {
  const arrayOfImages = projects.map(obj => ({
    src: withBase(obj.imageUrl),
    web: obj.path
  }));

  return (
    <article className='container-components'>
      <DomeGallery
        images={arrayOfImages}
        grayscale={false}
        overlayBlurColor={'transparent'}
      />
    </article>
  );
};
