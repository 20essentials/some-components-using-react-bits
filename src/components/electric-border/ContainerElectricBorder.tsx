import ElectricBorder from './ElectricBorder';

export const ContainerElectricBorder = () => {
  return (
    <article className='ContainerElectricBorder'>
      <ElectricBorder
        color='#7df9ff'
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        <section className="am-card">
          <h2>Electric</h2>
        </section>
      </ElectricBorder>
    </article>
  );
};
