import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { useGetJobListQuery } from '../../services/job';
import { selectParams } from './jobSlice';
import { TJob } from '../../services/types/job';
import { Card, Spinner, Typography } from '../../app/components/base';

export function Job() {
  const params = useAppSelector(selectParams)
  const { data, error, isLoading, isFetching } = useGetJobListQuery(params);
  
  return (
    <div className="flex flex-col justify-between gap-2 px-16 pb-14" id="section-job-list">
      <h1 className="text-2xl font-bold">Job List</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Spinner />
      ) : data ? (
        <>
          {data.length > 0 ? data.map((job: TJob, index: number) => (
            <div key={index}>
              <Card {...job} />
            </div>
          )) : <Typography text="Data unavailable." />}
          {/* <Spinner /> */}
        </>
      ) : null}
    </div>
  )
}
