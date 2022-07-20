import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class SocialLink extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(type => ID)
  id: string
  
  @Column()
  @Field()
  url: string

  @Column()
  @Field()
  icon: string
}