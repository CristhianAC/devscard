import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/Gustavo.jpg'),
      author: 'Gustavo De La Vega',
      relation: 'He is helping UnderCodes with the growing up of the enterprice',
      content:"",
      links: [linkedin({ url: 'https://www.linkedin.com/in/gustavodelavega/' })],
    },
    {
      image: import('@/assets/testimonials/Augusto.jpg'),
      author: 'Augusto Salazar',
      relation: 'My professor and mentor in the university',
      content:'',
      links: [linkedin({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
