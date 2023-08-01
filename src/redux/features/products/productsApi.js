import { api } from "@/redux/api/apiSlice";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: `/products` }),
    }),

    getSingleProduct: builder.query({
      query: (id) => ({ url: `/product/${id}` }),
    }),

    getCPUProcessorProduct: builder.query({
      query: () => ({ url: `/cpu-processor` }),
    }),

    getMotherboardProduct: builder.query({
      query: () => ({ url: `/motherboard` }),
    }),

    getRAMProduct: builder.query({
      query: () => ({ url: `/ram` }),
    }),

    getPowerSupplyProduct: builder.query({
      query: () => ({ url: `/power-supply` }),
    }),

    getStorageDeviceProduct: builder.query({
      query: () => ({ url: `/storage-device` }),
    }),

    getMonitorProduct: builder.query({
      query: () => ({ url: `/monitor` }),
    }),

    getOthersProduct: builder.query({
      query: () => ({ url: `/others` }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCPUProcessorProductQuery,
  useGetMotherboardProductQuery,
  useGetRAMProductQuery,
  useGetPowerSupplyProductQuery,
  useGetStorageDeviceProductQuery,
  useGetMonitorProductQuery,
  useGetOthersProductQuery,
} = productsApi;
