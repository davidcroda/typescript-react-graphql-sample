import { gql } from "@apollo/client"
import { useWorkHistoryQuery } from "../../generated/graphql"
import WorkHistory from "./WorkHistory"

export const WORK_HISTORY_QUERY = gql`
query WorkHistory {
  workHistory(order: "endDate", direction: "desc") {
    id,
    name,
    jobTitle,
    startDate,
    endDate,
    description
  }
}
`

export const WorkHistoryContainer = () => {
  const { data, error, loading } = useWorkHistoryQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!</div>
  }

  return (
    <div className='row'>
      <div className='col-md-8 section__resume resume-list'>
        <h3 className='resume-list_title'>employment</h3>
        { data.workHistory.map(data => <WorkHistory data={data} />) }
      </div>
    </div>
  )
}
