export const formatSeasons = (allEpisodes) => {
  const seasons = {};
  // console.log(allEpisodes);

  allEpisodes.forEach((e) => {
    if (!seasons.hasOwnProperty(`Season ${e.season}`)) {
      seasons[`Season ${e.season}`] = [];
    }

    seasons[`Season ${e.season}`].push(e);
  });
  // console.log(seasons);
  return seasons;
};
