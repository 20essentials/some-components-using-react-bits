import ChromaGrid from './ChromaGrid';

const items = [
  {
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    title: 'Sarah Johnson',
    subtitle: 'Frontend Developer',
    handle: '@sarahjohnson',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
    url: 'https://github.com/sarahjohnson'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
    title: 'Mike Chen',
    subtitle: 'Backend Engineer',
    handle: '@mikechen',
    borderColor: '#10B981',
    gradient: 'linear-gradient(180deg, #10B981, #000)',
    url: 'https://linkedin.com/in/mikechen'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Emily Davis',
    subtitle: 'UI/UX Designer',
    handle: '@emilydavis',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(145deg, #F59E0B, #000)',
    url: 'https://dribbble.com/emilydavis'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    title: 'James Wilson',
    subtitle: 'Full Stack Developer',
    handle: '@jameswilson',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(180deg, #EF4444, #000)',
    url: 'https://github.com/jameswilson'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    title: 'Olivia Martinez',
    subtitle: 'Product Manager',
    handle: '@oliviamartinez',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: 'https://linkedin.com/in/oliviamartinez'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    title: 'Liam Brown',
    subtitle: 'DevOps Engineer',
    handle: '@liambrown',
    borderColor: '#14B8A6',
    gradient: 'linear-gradient(180deg, #14B8A6, #000)',
    url: 'https://linkedin.com/in/liambrown'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Sophia Lee',
    subtitle: 'Data Scientist',
    handle: '@sophialee',
    borderColor: '#F43F5E',
    gradient: 'linear-gradient(145deg, #F43F5E, #000)',
    url: 'https://github.com/sophialee'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/81.jpg',
    title: 'Noah Anderson',
    subtitle: 'Mobile Developer',
    handle: '@noahanderson',
    borderColor: '#22D3EE',
    gradient: 'linear-gradient(180deg, #22D3EE, #000)',
    url: 'https://github.com/noahanderson'
  }
];

export const ContainerChromaGrid = () => {
  return (
    <article className='ContainerChromaGrid'>
           <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease='power3.out'
        />
    </article>
  );
};
