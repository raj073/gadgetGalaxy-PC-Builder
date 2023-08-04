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

    getSinglePCBuilderProduct: builder.query({
      query: (id) => {
        return { url: `/pcbuilder`, params: { productId: id } };
      },
      onStart: (args) => {
        console.log("Product ID From Redux:", args);
      },
    }),

    postAddToBuild: builder.mutation({
      query: ({ data }) => {
        return {
          url: `/addtobuild`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsCPU: builder.query({
      query: () => ({ url: `/addtobuildCPU` }),
      providesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsMotherboard: builder.query({
      query: () => ({ url: `/addtobuildMotherboard` }),
      providesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsRAM: builder.query({
      query: () => ({ url: `/addtobuildRam` }),
      providesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsPower: builder.query({
      query: () => ({ url: `/addtobuildPower` }),
      providesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsStorageDevice: builder.query({
      query: () => ({ url: `/addtobuildStorageDevice` }),
      providesTags: ["updatedProduct"],
    }),

    getAddToBuildProductsMonitor: builder.query({
      query: () => ({ url: `/addtobuildMonitor` }),
      providesTags: ["updatedProduct"],
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
  useGetSinglePCBuilderProductQuery,
  usePostAddToBuildMutation,
  useGetAddToBuildProductsCPUQuery,
  useGetAddToBuildProductsMotherboardQuery,
  useGetAddToBuildProductsRAMQuery,
  useGetAddToBuildProductsPowerQuery,
  useGetAddToBuildProductsStorageDeviceQuery,
  useGetAddToBuildProductsMonitorQuery,
} = productsApi;
