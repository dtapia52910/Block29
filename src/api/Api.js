import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web",
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // an endpoint that fetches players
    getPlayers: builder.query({
      query: () => "/players",
    }),
    getPlayer: builder.query({
      query: (id) => `/players/${id}`,
    }),
    postPlayer: builder.mutation({
      query: (body) => ({
        url: "/players",
        method: "POST",
        body,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  usePostPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;