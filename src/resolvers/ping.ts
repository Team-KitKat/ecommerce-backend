import { Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field} from 'type-graphql';
import ProductItem from '../models/Product.model' ;
import { Product, ProductSearchInput } from '../entity/Product';
import {ProductUpdateInput , ProductInput} from '../entity/Product'

@Resolver()
export class PingResolver {
  @Query(() => [Product])
  async products() {
    try {
      return await ProductItem.find({}, { __v: 0 });
    } catch (error) {
      return error.message;
    }
  }

 

  @Query(() => Product)
  async searchedProducts( @Arg("id", () => String) id: String ) {
    try {
      return await ProductItem.findOne({_id: id}, { __v: 0 });
    } catch (error) {
      return error.message;
    }
  }
 

  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    try {
      const newProduct = new ProductItem(variables);
      return await newProduct.save();
    } catch (error) {
      return error.message;
    }
    
  }


  @Mutation(() => Boolean)
  async deleteProduct(
    @Arg("_id", () => String) _id: string) {
      try {
        if (await ProductItem.findByIdAndDelete(_id)) {
          return true;
        }else{
          return false;
        }
      } catch (error) {
        return error.message;
      }
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("_id", () => String) _id: string,
    @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
  ) {
    try {
      const result = await ProductItem.update({ _id }, fields);
      return result.n;
    } catch (error) {
      return error.message;
    }
  }
}