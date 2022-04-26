import pkg from 'express';
const { response } = pkg;
import products from '../model/productSchema.js';


export const getProducts = async(request, response) => {
    try {
        const Product = await products.find({});
        response.json(Product);
    } catch (error) {
        console.log('Error :', error.message);
    }
}

export const getProductById = async(request,response)=>{
    try{
        const product = await Product.findOne({'id':request.params.id});
        response.json(product);
    }
    catch(error){
        console.log('error: ',error.message);
    }
}
export const postProducts = async (req, res) => {
    try {
        console.log("req.body");
        console.log(req.body);
      const Product = await products.create(req.body);
      res.status(201).json({
        message: "new Product added",
        data: Product,
      });
    } catch (error) {
      console.log("error in creating the User: ", error);
      res.status(400).end();
    }
  };
