export const episodes = [
  {
    id: 101,
    name: 'chapter 11',
    runtime: 90,
    season: 99,
    number: 11,
    image: { medium: '/first' },
    summary: '<p>just watch it</p>',
  },
  {
    id: 102,
    name: 'chapter 12',
    runtime: 100,
    season: 99,
    number: 12,
    image: { medium: '/second' },
    summary: '<p>do not watch it</p>',
  },
];

export const season = 'Season 99';

export const mockData = {
  data: {
    name: 'rabah',
    image: { original: '/original' },
    summary: '<p>A love letter<p>',
    _embedded: {
      episodes: episodes,
    },
  },
};
