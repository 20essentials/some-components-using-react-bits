import { withBase } from '@/utils/functionsTs';
import ProfileCard from './ProfileCard';

export const ContainerProfileCard = () => {
  return (
    <article className='ContainerProfileCard'>
      <ProfileCard
        name='Nikolai Smith'
        title='Software Engineer'
        handle='nikolai'
        status='Online'
        contactText='Contact Me'
        avatarUrl={withBase('/assets/random-person.webp')}
        iconUrl={withBase('/assets/favicon.webp')}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
      />
    </article>
  );
};
