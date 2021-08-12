import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn
} from "typeorm";
import {
  InputType,
  Field,
  ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;

  @Field(() => String, {nullable: true})
  @Column()
  contact!: String;
}



@InputType()
export class UserInput {
 
  @Field(() => String, {nullable: true})
  @Column( )
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  email!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;

  @Field(() => String, {nullable: true})
  @Column()
  contact!: String;
}


@InputType()
export class UserUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  email?: String;

  @Field(() => String, {nullable: true})
  contact?: String;

  @Field(() => String, {nullable: true})
  password?: String;
}

@InputType()
export class GetUserInput {
 
  @Field(() => String, {nullable: true})
  contact!: String;

  @Field(() => String, {nullable: true})
  @Column()
  password!: String;
}