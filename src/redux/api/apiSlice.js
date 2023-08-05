import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gadget-galaxy-pc-builder-backend.vercel.app/",
  }),
  tagTypes: ["updatedProduct"],
  endpoints: () => ({}),
});
