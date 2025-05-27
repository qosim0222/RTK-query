import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6822f6edb342dce800500cb4.mockapi.io",
  }),
  tagTypes: ["PRODUCT"], 
  endpoints: () => ({}), 
});
