import { mainApi } from ".";

const extendedProductApi = mainApi.injectEndpoints({
  endpoints: (build) => ({

    getProduct: build.query<any[], void>({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["PRODUCT"],
    }),

    createProduct: build.mutation<any, { name: string; desc: string; image: string }>({
      query: (body) => ({
        method: "POST",
        url: "/product",
        body,
      }),
      invalidatesTags: ["PRODUCT"],
    }),

    deleteProduct: build.mutation<any, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      invalidatesTags: ["PRODUCT"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation
} = extendedProductApi;
