export const planetsTransform = (responses) =>
  responses?.reduce(
    (acc, resp) => {
      acc.planets = [...acc.planets, ...resp?.value?.data?.results];
      return acc;
    },
    { planets: [] }
  );
