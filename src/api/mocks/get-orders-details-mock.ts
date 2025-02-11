import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "31231243",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 500,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 100,
        product: { name: "Pizza Pepperoni" },
        quantity: 1,
      },

      {
        id: "order-item-2",
        priceInCents: 200,
        product: { name: "Pizza Marguerita" },
        quantity: 2,
      },
    ],
  });
});
