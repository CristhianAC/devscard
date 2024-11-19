import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Cristhian Agamez - Senior Frontend Developer & Backend developer',
    description:
      'Senior Frontend Deveeloper & Backend Developer. I specialize in building websites and web applications with modern technologies like React, Angular, and Django.',
    faviconPath: '/src/assets/YO.png',
  },
  pdf: {
    footer: '',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
