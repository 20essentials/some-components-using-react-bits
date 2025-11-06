import { ContainerASCIIText } from '@/components/ascii-text/ASCIITextContainer';
import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerChromaGrid } from '@/components/chroma-grid/ContainerChromaGrid';
import { ContainerCircularGallery } from '@/components/circular-gallery/ContainerCircularGallery';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ContainerCounter } from '@/components/counter/ContainerCounter';
import { ContainerCrosshair } from '@/components/crosshair/ContainerCrosshair';
import { ContainerCubes } from '@/components/cubes/ContainerCubes';
import { ContainerCurvedLoop } from '@/components/curved-loop/ContainerCurvedLoop';
import { DecryptedTextContainer } from '@/components/decrypted-text/DecryptedTextContainer';
import { ContainerElectricBorder } from '@/components/electric-border/ContainerElectricBorder';
import { ContainerFallingText } from '@/components/falling-text/FallingTextContainer';
import { ContainerFlyingPosters } from '@/components/flying-posters/ContainerFlyingPosters';
import { ContainerFuzzyText } from '@/components/fuzzy-text/ContainerFuzzyText';
import { ContainerGhostCursor } from '@/components/ghost-cursor/ContainerGhostCursor';
import { ContainerGlassSurface } from '@/components/glass-surface/ContainerGlassSurface';
import { ContainerGradientText } from '@/components/gradient-text/ContainerGradientText';
import { ContainerImageTrailVersion8 } from '@/components/image-trail-variant-8/ContainerImageTrail';
import { ContainerImageTrail } from '@/components/image-trail/ContainerImageTrail';
import { ContainerLanyard } from '@/components/lanyard/ContainerLanyard';
import { ContainerLaserFlow } from '@/components/laser-flow/ContainerLaserFlow';
import { ContainerMagicBento } from '@/components/magic-bento/ContainerMagicBento';

import { ContainerNoise } from '@/components/noise/ContainerNoise';
import { ContainerPixelCard } from '@/components/pixel-card/ContainerPixelCard';
import { ContainerPixelTransition } from '@/components/pixel-transition/ContainerPixelTransition';
import { ContainerProfileCard } from '@/components/profile-card/ContainerProfileCard';
import { ContainerRibbons } from '@/components/ribbons/ContainerRibbons';
import { ContainerScrollReveal } from '@/components/scroll-reveal/ContainerScrollReveal';
import { ContainerScrollStack } from '@/components/scroll-stack/ContainerScrollStack';
import { ContainerScrollVelocity } from '@/components/scroll-velocity/ContainerScrollVelocity';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { ContainerSplashCursor } from '@/components/splash-cursor/ContainerSplashCursor';
import { ContainerStaggeredMenu } from '@/components/staggered-menu/ContainerStaggeredMenu';
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
  {
    imageUrl: '/assets/scrollstack-background.avif',
    path: '/scroll-stack',
    element: <ContainerScrollStack />
  },
  {
    imageUrl: '/assets/magic-bento-background.avif',
    path: '/magic-bento',
    element: <ContainerMagicBento />
  },
  {
    imageUrl: '/assets/circular-gallery-bg.avif',
    path: '/circular-gallery',
    element: <ContainerCircularGallery />
  },
  {
    imageUrl: '/assets/glasssurface-background.avif',
    path: '/glass-surface',
    element: <ContainerGlassSurface />
  },
  {
    imageUrl: '/assets/chroma-grid-bg.avif',
    path: '/chroma-grid',
    element: <ContainerChromaGrid />
  },
  {
    imageUrl: '/assets/staggered-menu-background.avif',
    path: '/staggered-menu',
    element: <ContainerStaggeredMenu />
  },
  {
    imageUrl: '/assets/card-lanyard-bg.avif',
    path: '/card-lanyard',
    element: <ContainerLanyard />
  },
  {
    imageUrl: '/assets/profile-card-bg.avif',
    path: '/card-profile',
    element: <ContainerProfileCard />
  },
  {
    imageUrl: '/assets/pixel-card-background.avif',
    path: '/pixel-card',
    element: <ContainerPixelCard />
  },
  {
    imageUrl: '/assets/flying-posters-bg.avif',
    path: '/flying-posters',
    element: <ContainerFlyingPosters />
  },
  {
    imageUrl: '/assets/counter-bg.avif',
    path: '/counter',
    element: <ContainerCounter />
  },
  { imageUrl: '', path: '*', element: <Home /> }
];

export const pathsAndImages = projects.slice(1, -1);
