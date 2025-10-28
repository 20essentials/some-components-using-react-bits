import '@/styles/Hero.css';
import SplitText from '@/components/title-split-text/title';
import { withBase } from '@/utils/functionsTs';

export const Hero = () => {
  return (
    <article className='hero'>
      <SplitText
        text='Some Components Using'
        className='textin'
        delay={100}
        duration={0.6}
        ease='power3.out'
        splitType='chars'
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin='-100px'
        textAlign='center'
      />

      <img
        src={withBase('/assets/react-bits-logo.svg')}
        alt='logo'
        className='logo'
      />
    </article>
  );
};
