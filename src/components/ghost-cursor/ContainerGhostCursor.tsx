import GhostCursor from './GhostCursor';

export const ContainerGhostCursor = () => {
  return (
    <article className='ContainerGhostCursor'>
          <GhostCursor
          // Visuals
          color='#B19EEF'
          brightness={1}
          edgeIntensity={0}
          // Trail and motion
          trailLength={50}
          inertia={0.5}
          // Post-processing
          grainIntensity={0.05}
          bloomStrength={0.1}
          bloomRadius={1.0}
          bloomThreshold={0.025}
          // Fade-out behavior
          fadeDelayMs={1000}
          fadeDurationMs={1500}
        />
    </article>
  );
};
