// import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { AppDataSource, loadFixtures } from './db'
import { SkillResolver } from './resolvers/skillResolver'
import { WorkHistoryResolver } from './resolvers/workHistoryResolver'
import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { SocialLinkResolver } from './resolvers/socialLinkResolver'

async function bootstrap() {
  try {
    await AppDataSource.initialize()
    await loadFixtures()

    const schema = await buildSchema({
      resolvers: [SkillResolver, WorkHistoryResolver, SocialLinkResolver],
    })

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    })

    const { url } = await server.listen({
      host: '0.0.0.0',
      port: 4000
    })
    console.log(`Server is running at ${url}`)
  } catch (error) {
    console.error(error)
  }
}

bootstrap()