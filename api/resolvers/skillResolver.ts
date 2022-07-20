import { Max, Min } from "class-validator";
import { Arg, Args, ArgsType, Field, ID, Int, Query, Resolver } from "type-graphql";
import { MoreThanOrEqual, Repository } from "typeorm";
import { AppDataSource } from "../db";
import { Skill } from "../entities/skill";


@ArgsType()
class GetSkillArgs {
  @Field({ nullable: true })
  @Min(0)
  skip?: number = 0

  @Field({ nullable: true })
  @Min(1)
  @Max(50)
  take?: number = 10

  @Field({ nullable: true })
  order?: string = 'proficiency'

  @Field({ nullable: true })
  direction?: string = 'asc'
}

@Resolver(of => Skill)
export class SkillResolver {

  skillRepository: Repository<Skill>

  constructor() {
    this.skillRepository = AppDataSource.getRepository(Skill)
  } 

  @Query(returns => Skill, { nullable: true })
  skill(@Arg("skillId", type => ID) skillId: string) {
    return this.skillRepository.findOneBy({
      id: skillId
    })
  }

  @Query(returns => [Skill])
  skills(@Args() { skip, take, order, direction }: GetSkillArgs): Promise<Skill[]> {
    return this.skillRepository.find({
      take,
      skip,
      order: {
        [order]: direction
      }
    })
  }

  @Query(returns => [Skill])
  skillsByProficiency(@Arg("minProficiency", type => Number) minProficiency: number) {
    return this.skillRepository.findBy({
      proficiency: MoreThanOrEqual(minProficiency)
    })
  }
}
