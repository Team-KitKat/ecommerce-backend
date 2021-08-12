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
export class Product extends BaseEntity {
  @Field()
  @Column( )
  _id!: String;

  @Field()
  @Column()
  name!: String;

  @Field()
  @Column()
  image!: String;

  @Field()
  @Column()
  price!: Number;

  @Field()
  @Column()
  offrePrice!: Number;

  @Field()
  @Column()
  qty!: Number;

  @Field()
  @Column()
  category!: String;
}



@InputType()
export class ProductInput {
 
  @Field()
  _id!: String;

  @Field()
  name!: String;

  @Field()
  image!: String;

  @Field()
  price!: Number;

  @Field()
  offrePrice!: Number;

  @Field()
  qty!: Number;

  @Field()
  category!: String;
}


@InputType()
export class ProductUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  image?: String;

  @Field(() => Number, {nullable: true})
  price?: Number;

  @Field(() => Number, {nullable: true})
  offrePrice?: Number;

  @Field(() => Number, {nullable: true})
  qty?: Number;

  @Field(() => String, {nullable: true})
  category?: String;
}