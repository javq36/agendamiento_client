import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* IMPORTAR DESDE EL .ENV EL URL */
/* Incorporar la placa = plate a la consulta
{
    "plate" : "FRQ964"
}
 */
export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://apiautomarcol-production.up.railway.app/api'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoID: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),  
        getcarInformation: builder.mutation({
            query: (body) => ({
                url: '/clients/carinfo',
                method: 'POST',
                body,
            }),
        }),   
    })
})

export const { useGetTodosQuery , useGetTodoIDQuery } = todosApi;