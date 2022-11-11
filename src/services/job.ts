import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import serializeQueryParams from '../utils/serializeQueryParams'
import { TJob } from './types/job'

const BASE_URL_API = process.env.REACT_APP_API_URL

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_API,
    }),
    endpoints: (builder) => ({
        getJobList: builder.query<TJob[], object>({
            query: (arg) => `positions.json/${serializeQueryParams(arg)}`
        }),
        getJobDetail: builder.query<TJob, string | undefined>({
            query: (id) => `positions/${id}`
        }),
    })
})

export const { useGetJobListQuery, useGetJobDetailQuery } = jobApi
