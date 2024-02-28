import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const myApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({ baseUrl:"https://jsonplaceholder.typicode.com/users"}),
    endpoints: (builder) => ({
        getPosts:builder.query<string, string>({query: () => "posts"}),
    })
})

export const{useGetPostsQuery} = myApi
