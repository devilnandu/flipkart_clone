import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import {Grid, Box,makeStyles, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import clsx from 'clsx';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ActionItems from "./ActionItems";


const useStyle = makeStyles(theme=>({
    component:{
        marginTop:55,
        backgroundColor:'#F2F2F2'
    },
    container:{
        // margin:'0 80px',
        backgroundColor:'#fff',
        display:'flex',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    rightContainer:{
        marginTop:50,
        '& > *':{
            marginTop:10
        }
    },
    smallText:{
        fontSize:14,
        verticalAlign:'baseline',
        '& > *':{
            fontSize:14,
            marginTop:10
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:28,
       // fontWeight:
    },
    badge:{ 
                   
        fontSize:2,
        marginRight:10,
        color:'#00CC00'
    }
}));

const DetailView = ({match})=>{
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const {id} = useParams();
    const {product} = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch]);

    return (
        <Box className={classes.component}>
        {product && Object.keys(product).length &&
            <Grid container className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={12} >
                   <ActionItems product={product}/>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                <Typography>{product.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText,classes.greyTextColor)}>8 Ratings & 1 Review<span><img src={fassured} style={{width:77,marginLeft:20}}/></span></Typography>
                <Typography>
                    <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{color:'#388E3C'}} >{product.price.discount} off</span>
                </Typography>
                <Typography style={{fontWeight:600}}>Available offers</Typography>
                <Box className={classes.smallText}>
                       <Typography ><LocalOfferIcon className={classes.badge}/> <span style={{fontSize:17}}> <b>Special Price</b> Get extra 10% off (price inclusive of discount)</span></Typography>
                       <Typography ><LocalOfferIcon className={classes.badge}/> <span style={{fontSize:17}}><b>Partner Offer</b> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More.</span> </Typography>
                       <Typography ><LocalOfferIcon className={classes.badge}/> <span style={{fontSize:17}}><b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.</span> </Typography>
                       <Typography ><LocalOfferIcon className={classes.badge}/> <span style={{fontSize:17}}> <b>No Cost EMI</b> on Bajaj Finserv EMI Card on cart value above ₹2999.</span> </Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                        </TableRow>
                         <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Seller</TableCell>
                            <TableCell className={classes.smallText}>
                                <span style={{color:'#2874f0'}}>SuperComNet</span>
                                <Typography>GST invoice Available</Typography>
                                <Typography>14 Days Return Policy.</Typography>
                                <Typography>View more Sellers starting from ₹300.</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell colSpan={2}><img style={{width:390}} src={sellerURL}/></TableCell>                                                      
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Grid>               
            </Grid>
        }
        </Box>
    )
}

export default DetailView;

