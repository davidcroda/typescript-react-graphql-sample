import { useSkillListQuery } from '../../generated/graphql'
import { SkillList } from '../SkillList/SkillList'

export const ProjectListContainer = () => {
  const { data, error, loading } = useSkillListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!</div>
  }

  return <SkillList data={data} />
}
