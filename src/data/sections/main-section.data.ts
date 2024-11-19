import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Crísthian Agámez',
  role: 'Senior Frontend Developer and Backend',
  details: [
    { label: 'Phone', value: '3045989898', url: 'tel:3045989898' },
    { label: 'Email', value: 'cristhian_agamez@outlook.com', url: 'mailto:cristhian_agamez@outlook.com' },
    { label: 'From', value: 'Barranquilla, Colombia' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '3045989898' },
    { label: 'Email', value: 'cristhian_agamez@outlook.com' },
    { label: 'LinkedIn', value: '/in/cristhianac', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/cristhianac', url: 'https://github.com' },
    
  ],
  description:
    'I am a developer with expertise in frontend and backend development, specializing in creating video games and applications. Passionate about software development, I started programming at the age of 7. I have served as a software architect for companies like Krea and Solventech, and I am currently the CEO of UnderCodes and CTO of Olympus Analytics.',
  tags: [{ name: 'Open for freelance' }, { name: 'UnderCodes, CEO' }, { name: 'Olympus Analytics, CTO' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-CristhianAgamez.pdf',
  },
  links: [ github({ url: 'https://github.com/cristhianac' }), linkedin({ url: 'https://linkedin.com/in/cristhianac' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
