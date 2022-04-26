import { products } from './constants/products.js';
import Product from './model/productSchema.js';


const DefaultData =async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported');
    } catch (error){
        console.log('Error :',error.message);
    }
}

export default DefaultData;
