import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "admin/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation ,useGetProductsQuery } = authApi;
