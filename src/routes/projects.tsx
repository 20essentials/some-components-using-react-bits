import { ContainerASCIIText } from '@/components/ascii-text/ASCIITextContainer';
import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ContainerCurvedLoop } from '@/components/curved-loop/ContainerCurvedLoop';
import { DecryptedTextContainer } from '@/components/decrypted-text/DecryptedTextContainer';
import { ContainerFallingText } from '@/components/falling-text/FallingTextContainer';
import { ContainerFuzzyText } from '@/components/fuzzy-text/ContainerFuzzyText';
import { ContainerGradientText } from '@/components/gradient-text/ContainerGradientText';
import { ContainerScrollReveal } from '@/components/scroll-reveal/ContainerScrollReveal';
import { ContainerScrollVelocity } from '@/components/scroll-velocity/ContainerScrollVelocity';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { TextCursorContainer } from '@/components/text-cursor/TextCursorContainer';
import { ContainerTextPressure } from '@/components/text-pressure/ContainerTextPressure';
import { ContainerTextType } from '@/components/text-type/ContainerTextType';
import { ContainerTrueFocus } from '@/components/true-focus/TrueFocusContainer';
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
    imageUrl: '/assets/.avif',
    path: '/scroll-velocity',
    element: <ContainerScrollVelocity />
  },
  { imageUrl: '', path: '*', element: <Home /> }
];

export const pathsAndImages = projects.slice(1, -1);
