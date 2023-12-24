import { api } from "../api/api";


export const usersApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getUsers: builder.query({
            query:(data)=>({
                url:'users',
                method:'GET',
            }),
        }),
    })
})

export const {useGetUsersQuery} = usersApi