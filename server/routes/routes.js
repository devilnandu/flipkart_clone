
import express from "express";
import { userSignup, userLoginIn, getUser } from "../controller/user-controller.js";
import { postProducts,getProducts ,getProductById} from "../controller/product-controller.js"; 
import { addPaymentGateway,paymentResponse } from "../controller/payment-controller.js";

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login', userLoginIn);
router.get('/signup',getUser);
router.get('/products',getProducts).post('/products',postProducts);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback',paymentResponse);

export default router;