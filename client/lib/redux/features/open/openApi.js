const { apiSlice } = require("../api/apiSlice");

const openApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        divisions: builder.query({
            query:()=>({
                url:'/divisions',
                method:'GET',
            })
        }),
        districts: builder.query({
            query:(id)=>({
                url:`districts?divition_id=${id}`,
                method:'GET'
            })
        }),
        upazilas: builder.query({
            query:(id)=>({
                url:`upazilas?district_id=${id}`,
                method:'GET'
            })
        })
    })
})

export const {useDistrictsQuery,useDivisionsQuery,useUpazilasQuery} = openApi