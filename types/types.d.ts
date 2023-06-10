export type localMenu = {
  description: string;
  image: string;
  price: string;
  title: string;
};
export type restaurantData = {
  restaurant: {
    alias: string;
    coordinates: coordinates;
    display_phone: string;
    distance: number;
    id: string;
    is_closed: boolean;
    location: location;
    name: string;
    image_url: string;
    price: string;
    review_count: number;
    rating: number;
    categories: { alias: string; title: string }[];
    phone: string;
    transaction: string[];
  };
};

type coordinates = { latitude: number; longitude: number };
type location = {
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  country: string;
  display_address: string[] | null;
  state: string;
  zip_code: sring;
};

type restaurantRoute = {
  route: { key: string; name: string; params: restaurantData; path?: string };
};

type firebaseSelectedITems = {
  selectedItems: {
    items: localMenu[];
  };
};
