import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo } from '../helpers/links';
import { angular, astro, django, typescript } from '../helpers/skills';
import { eslint, prettier, tailwindCss } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'npx-gaia-gis',

      dates: [new Date('2024-11'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer'] },
        { label: 'Company', value: 'Olympus Analytics' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],

      description:
        'The Collision Visualization project is a web application designed to visualize collision data, raster images, and other geospatial information in Colombia. Users can view points representing collision locations, tree distributions, and city temperature data on an interactive map. The application provides advanced tools for data manipulation and visualization, enabling users to gain insights into spatial patterns and trends.',
      tagsList: {
        title: 'Technologies',
        tags: [angular(), eslint(), prettier(), typescript()],
      },
      links: [demo({ url: 'https://www.npmjs.com/package/ngx-gaia-gis' })],
    },
    {
      name: 'Student Management System',

      dates: [new Date('2024-09'), null],
      details: [
        { label: 'Team size', value: '8 people' },
        { label: 'My role', value: ['Designer'] },
        { label: 'Company', value: 'Universidad del Norte' },
        { label: 'Category', value: ['Web app'] },
      ],
      description:
        'The Institutional Resume project is a data analytics dashboard designed for decision-making by executives at Universidad del Norte. It provides comprehensive insights and visualizations of institutional data, enabling informed decisions based on real-time analytics. The dashboard is built to be user-friendly and highly interactive, offering various tools for data manipulation and visualization.',
      tagsList: {
        title: 'Technologies',
        tags: [angular(), typescript()],
      },
      links: [],
    },
    {
      name: 'Escala',
      dates: [new Date('2024-09'), new Date('2024-11')],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Software Architect', 'Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'Olympus Analytics' },
        { label: 'Category', value: ['Web app'] },
      ],
      description:
        'The Escala Visualization project is a web application designed to visualize collision data, raster images, and other geospatial information in Colombia. Users can view points representing collision locations, tree distributions, and city temperature data on an interactive map. The application provides advanced tools for data manipulation and visualization, enabling users to gain insights into spatial patterns and trends.',
      tagsList: {
        title: 'Technologies',
        tags: [angular(), tailwindCss(), django(), typescript()],
      },
      links: [],
    },
    {
      name: 'UnderCodes Web',
      image: import('@/assets/portfolio/MockupLogo.jpg'),
      dates: [new Date('2024-01'), new Date('2024-03')],
      details: [
        { label: 'Team size', value: '1 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'UnderCodes' },
        { label: 'Category', value: ['Web app'] },
      ],
      description:
        'UnderCodes Web is the landing page for UnderCodes, designed to showcase the company’s services and portfolio. It provides an overview of the company’s expertise in web development and design, highlighting key projects and client testimonials. The landing page is built with modern web technologies to ensure a responsive and engaging user experience.',
      tagsList: {
        title: 'Technologies',
        tags: [astro(), tailwindCss(), typescript()],
      },
      links: [demo({ url: 'http://www.undercodes.net' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
