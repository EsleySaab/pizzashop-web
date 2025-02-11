import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "10/02/2025", receipt: 2000 },
    { date: "11/02/2025", receipt: 800 },
    { date: "12/02/2025", receipt: 8000 },
    { date: "13/02/2025", receipt: 540 },
    { date: "14/02/2025", receipt: 400 },
    { date: "15/02/2025", receipt: 700 },
    { date: "16/02/2025", receipt: 1000 },
  ]);
});
