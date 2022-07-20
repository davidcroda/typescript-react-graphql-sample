import GraphiQL from 'graphiql'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import 'graphiql/graphiql.min.css'
import './GraphQLExplorer.css'

interface GraphIQLProps {
  apiHost: string,
  theme: string
}

export default function GraphQLExplorer({apiHost, theme}: GraphIQLProps) {
  const fetcher = createGraphiQLFetcher({
    url: `${apiHost}/graphiql`
  })
  const sampleQuery = `  
query SkillList {
  skills(order: "proficiency", direction: "desc") {
    id
    name
    proficiency
  }
}
  `
  return (
    <GraphiQL fetcher={fetcher} editorTheme={theme} query={sampleQuery.trim()} />
  )
}