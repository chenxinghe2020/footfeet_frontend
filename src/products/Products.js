import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {getProducts} from "../actions/products.action";
import './Products.scss';
import {SideBar} from "./sidebar/SideBar";
import {Link} from "react-router-dom";
import {appConstant} from "../appConstants/appConstants";

const Products =(props)=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const loginState=useSelector(appState=>{
        return{
            products:appState.products,
            filters:appState.filter
        }
    })
    const [filterProducts,setFilterProducts]=useState({
        products:loginState.products
    })

    useEffect(()=>{
        // console.log(loginState.products)
        setFilterProducts({
            products:loginState.products
        });
    },[loginState.products])

    const [filters,setFilters]=useState({
        search:props.match.params.search?props.match.params.search:' ',
        sport: {
            running:false,
            lifeStyle:false,
            soccer:false,
            basketball:false,
            hiking:false,
            gym:false,

        },
        size: {
            four:false,
            five:false,
            six:false,
            seven:false,
            eight:false,
            nine:false,
            ten:false,
            eleven:false,
            twelve:false
        },
        color:{
            red:false,
            blue:false,
            gray:false,
            black:false,
            white:false,
            orange:false,
            pink:false,
        },
        brand:{
            nike:false,
            adidas:false,
            jordan:false,
            newBalance:false
        },
        price:{
            "0-100":false,
            '100-200':false,
            '200-300':false,
            '300-400':false,
            '400-500':false,
            'above500':false,
        },
    })


    useEffect(()=>{
        // console.log(filters);
        // console.log(filterProducts.products);
        // console.log(loginState.products);
        let bestSeller=false;
        let newRelease=true;
        let colors=[];
        if(filterProducts.products){
            let newFilterProducts=loginState.products.filter((product)=>{
                if(!filters.search||filters.search===' '){
                    return product;
                }
                if(filters.search.toLowerCase()==='best seller'){
                    bestSeller=true;
                    return product;
                }else if(filters.search.toLowerCase()==='new release'){
                    newRelease=true;
                    return product;
                }

                let searchArr=filters.search.split(' ');
                let count=0;
                for(let i=0;i<searchArr.length;i++){
                    if(product.tags.toLowerCase().indexOf(searchArr[i].toLowerCase())>-1){
                        count++;
                    }
                }
                if(count===searchArr.length){
                    return product;
                }
                // if(product.tags.toLowerCase().indexOf(filters.search.trim().toLowerCase())>-1){
                //     return product;
                // }
            })
                .filter(item=>{
                    if(colors.indexOf(item.name+item.color)===-1){
                        colors.push(item.name+item.color);
                        return item;
                    }
                })
                .filter(product=>{
                    let count=0;
                    for(const key in filters.sport){
                        if(!filters.sport[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.sport).length){
                        for(const key in filters.sport){
                            if(filters.sport[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }

            })//filter for sport
                .filter(product=>{
                    let count=0;
                    for(const key in filters.brand){
                        if(!filters.brand[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.brand).length){
                        for(const key in filters.brand){
                            if(filters.brand[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }
                })//filter for brand
                .filter(product=>{
                    let count=0;
                    for(const key in filters.color){
                        if(!filters.color[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.color).length){
                        for(const key in filters.color){
                            if(filters.color[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }
                })//filter for color
                .filter(product=>{
                    let count=0;
                    for(const key in filters.size){
                        if(!filters.size[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.size).length){
                        if(filters.size.four&&+product.size===4
                            ||filters.size.five&&+product.size===5
                            ||filters.size.six&&+product.size===6
                            ||filters.size.seven&&+product.size===7
                            ||filters.size.eight&&+product.size===8
                            ||filters.size.nine&&+product.size===9
                            ||filters.size.ten&&+product.size===10
                            ||filters.size.eleven&&+product.size===11
                            ||filters.size.twelve&&+product.size===12
                        ){
                            return product;
                        }
                    }else{
                        return product;
                    }

                })//filter for size
                .filter(product=>{
                    let count=0;
                    for(const key in filters.price){
                        if(!filters.price[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.price).length){
                        if(filters.price["0-100"]&&+product.price>=0&&+product.price<=100
                            ||filters.price["100-200"]&&+product.price>=100&&+product.price<=200
                            ||filters.price["200-300"]&&+product.price>=200&&+product.price<=300
                            ||filters.price["300-400"]&&+product.price>=300&&+product.price<=400
                            ||filters.price["400-500"]&&+product.price>=400&&+product.price<=500
                            ||filters.price["above500"]&&+product.price>=500
                        ){
                            return product;
                        }
                    }else{
                        return product;
                    }

                })//filter for price
                if(bestSeller){
                    newFilterProducts.sort((a,b)=>{
                        return a.soldNumber-b.soldNumber;
                    })
                }
                if(newRelease){
                    newFilterProducts.sort((a,b)=>{
                        return a.releaseDate-b.releaseDate;
                    })
                }

            // console.log(newFilterProducts)
            setFilterProducts({products: newFilterProducts});

        }

    },[filters])

    useEffect(()=>{
        // console.log(props.match.params.search)
        setFilters({
            ...filters,
            search: props.match.params.search,
        })
    },[props.match.params.search,loginState.products])



        return(
            <Grid container spacing={2} className="product-main">
                <Grid item lg={2} md={2} sm={false} xs={false}>
                    <Paper className="product-sideBar">
                        <SideBar filters={filters} setFilters={setFilters}/>
                    </Paper>
                </Grid>
                <Grid item container spacing={2} lg={9} md={10} sm={12} xs={12} className="Products">
                    {   filterProducts.products?
                        filterProducts.products.map(p => (
                            <Grid item lg={3} md={4} sm={6} xs={12} key={p.id}>
                                <Link to={`${appConstant.productDetailRoute}/${p.id}`}>
                                    <Paper className="product-wrapper">
                                        <img src={p.image1} alt={p.name} className="product-image"/>
                                        <div className="product-overlay"/>
                                        <div className="product-info">
                                            <h3 style={ {margin: 0} }>{p.name}</h3>
                                            <div>{p.name}</div>
                                            <div>${p.price}</div>
                                        </div>
                                    </Paper>
                                </Link>

                            </Grid>
                        ))
                        :
                        <h3>No Product Data</h3>
                    }
                </Grid>
            </Grid>
        )

}
export default Products;

