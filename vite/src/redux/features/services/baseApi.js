import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Occasions'],

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cdb-back.bw-businessworld.net/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set('Accept', 'application/json');
      return headers;
    }
  }),

  endpoints: (builder) => ({
    // ================= AUTH =================
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),

    logout: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'DELETE'
      })
    }),

    // ================= OCCASIONS =================

    getOccasions: builder.query({
      query: () => 'admin/admin-occasions',
      providesTags: ['Occasions']
    }),

    getOccasionById: builder.query({
      query: (id) => `admin/admin-occasions/${id}`
    }),

    createOccasion: builder.mutation({
      query: (formData) => ({
        url: 'admin/add-occasion',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Occasions']
    }),

    updateOccasion: builder.mutation({
      query: ({ id, formData }) => ({
        url: `admin/edit-occasion/${id}`,
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Occasions']
    }),

    deleteOccasion: builder.mutation({
      query: (id) => ({
        url: `admin/delete-occasion/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Occasions']
    })
    // ================= OCCASIONS =================
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetOccasionsQuery,
  useGetOccasionByIdQuery,
  useCreateOccasionMutation,
  useUpdateOccasionMutation,
  useDeleteOccasionMutation
} = baseApi;
