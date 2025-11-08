import { ContainerASCIIText } from '@/components/ascii-text/ASCIITextContainer';
import { ContainerThreads } from '@/components/backgroudn-threads/ContainerThreads';
import { ContainerAurora } from '@/components/background-aurora/ContainerAurora';
import { ContainerBeams } from '@/components/background-beams/ContainerBeams';
import { ContainerColorBends } from '@/components/background-color-bends/ContainerColorBends';
import { ContainerDither } from '@/components/background-dither/ContainerDither';
import { ContainerDotGrid } from '@/components/background-dot-grid/ContainerDotGrid';
import { ContainerFaultyTerminal } from '@/components/background-faulty-terminal/ContainerFaultyTerminal';
import { ContainerGalaxy } from '@/components/background-galaxy/ContainerGalaxy';
import { ContainerGridScan } from '@/components/background-grid-scan/ContainerGridScan';
import { ContainerHyperspeed } from '@/components/background-hyperspeed/ContainerHyperspeed';
import { ContainerIridescence } from '@/components/background-iridiscence/ContainerIridescence';
import { ContainerLightRays } from '@/components/background-light-rays/ContainerLightRays';
import { ContainerPixelBlast } from '@/components/background-pixel-blast/ContainerPixelBlast';
import { ContainerPrismaticBurst } from '@/components/background-prismatic-burst/ContainerPrismaticBurst';
import { ContainerRippleGrid } from '@/components/background-ripple-grid/ContainerRippleGrid';
import { ContainerSilk } from '@/components/background-silk/ContainerSilk';
import { ContainerLightning } from '@/components/background-trueno-lightning/ContainerLightning';
import { ContainerGradientBlinds } from '@/components/bakcground-gradient-blind/ContainerGradientBlinds';
import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerChromaGrid } from '@/components/chroma-grid/ContainerChromaGrid';
import { ContainerCircularGallery } from '@/components/circular-gallery/ContainerCircularGallery';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ContainerCounter } from '@/components/counter/ContainerCounter';
import { ContainerCrosshair } from '@/components/crosshair/ContainerCrosshair';
import { ContainerCubes } from '@/components/cubes/ContainerCubes';
import { ContainerCurvedLoop } from '@/components/curved-loop/ContainerCurvedLoop';
import { ContainerDarkVeil } from '@/components/dark-veil/ContainerDarkVeil';
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
import { ContainerInfiniteMenu } from '@/components/infinite-menu/ContainerInfiniteMenu';
import { ContainerLanyard } from '@/components/lanyard/ContainerLanyard';
import { ContainerLaserFlow } from '@/components/laser-flow/ContainerLaserFlow';
import { ContainerLiquidEther } from '@/components/liquid-ether/ContainerLiquidEther';
import { ContainerMagicBento } from '@/components/magic-bento/ContainerMagicBento';

import { ContainerNoise } from '@/components/noise/ContainerNoise';
import { ContainerPixelCard } from '@/components/pixel-card/ContainerPixelCard';
import { ContainerPixelTransition } from '@/components/pixel-transition/ContainerPixelTransition';
import { ContainerPrismHover } from '@/components/prism-background-hover/ContainerPrism';
import { ContainerPrism } from '@/components/prism-background/ContainerPrism';
import { ContainerProfileCard } from '@/components/profile-card/ContainerProfileCard';
import { ContainerRibbons } from '@/components/ribbons/ContainerRibbons';
import { ContainerScrollReveal } from '@/components/scroll-reveal/ContainerScrollReveal';
import { ContainerScrollStack } from '@/components/scroll-stack/ContainerScrollStack';
import { ContainerScrollVelocity } from '@/components/scroll-velocity/ContainerScrollVelocity';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { ContainerSplashCursor } from '@/components/splash-cursor/ContainerSplashCursor';
import { ContainerStaggeredMenu } from '@/components/staggered-menu/ContainerStaggeredMenu';
import { ContainerStepper } from '@/components/stepper/ContainerStepper';
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
  {
    imageUrl: '/assets/bg-image-infinite-menu.avif',
    path: '/infinite-menu',
    element: <ContainerInfiniteMenu />
  },
  {
    imageUrl: '/assets/container-stepper-bg.avif',
    path: '/container-stepper',
    element: <ContainerStepper />
  },
  {
    imageUrl: '/assets/bg-liquid-ether.avif',
    path: '/liquid-ether',
    element: <ContainerLiquidEther />
  },
  {
    imageUrl: '/assets/background-prism-rotate.avif',
    path: '/prism-background',
    element: <ContainerPrism />
  },
  {
    imageUrl: '/assets/prism-background-hover.avif',
    path: '/prism-background-hover',
    element: <ContainerPrismHover />
  },
  {
    imageUrl: '/assets/bg-dark-veil.avif',
    path: '/dark-veil',
    element: <ContainerDarkVeil />
  },
  {
    imageUrl: '/assets/bg-silk.avif',
    path: '/silk',
    element: <ContainerSilk />
  },
  {
    imageUrl: '/assets/bg-light-ray.avif',
    path: '/light-rays',
    element: <ContainerLightRays />
  },
  {
    imageUrl: '/assets/pixel-bg.avif',
    path: '/pixel-blast',
    element: <ContainerPixelBlast />
  },
  {
    imageUrl: '/assets/bg-color-bend.avif',
    path: '/color-bends',
    element: <ContainerColorBends />
  },
  {
    imageUrl: '/assets/background-aurora.avif',
    path: '/background-aurora',
    element: <ContainerAurora />
  },
  {
    imageUrl: '/assets/background-blind.avif',
    path: '/background-blind',
    element: <ContainerGradientBlinds />
  },
  {
    imageUrl: '/assets/bg-grid-scan.avif',
    path: '/grid-scan',
    element: <ContainerGridScan />
  },
  {
    imageUrl: '/assets/beam-bg.avif',
    path: '/background-beams',
    element: <ContainerBeams />
  },
  {
    imageUrl: '/assets/bg-trueno.avif',
    path: '/background-trueno',
    element: <ContainerLightning />
  },
  {
    imageUrl: '/assets/bg-prismatic-burst.avif',
    path: '/background-prismatic-burst',
    element: <ContainerPrismaticBurst />
  },
  {
    imageUrl: '/assets/bg-galaxy.avif',
    path: '/background-galaxy',
    element: <ContainerGalaxy />
  },
  {
    imageUrl: '/assets/bg-dither.avif',
    path: '/background-dither',
    element: <ContainerDither />
  },
  {
    imageUrl: '/assets/bg-terminal.avif',
    path: '/background-faulty-terminal',
    element: <ContainerFaultyTerminal />
  },
  {
    imageUrl: '/assets/background-ripple.avif',
    path: '/background-ripple-grid',
    element: <ContainerRippleGrid />
  },
  {
    imageUrl: '/assets/bg-dot.avif',
    path: '/background-dot-grid',
    element: <ContainerDotGrid />
  },
  {
    imageUrl: '/assets/bg-threads.avif',
    path: '/background-threads',
    element: <ContainerThreads />
  },
  {
    imageUrl: '/assets/bg-hyperspeed.avif',
    path: '/background-hyperspeed',
    element: <ContainerHyperspeed />
  },
  {
    imageUrl: '/assets/background-iridescence.avif',
    path: '/background-iridescence',
    element: <ContainerIridescence />
  },
  { imageUrl: '', path: '*', element: <Home /> }
];

export const pathsAndImages = projects.slice(1, -1);
