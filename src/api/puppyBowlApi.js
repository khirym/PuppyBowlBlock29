import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/'
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => "players",
      onError: (error) => {
        console.error("Error fetching players:", error);
      },
    })
  }),
});

export const { useFetchPlayersQuery } = puppyBowlApi;