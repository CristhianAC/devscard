import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-3.jpeg'),
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/alan.jpg'),
        name: 'Alan Buscaglia',
        url: '',
      },
      {
        image: import('@/assets/favorites/people/miguel.jpg'),
        name: 'Miguel Angel Duran',
        url: '',
      },
      {
        image: import('@/assets/favorites/people/person-1.jpg'),
        name: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/',
      },
      {
        image: import('@/assets/favorites/people/person-2.jpeg'),
        name: 'Kent Beck',
        url: 'https://www.kentbeck.com/',
      },
      {
        image: import('@/assets/favorites/people/person-3.jpeg'),
        name: 'Eric Evans',
        url: 'https://www.domainlanguage.com/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
