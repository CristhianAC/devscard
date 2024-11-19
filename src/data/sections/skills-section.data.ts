import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { kotlin, astro } from '../helpers/skills';
import {
  apolloGraphql,
  astro,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  angular,
  django
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        angular({level:5, description:'Expert in Angular, my favorite frontend framework, with deep knowledge of its component-based architecture, reactive programming with RxJS, and state management using NgRx. Experienced in building scalable, dynamic web applications while adhering to best practices and leveraging Angular powerful tools for maintainability and performance.'}),
        react({
          level: 4,
          description:
            'Extensive knowledge in React, with expertise in building scalable and efficient user interfaces. Proficient in leveraging React core features, including hooks, context API, and lifecycle methods, to create dynamic and interactive applications. Skilled in state management using tools like Redux, and experienced in optimizing performance for seamless user experiences. Passionate about staying up-to-date with the latest React advancements and best practices.',
        }),
        typescript({
          level: 5,
          description: 'Skilled in TypeScript, with expertise in its type system, generics, and integration with frameworks like React and Angular. Focused on writing clean, strongly-typed code to build scalable and maintainable applications.',
        }),
        tailwindCss({ level: 5 }),
        django({
          level: 4,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        postgreSql({ level: 4 }),
        kotlin({ level: 3 }),
        astro({ level: 3 }),
      
      ],
    },
    {
      title: 'I want to learn',
      skills: [supabase()],
    },
    {
      title: 'I speak',
      skills: [
  
        { icon: 'circle-flags:us', name: 'English - B2' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - Native' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
