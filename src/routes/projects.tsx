import { ContainerASCIIText } from '@/components/ascii-text/ASCIITextContainer';
import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ContainerCrosshair } from '@/components/crosshair/ContainerCrosshair';
import { ContainerCubes } from '@/components/cubes/ContainerCubes';
import { ContainerCurvedLoop } from '@/components/curved-loop/ContainerCurvedLoop';
import { DecryptedTextContainer } from '@/components/decrypted-text/DecryptedTextContainer';
import { ContainerElectricBorder } from '@/components/electric-border/ContainerElectricBorder';
import { ContainerFallingText } from '@/components/falling-text/FallingTextContainer';
import { ContainerFuzzyText } from '@/components/fuzzy-text/ContainerFuzzyText';
import { ContainerGhostCursor } from '@/components/ghost-cursor/ContainerGhostCursor';
import { ContainerGradientText } from '@/components/gradient-text/ContainerGradientText';
import { ContainerImageTrailVersion8 } from '@/components/image-trail-variant-8/ContainerImageTrail';
import { ContainerImageTrail } from '@/components/image-trail/ContainerImageTrail';
import { ContainerLaserFlow } from '@/components/laser-flow/ContainerLaserFlow';
import { ContainerNoise } from '@/components/noise/ContainerNoise';
import { ContainerPixelTransition } from '@/components/pixel-transition/ContainerPixelTransition';
import { ContainerRibbons } from '@/components/ribbons/ContainerRibbons';
import { ContainerScrollReveal } from '@/components/scroll-reveal/ContainerScrollReveal';
import { ContainerScrollVelocity } from '@/components/scroll-velocity/ContainerScrollVelocity';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { ContainerSplashCursor } from '@/components/splash-cursor/ContainerSplashCursor';
import { ContainerTargetCursor } from '@/components/target-cursor/ContainerTargetCursor';
import { TextCursorContainer } from '@/components/text-cursor/TextCursorContainer';
import { ContainerTextPressure } from '@/components/text-pressure/ContainerTextPressure';
import { ContainerTextType } from '@/components/text-type/ContainerTextType';
import { ContainerTrueFocus } from '@/components/true-focus/TrueFocusContainer';
import { ContainerVariableProximity } from '@/components/variable-proximity/ContainerVariableProximity';
import { Home } from '@/Home';

export const projects = [
  { imageUrl: '', path: '/', element: <Home /> },
  {
    imageUrl: '/assets/blur-text.avif',
    path: '/blur-text',
    element: <ContainerBlurText />
  },
  {
    imageUrl: '/assets/circular-text.avif',
    path: '/circular-text',
    element: <ContainerCircularText />
  },
  {
    imageUrl: '/assets/type-text.avif',
    path: '/text-type',
    element: <ContainerTextType />
  },
  {
    imageUrl: '/assets/shuffle-text.avif',
    path: '/shuffle-text',
    element: <ShuffleContainer />
  },
  {
    imageUrl: '/assets/shiny-text-bg-result.avif',
    path: '/shiny-text',
    element: <ShinyTextContainer />
  },
  {
    imageUrl: '/assets/text-pressure.avif',
    path: '/text-pressure',
    element: <ContainerTextPressure />
  },
  {
    imageUrl: '/assets/curved-loop.avif',
    path: '/curved-loop',
    element: <ContainerCurvedLoop />
  },
  {
    imageUrl: '/assets/fuzzy-text-background.avif',
    path: '/fuzzy-text',
    element: <ContainerFuzzyText />
  },
  {
    imageUrl: '/assets/gradient-color-bg.avif',
    path: '/gradient-text',
    element: <ContainerGradientText />
  },
  {
    imageUrl: '/assets/falling-text.avif',
    path: '/falling-text',
    element: <ContainerFallingText />
  },
  {
    imageUrl: '/assets/text-cursor.avif',
    path: '/text-cursor',
    element: <TextCursorContainer />
  },
  {
    imageUrl: '/assets/decrypted-text-bg.avif',
    path: '/decrypted-text',
    element: <DecryptedTextContainer />
  },
  {
    imageUrl: '/assets/true-focus-bg.avif',
    path: '/true-focus',
    element: <ContainerTrueFocus />
  },
  {
    imageUrl: '/assets/scroll-reveal.avif',
    path: '/scroll-reveal',
    element: <ContainerScrollReveal />
  },
  {
    imageUrl: '/assets/ascii-text-bg.avif',
    path: '/ascii-text',
    element: <ContainerASCIIText />
  },
  {
    imageUrl: '/assets/react-bits-scroll-down.avif',
    path: '/scroll-velocity',
    element: <ContainerScrollVelocity />
  },
  {
    imageUrl: '/assets/bg-proximity.avif',
    path: '/variable-proximity',
    element: <ContainerVariableProximity />
  },
  {
    imageUrl: '/assets/bg-electric-border.avif',
    path: '/electric-border',
    element: <ContainerElectricBorder />
  },
  {
    imageUrl: '/assets/pixel-transition-bg.avif',
    path: '/pixel-transition',
    element: <ContainerPixelTransition />
  },
  {
    imageUrl: '/assets/target-cursor-background.avif',
    path: '/target-cursor',
    element: <ContainerTargetCursor />
  },
  {
    imageUrl: '/assets/lazer-flow-bg.avif',
    path: '/laser-flow',
    element: <ContainerLaserFlow />
  },
  {
    imageUrl: '/assets/container-ghost-cursor.avif',
    path: '/ghost-cursor',
    element: <ContainerGhostCursor />
  },
  {
    imageUrl: '/assets/container-cubes-bg.avif',
    path: '/container-cubes',
    element: <ContainerCubes />
  },
  {
    imageUrl: '/assets/noise-bg.avif',
    path: '/noise',
    element: <ContainerNoise />
  },
  {
    imageUrl: '/assets/crosshair-bg.avif',
    path: '/crosshair',
    element: <ContainerCrosshair />
  },
  {
    imageUrl: '/assets/image-trail-version-4.avif',
    path: '/image-trail',
    element: <ContainerImageTrail />
  },
  {
    imageUrl: '/assets/image-trail-version-8-background.avif',
    path: '/image-trail-variant-8',
    element: <ContainerImageTrailVersion8 />
  },
  {
    imageUrl: '/assets/ribbon-bg.avif',
    path: '/ribbons',
    element: <ContainerRibbons />
  },
  {
    imageUrl: '/assets/splash-cursor-bg.avif',
    path: '/splash-cursor',
    element: <ContainerSplashCursor />
  },
  { imageUrl: '', path: '*', element: <Home /> }
];

export const pathsAndImages = projects.slice(1, -1);
