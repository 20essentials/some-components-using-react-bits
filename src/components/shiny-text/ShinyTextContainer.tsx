import ShinyText from './ShinyText';

export const ShinyTextContainer = () => {
  return (
    <article className='container-shiny-text'>
      <ShinyText
        text='Just some shiny text!'
        disabled={false}
        speed={3}
        className='custom-class'
      />
    </article>
  );
};
