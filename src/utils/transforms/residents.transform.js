export const residentsTransform = (responses) =>
  responses.map((resp) => ({ ...resp?.value?.data }));
