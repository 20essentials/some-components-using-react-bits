import './TextType.css';
import TextType from './TextType';

export const ContainerTextType = () => {
  return (
    <article className='container-text-type'>
      <TextType
        text={['Text typing effect', 'for your websites', 'Happy coding!']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter='|'
        className='am-text-type'
      />
    </article>
  );
};
