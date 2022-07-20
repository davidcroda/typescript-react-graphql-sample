import { useSkillListQuery } from '../../generated/graphql'
import { SkillList } from './SkillList'

export const SkillListContainer = () => {
  const { data, error, loading } = useSkillListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!</div>
  }

  return (
    <div className="col section__resume progress-list js-progress-list">
      <h3 className="progress-list__title">skills</h3>
      <SkillList data={data} />
    </div>
  )
}
