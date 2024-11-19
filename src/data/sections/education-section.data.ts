import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Systems Engineering',
      institution: 'Universidad del Norte',
      image: import('@/assets/logos/Uninorte.jpeg'),
      dates: [new Date('2021.06'), new Date('2026.06')],
      description: 'Degree. System Engineering.',
      links: [website({ url: 'https://www.uninorte.edu.co/' })],
    },
    {
      title: 'Graphic Designer Junior',
      institution: 'Codetec',
      image: import('@/assets/logos/Codetec.jpg'),
      dates: [new Date('2019.02'), new Date('2020')],
      description: "Auxiliar in Graphic design",
      links: [website({ url: 'https://codetec.edu.co/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
