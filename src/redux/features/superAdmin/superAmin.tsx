import { baseApi } from "../../api/baseApi";

const superAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/superAdmin",
        method: "GET",
      }),
    }),
  }),
});

export const { useSuperAdminQuery } = superAdminApi;
