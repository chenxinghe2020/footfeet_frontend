import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductInfo from "../productInfo/ProductInfo";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import {addProduct} from "../../actions/products.action";


const EditProduct=(props)=>{
    const [editable,setEditable]=useState(false);
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            products:appState.products
        };
    });

    const [product,setProduct]=React.useState({
        id:'',
        name:'Nike Renew Run',
        price:90,
        description:'The Nike Renew Run keeps you moving with softer foam for a cushioned feel. Designed with the everyday runner in mind, this shoe delivers secure support and durable traction for comfort on the go. ',
        brand:'Nike',
        size:8,
        color:'pink',
        stock:322,
        tags:'',
        releaseDate:new Date(),
        soldNumber:0,
        image1:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b45d6b90-fea2-48d6-aca5-8c49b69ec2c0/renew-run-womens-running-shoe-9CrB26.jpg',
        image2:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/948ceaff-3ded-4c43-9279-8bb6d1da0f08/renew-run-womens-running-shoe-9CrB26.jpg',
        image3:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bd38e410-9296-4e17-98dd-9d795317f48a/renew-run-womens-running-shoe-9CrB26.jpg',
        image4:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/46d7cd4b-7f9e-4c60-b931-9f05b21a72f7/renew-run-womens-running-shoe-9CrB26.jpg',
    })

    useEffect(()=>{
        let newProduct=loginState.products.find(p => +props.match.params.id === p.id);
        setProduct(newProduct);
    },[])

    const handleSubmit=()=>{
        addProduct(product);
        setEditable(false);
    }

    const handleEditable=()=>{
        setEditable(true);
    }
    return(
        <div>
            <ProductInfo product={product} setProduct={setProduct} editable={editable}/>
            {
                editable?
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='add-btn'
                        onClick={handleSubmit}
                        style={{backgroundColor:"black",color:"white",position:"fixed",right:25,bottom:25}}
                    >
                        Save <SendIcon style={{margin:10}}/>
                    </Fab>
                    :
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='add-btn'
                        onClick={handleEditable}
                        style={{backgroundColor:"black",color:"white",position:"fixed",right:25,bottom:25}}
                    >
                        Edit <SendIcon style={{margin:10}}/>
                    </Fab>
            }

        </div>
    )
}

export default EditProduct;