import { withBase } from '@/utils/functionsTs';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#' },
  { label: 'Services', ariaLabel: 'View our services', link: '#' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export const ContainerStaggeredMenu = () => {
  return (
    <article className='ContainerStaggeredMenu'>
      <StaggeredMenu
        position='right'
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor='#fff'
        openMenuButtonColor='#fff'
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl={withBase('/assets/react-bits-logo.svg')}
        accentColor='#ff6b6b'
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </article>
  );
};
