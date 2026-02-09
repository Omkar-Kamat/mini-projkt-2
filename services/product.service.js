import { Product } from "../models/product.model.js";

export const listProductsService = async (page,limit) => {

  page = page < 1 ? 1 : page;
  limit = limit > 10 ? 10 : limit;

  const skip = (page - 1) * limit;
  const [products, totalCount] = await Promise.all([
    Product.find().sort({_id:1}).skip(skip).limit(limit),
    Product.countDocuments()
  ]);
  return {
    products: products,
    totalCount,
    page,
    pages: Math.ceil(totalCount/limit),
    hasNextPage: page * limit < totalCount,
    hasPrevPage: page > 1
  };
};


export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};