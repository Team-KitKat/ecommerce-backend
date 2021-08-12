import { Resolver,
  Mutation,
  Arg,
  Query} from 'type-graphql';
  
import UserModel from '../models/User.model' ;
import { GetUserInput, User } from '../entity/User';
import {UserUpdateInput ,UserInput} from '../entity/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    try {
      return await UserModel.find({}, { __v: 0 });
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => [User])
  async getUser(
    @Arg("variables", () => GetUserInput) variables: GetUserInput
  ) {
    try {
      return await UserModel.find({ contact: variables.contact, password: variables.password });
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => User)
  async createUser(
    @Arg("variables", () => UserInput) variables: UserInput
  ) {
    try {
      const newUser = new UserModel(variables);
      return await newUser.save();
    } catch (error) {
      return error.message;
    }
    
  }


  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("_id", () => String) _id: string) {
      try {
        if (await UserModel.findByIdAndDelete(_id)) {
          return true;
        }else{
          return false;
        }
      } catch (error) {
        return error.message;
      }
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("_id", () => String) _id: string,
    @Arg("fields", () => UserUpdateInput) fields: UserUpdateInput
  ) {
    try {
      const result = await UserModel.update({ _id }, fields);
      return result.n;
    } catch (error) {
      return error.message;
    }
  }
}