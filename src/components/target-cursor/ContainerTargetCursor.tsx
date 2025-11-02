import TargetCursor from './TargetCursor';

export const ContainerTargetCursor = () => {
  return (
    <article className='ContainerTargetCursor'>
      <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <h1>Hover over the elements below</h1>
        <section className='container-buttons'>
          <button className='cursor-target'>Click me!</button>
          <div className='cursor-target'>Hover target</div>
          <div className='cursor-target'>Hello and Bye</div>
        </section>
      </div>
    </article>
  );
};
