import { API_KEY, BASE_URI } from '@env';

const apiOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getRestaurantsFromYelp = async (city: string) => {
  try {
    const yelpUrl = `${BASE_URI}/businesses/search?term=restaurants&location=${city}`;
    const response = await fetch(yelpUrl, apiOptions);
    return response;
  } catch (e) {
    throw e;
  }
};
export const getRestaurantInfo = async (id: string) => {
  try {
    const yelpUrl = `${BASE_URI}/businesses/${id}`;
    const response = await fetch(yelpUrl, apiOptions);
    return response;
  } catch (e) {
    throw e;
  }
};
