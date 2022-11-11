import React from 'react';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../../utils/dates';

type TCard = {
  id: string,
  type: string,
  created_at: string,
  company: string,
  company_url: string,
  title: string,
  location: string,
}

export default function Card({
  id,
  type,
  created_at,
  company,
  company_url,
  title,
  location,
}: TCard) {
  const navigate = useNavigate()
  return (
    <div
      className="flex flex-row gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer" key={id}
      onClick={() => navigate(`/job/${id}`, { replace: true, state: { isJobDetail: true} })}
    >
      <div className="flex-1 flex flex-col">
        <div className="text-lg font-semibold text-blue-500">{title}</div>
        <div className="flex flex-row items-center gap-2 text-sm font-light text-gray-900">
          <span className="italic">{company}</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{type}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-right">{location}</div>
        <div className="text-sm font-light text-gray-400 text-right">{formatDate(created_at)}</div>
      </div>
    </div>
  )
}
