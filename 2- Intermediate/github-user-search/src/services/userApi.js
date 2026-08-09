import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
    reducerPath:"UserApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://api.github.com/"}),
    endpoints:(builder) => ({
       searchUsers:builder.query({
        query:(searchTerm) => `users/${encodeURIComponent(searchTerm)}` 
       })
    })
})