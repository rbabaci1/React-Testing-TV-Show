import { formatSeasons } from './formatSeasons';
import { episodes as mockEpisodes, season } from '../mockData';

it('formats the seasons correctly', () => {
  const expectedData = { [season]: mockEpisodes };
  const formattedSeasons = formatSeasons(mockEpisodes);

  expect(formattedSeasons[season]).toHaveLength(2);
  expect(formattedSeasons).toEqual(expectedData);
});
