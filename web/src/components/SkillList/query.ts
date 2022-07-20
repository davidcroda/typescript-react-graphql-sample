import { gql } from '@apollo/client'

export const SKILL_LIST = gql`
  query SkillList {
    skills(order: "proficiency", direction: "desc") {
      id
      name
      proficiency
    }
  }
`
