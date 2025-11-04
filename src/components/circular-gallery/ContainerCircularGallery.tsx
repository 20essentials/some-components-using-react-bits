import { withBase } from '@/utils/functionsTs';
import CircularGallery from './CircularGallery';

export const ContainerCircularGallery = () => {
  return (
    <article className='ContainerCircularGallery'>
      <div style={{ height: '90vh', position: 'relative' }}>
        <CircularGallery
          bend={3}
          textColor='#ffffff'
          borderRadius={0.05}
          scrollEase={0.02}
          items={Array.from({ length: 20 }, (_, i) => {
            return {
              image: withBase(`/assets/gallery/f${i + 1}.avif`),
              text: `Image ${i + 1}`
            };
          })}
        />
      </div>
    </article>
  );
};
