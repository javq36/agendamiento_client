import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apiautomarcol-production.up.railway.app/api",
  }),
  endpoints: (builder) => ({
    infoCar: builder.mutation({
      query: (body) => ({
        url: "/clients/carinfo",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useInfoCarMutation } = todosApi;
