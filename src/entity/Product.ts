import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";
import { InputType, Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  
  @Field(() => String, {nullable: true})
  @Column()
  _id!: String;

  @Field(() => String, {nullable: true})
  @Column()
  name!: String;

  @Field(() => String, {nullable: true})
  @Column()
  image!: String;

  @Field(() => Number, {nullable: true})
  @Column()
  price!: Number;

  @Field(() => Number, {nullable: true})
  @Column()
  offerPrice!: Number;

  @Field(() => Number, {nullable: true})
  @Column()
  qty!: Number;

  @Field(() => String, {nullable: true})
  @Column()
  category!: String;

  @Field(() => Date, {nullable: true})
  @Column()
  expDate!: Date;
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
  offerPrice!: Number;

  @Field()
  qty!: Number;

  @Field()
  category!: String;

  @Field()
  expDate!: Date;
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