import { Field, ID, ObjectType } from "type-graphql"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class WorkHistory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(type => ID)
  id: string

  @Column()
  @Field()
  name: string
  
  @Column()
  @Field()
  jobTitle: string
  
  @Column({ type: 'timestamptz' })
  @Field()
  startDate: Date
  @Column({ nullable: true, type: 'timestamptz' })
  @Field({ nullable: true })
  endDate?: Date

  @Column()
  @Field()
  description?: string
}

