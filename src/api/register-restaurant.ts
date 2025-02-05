import { api } from "../lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  return api.post("/restaurants", {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
