// import { mainApi } from './index'

// const extendedApi = mainApi.injectEndpoints({
//   endpoints: (build) => ({
//     getComments: build.query({
//       query: () => ({
//         method: "GET",
//         url:  '/comments',
//       }),
//       providesTags:["COMMENTS"]
//     }),
//     createcomment:build.mutation({
//       query:(body) =>({
//         method:"POST",
//         url:"/comments",
//         body
//       }),
//       invalidatesTags:['COMMENTS']
//     })

//   }),
//   overrideExisting: false,
// })

// export const { useGetCommentsQuery,useCreatecommentMutation  } = extendedApi