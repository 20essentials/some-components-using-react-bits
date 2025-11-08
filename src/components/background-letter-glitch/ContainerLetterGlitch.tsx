import LetterGlitch from './LetterGlitch';
import './LetterGlitch.css'

export const ContainerLetterGlitch = () => {
  return (
    <article className='ContainerLetterGlitch'>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
      />
    </article>
  );
};
