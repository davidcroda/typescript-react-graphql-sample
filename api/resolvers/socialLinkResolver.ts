import { Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { AppDataSource } from "../db";
import { SocialLink } from "../entities/socialLink";

@Resolver(of => SocialLink)
export class SocialLinkResolver {

  socialLinkRepository: Repository<SocialLink>
  constructor() {
    this.socialLinkRepository = AppDataSource.getRepository(SocialLink)
  }

  @Query(returns => [SocialLink])
  socialLinks(): Promise<SocialLink[]> {
    return this.socialLinkRepository.find()
  }
}