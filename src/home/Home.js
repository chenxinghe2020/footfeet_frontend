import React, {useEffect} from 'react';
import './Home.scss';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from "@material-ui/core/Fab";
import {getProducts} from "../actions/products.action";
import {appConstant} from "../appConstants/appConstants";
const Home = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    const reduxStore= useSelector(appState => {
        return {
            products:appState.products
        };
    });

    const handleDetail=()=>{
        console.log("click....................................")
    }



    return (
        <Grid className="Home" container>
            <Grid item container className='home-first' spacing={1} >
                <Grid item lg={5} md={5} sm={5} xs={5} className="first-one">
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='first-btn'
                        onClick={handleDetail}
                        component={Link}
                        to={`${appConstant.productsRoute}/Jordan Retro`}
                    >
                        Shop Now <ArrowForwardIosIcon style={{margin:10}}/>
                    </Fab>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5} className="first-two">
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='first-btn'
                        // component={Link} to={appConstant.paymentRoute}
                        component={Link}
                        to={`${appConstant.productsRoute}/Nike Blazer`}
                    >
                        Shop Now <ArrowForwardIosIcon style={{margin:10}}/>
                    </Fab>
                </Grid>
            </Grid>
            <h3>What's new. What's coming</h3>
            <Grid container item lg={12} md={12} sm={12} xs={12} className='home-second'>
                <Grid item lg={2} md={2} sm={2} xs={2} className='second-container'>
                    <div className='second-title'>
                        SUMMER CALL
                    </div>
                    <div className='second-subtitle'>
                        Lock in summer looks with Air Max.
                    </div>
                    <br/>
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='second-btn'
                        component={Link}
                        to={`${appConstant.productsRoute}/summer`}
                    >
                        Air Max <ArrowForwardIosIcon style={{margin:10}}/>
                    </Fab>
                </Grid>
            </Grid>
            <Grid container item className='third-title'>
                What's new. What's coming
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid container item lg={12} md={12} sm={12} xs={12} spacing={2} className='home-third'>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-one'>

                </Grid>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-second'>

                </Grid>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-third' >

                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid container item className='third-title'>
                What's new. What's coming
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid container item lg={12} md={12} sm={12} xs={12} className='home-fourth'>
                <Grid item lg={2} md={2} sm={2} xs={2} className='fourth-container'>
                    <div className='fourth-title'>
                        Jordan Force
                    </div>
                    <div className='fourth-subtitle'>
                        deliver timeless style with every step
                    </div>
                    <br/>
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='fourth-btn'
                        component={Link}
                        to={`${appConstant.productsRoute}/jordan force`}
                    >
                        Air Max <ArrowForwardIosIcon style={{margin:10}}/>
                    </Fab>
                    <br/>
                    <br/>
                    <br/>

                </Grid>
            </Grid>

        </Grid>

    );
};
export default Home;






