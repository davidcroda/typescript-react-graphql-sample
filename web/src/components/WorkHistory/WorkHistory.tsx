import { WorkHistory as WorkHistoryEntity } from '../../generated/graphql'

export default function WorkHistory({data}: {data: WorkHistoryEntity}) {
  return (
    <div className='resume-list__block'>
      <p className='resume-list__block-title'>{data.name}</p>
      <p className='resume-list__block-date'>{data.startDate} - {data.endDate ? data.endDate : 'Current'}</p>
      <p>{data.jobTitle}</p>
    </div>
  )
}
