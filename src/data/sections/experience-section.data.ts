import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import { angular, django, tailwindCss } from '../helpers/skills';
import {
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'CEO, Founder and Developer',
      company: 'UnderCodes',
      image: import('@/assets/logos/MockupLogo.jpg'),
      dates: [new Date('2024-02'), null],
      description: `
        
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), typescript(), angular(), django()],
      },
      links: [ linkedin({ url: 'https://www.linkedin.com/company/undercodes/' })],
    },
    {
      role: 'CTO & Software Architect',
      company: 'Olympus Analytics',
      image: import('@/assets/logos/Logo - Olympus Analytics.png'),
      dates: [new Date('2024-02'), null],
      description: `
        `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), django(), eslint(), tailwindCss(), typescript()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
