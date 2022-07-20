import './SkillList.css'

import { SkillListQuery } from '../../generated/graphql'

interface SkillListProps {
  data: SkillListQuery
}

export const SkillList = ({ data }: SkillListProps) => {
  const items = !!data.skills && data.skills.map((skill, i) => {
      return (
        <div className="progress-list__skill" key={'skill_' + i}>
          <p>
            <span className="progress-list__skill-title">{skill.name}</span>
            <span className="progress-list__skill-value">{skill.proficiency * 10}%</span>
          </p>
          <ProgressBar value={skill.proficiency} />
        </div>
      )
    }
  )
  return (
    <div>{items}</div>
  )
}

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar'
        role='progressbar'
        style={{ width: `${value * 10}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value * 10}
      ></div>
    </div>
  )
}
