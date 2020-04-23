import axios from 'axios';

const fetchShow = async () =>
  await axios.get(
    'https://api.tvqmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
  );

export default fetchShow;
