import React from 'react';
import { useParams } from 'react-router-dom'
import { Spinner } from '../../app/components/base';
import { useGetJobDetailQuery } from '../../services/job';
import noImage from '../../assets/images/no-image.jpeg';

export function JobDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetJobDetailQuery(id);

  function createMarkup(description: string) {
    return {__html: description};
  }

  function navigateToCompanyProfile(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function onHandleErrorImage(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = noImage;
  }

  return (
    <div
      className="flex flex-col gap-4 px-16"
      id="section-job-detail"
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Spinner />
      ) : data ? (
        <div className="flex flex-col gap-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
          <h3 className="text-blue-900 font-bold text-3xl">{data?.company}</h3>
          <div className="flex flex-row justify-start gap-2 text-gray-400">{data.type} - {data.location}</div>
          <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex flex-row justify-between gap-6">
            <div className="flex-3 flex flex-col gap-3">
              <div className="w-full" dangerouslySetInnerHTML={createMarkup(data.description)} />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center gap-2">
                  <img
                    className="rounded-t-lg"
                    src={data?.company_logo}
                    alt={data?.company}
                    onError={onHandleErrorImage}
                  />
                  <button
                    className="font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => navigateToCompanyProfile(data.company_url)}
                  >
                    {data.company_url}
                  </button>
                </div>
                <div className="p-5">
                  <div dangerouslySetInnerHTML={createMarkup(data.how_to_apply)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
