import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import IContact from "../../interfaces/Contact.interface";
import ID from "../../types/Id.type";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62f4471eac59075124bbb48c.mockapi.io/api/v1",
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["contacts"],
    }),
    postContact: builder.mutation({
      query: (data: IContact) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id: ID) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  usePostContactMutation,
} = contactsApi;
