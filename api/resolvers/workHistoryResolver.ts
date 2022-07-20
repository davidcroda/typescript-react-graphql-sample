import { Max, Min } from "class-validator";
import { Args, ArgsType, Field, Int, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { AppDataSource } from "../db";
import { WorkHistory } from "../entities/workHistory";

@ArgsType()
class WorkHistoryArgs {
  @Field({ nullable: true })
  @Min(0)
  skip?: number = 0

  @Field({ nullable: true })
  @Min(1)
  @Max(50)
  take?: number = 10

  @Field({ nullable: true })
  order?: string = 'endDate'

  @Field({ nullable: true })
  direction?: string = 'desc'
}

@Resolver(of => WorkHistory)
export class WorkHistoryResolver {

  workHistoryRepository: Repository<WorkHistory>
  constructor() {
    this.workHistoryRepository = AppDataSource.getRepository(WorkHistory)
  }

  @Query(returns => [WorkHistory])
  workHistory(@Args() { skip, take, order, direction }: WorkHistoryArgs): Promise<WorkHistory[]> {
    return this.workHistoryRepository.find({
      take,
      skip,
      order: {
        [order]: direction
      }
    })
  }
}