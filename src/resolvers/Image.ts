import { Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field} from 'type-graphql';
import ProductItem from '../models/Product.model' ;
import { Product } from '../entity/Product';
import { UploadedFileResponse } from '../entity/Image';

@Resolver()
export class ImageResolver {
 
  // @Mutation(() => Product)
  // async uploadImage(
  //   @Arg("variables", () => UploadedFileResponse) variables: ProductInput
  // ) {
  //   try {
  //     const newProduct = new ProductItem(variables);
  //     return await newProduct.save();
  //   } catch (error) {
  //     return error.message;
  //   }
    
  // }

}