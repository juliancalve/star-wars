import axiosInstance from "../api/api";

const BASE_URL = "/people";

export const getResidents = (residents) => {
  const mapped = residents.map((residentId) =>
    axiosInstance.get(`${BASE_URL}/${residentId}`)
  );
  return Promise.allSettled(mapped);
};
