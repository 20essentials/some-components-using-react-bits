import { withBase } from '@/utils/functionsTs';
import GlassSurface from './GlassSurface';

export const ContainerGlassSurface = () => {
  return (
    <article className='ContainerGlassSurface'>
      <div className='css-q4jmsc'>
        <div className='css-whs3ib'></div>

        {Array.from({ length: 20 }, (_, i) => {
          return (
            <div className='css-79elbk' key={i}>
              <img
                className='chakra-image css-s7n64d'
                src={withBase(`/assets/gallery/f${i + 1}.avif`)}
                alt='The Summer Of Glass'
              />
              <p className='css-1wr2d3z'>{i + 1}</p>
            </div>
          );
        })}

        <div className='css-whs3ib'></div>
      </div>

      <GlassSurface
        borderRadius={50} // 50px
        backgroundOpacity={0.1} // Opacidad del fondo
        saturation={1} // Saturación del backdrop
        borderWidth={0.07} // Grosor del borde
        brightness={50} // 50%
        opacity={0.93} // Opacidad general
        blur={11} // 11px de blur
        displace={0.5} // Desplazamiento sutil
        distortionScale={-180} // Escala de distorsión
        redOffset={0} // Offset rojo
        greenOffset={10} // Offset verde
        blueOffset={20} // Offset azul
        mixBlendMode='screen' // Mantengo el blend que tenías
        className='glass-superficie'
      ></GlassSurface>
    </article>
  );
};
