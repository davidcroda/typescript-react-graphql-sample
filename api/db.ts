import { DataSource } from 'typeorm'
import { Skill } from './entities/skill'
import { SocialLink } from './entities/socialLink'
import skills from './fixtures/skills.json'
import socialLinks from './fixtures/socialLinks.json'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'resume',
  entities: ['**/entities/*.{js,ts}'],
  synchronize: true,
  logger: "advanced-console",
  logging: "all",
  dropSchema: true,
  cache: true,
})

async function loadFixtures() {
  const skillRepo = AppDataSource.getRepository(Skill)
  const socialLinkRepo = AppDataSource.getRepository(SocialLink)
  return Promise.all([
    skillRepo.save(skills.skills),
    socialLinkRepo.save(socialLinks.socialLinks)
  ])
}

export {
  AppDataSource,
  loadFixtures
}