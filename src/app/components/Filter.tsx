import React, { useState } from 'react'
import { searchJobs } from '../../features/job/jobSlice';
import { useAppDispatch } from '../hooks'

export default function Filter() {
  const dispatch = useAppDispatch();
  const [params, setParams] = useState({})

  function onChangeState(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    if (type === 'checkbox' && !checked) {
      const copyParams: any = {...params};
      delete copyParams[name];
      setParams(copyParams)
    } else if (type !== 'checkbox' && value.length < 1) {
      const copyParams: any = {...params};
      delete copyParams[name];
      setParams(copyParams)
    } else {
      setParams(prevState => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }))
    }
  }
  function onSearch() {
    dispatch(searchJobs(params))
  }
  return (
    <div className="flex flex-row px-24 py-4" id="section-filter" >
      <div className="flex-1 flex flex-row justify-between items-center gap-4 bg-blue-200 p-4 rounded-md">
        <div className="flex-1 flex flex-col gap-1">
          <label>Job Description</label>
          <input
            type="text"
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="filter-job-description"
            placeholder="Filter by title, benefits, companies, expertise"
            onChange={onChangeState}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label>Location</label>
          <input
            type="text"
            name="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="filter-search"
            placeholder="Filter by city, state, zip code or country"
            onChange={onChangeState}
          />
        </div>
        <div className="flex flex-row gap-1 items-center self-end mb-3">
          <input
            type="checkbox"
            id="checked-checkbox"
            name="full_time"
            className="w-4 h-4 text-blue-500 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500 dark:border-gray-500"
            onChange={onChangeState}
          />
          <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Time Only</label>
        </div>
        <div className="flex flex-col gap-1 self-end">
          <button
            type="button"
            id="filter-button-search"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800"
            onClick={onSearch}
          >Search</button>
        </div>
      </div>
    </div>
  )
}
