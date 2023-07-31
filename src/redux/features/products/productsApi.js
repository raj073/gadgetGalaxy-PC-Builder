import { api } from "@/redux/api/apiSlice";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: `/products` }),
    }),

    getSingleProduct: builder.query({
      query: (id) => ({ url: `/product/${id}` }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;
