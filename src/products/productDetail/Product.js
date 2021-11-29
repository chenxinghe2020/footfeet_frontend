import React from "react";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {getProducts} from "../../actions/products.action";
import Paper from "@material-ui/core/Paper";
import './Product.scss'
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {addToCart, getCart} from "../../actions/cart.action";
import {addToTempCart, getTempCart} from "../../actions/tempCart.action";
import {addReview, getReviewsByProductId} from "../../actions/reviews.action";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Rating from "@material-ui/lab/Rating";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
class Product extends React.Component{
    state={
        currentProduct:this.props.product,
        showProducts:this.props.products,
        reviews:this.props.reviews,
        size:0,
        cartItem:{
            id:'',
            userId:'',
            qty:'',
            status:'',
            product:'',
            order:'',
        },
        currentReview:{
            id:'',
            userId:'',
            productId:0,
            rate:3,
            title:'',
            description:'',
        },
        open:false,
        sizes:[],
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            ...this.state,
            open:false,
        })
    };

    constructor(props) {
        super(props);
        !this.props.products && this.props.getProducts();
        this.props.product&&this.props.getReviewsByProductId(this.props.product.id);
        this.props.user&&this.props.getCart(this.props.user.id);
    }

    componentWillMount() {
        !this.props.products && this.props.getProducts();
        this.props.product&&this.props.getReviewsByProductId(this.props.product.id);
        this.props.user&&this.props.getCart(this.props.user.id);

        let showProducts1=this.props.products&&this.props.products.filter(p=>{
            return p.name===this.props.product.name;
        })
        let temp=[];
        let showProducts=[];
        showProducts1.forEach((item,index)=> {
            if(temp.indexOf(item.color)===-1){
                temp.push(item.color);
                showProducts.push(item);
            }
        });

        showProducts1&&showProducts1.forEach(p=>{
            if(this.state.sizes.indexOf(p.size)===-1&&p.color===this.props.product.color){
                this.state.sizes.push(p.size);
                this.state.sizes.sort();
            }
        })

        this.setState({
            ...this.state,
            currentProduct:this.props.product,
            showProducts:showProducts,
            size:this.state.sizes[0],
            currentReview:{
                ...this.state.currentReview,
                productId:this.props.product.id,
            }
        })
    }

    editReviewHandler=(event)=>{
        const newReivew = {...this.state.currentReview};
        newReivew[event.target.name] = event.target.value;
        this.setState({
            ...this.state,
            currentReview:newReivew,
        })
    }

    productShowHandler=(id)=>{
        console.log(id);
        let product=this.state.showProducts.find(product=>{
            return product.id===+id;
        })

        let sizes=[];

        this.props.products.forEach(p=>{
            if(sizes.indexOf(p.size)===-1&&p.color===product.color){
                sizes.push(p.size);
                sizes.sort();
            }
        })

        this.setState({
            ...this.state,
            currentProduct:product,
            currentReview:{
                ...this.state.currentReview,
                productId:product.id,
            },
            sizes:sizes,
            size:sizes[0],
        })

        this.props.getReviewsByProductId(product.id);

    }

    sizeChangeHandler=(event)=>{
        let size=+event.target.value;
        console.log(size)
        this.setState({
            ...this.state,
            size:size
        })
    }

    handleSubmitReview=()=>{
        this.state.currentReview.productId=this.state.currentProduct.id;
        this.props.addReview(this.state.currentReview)
        this.setState({
            ...this.state,
            currentReview:{
                ...this.state.currentReview,
                userId:'',
                rate:3,
                title:'',
                description:'',
            }
        })
        setTimeout(()=>{
            this.props.getReviewsByProductId(this.state.currentProduct.id);
        },150)

    }


    handleAddToCart=()=>{
        let product=this.props.products.find(item=>{
            if( item.name===this.state.currentProduct.name&&
                item.color===this.state.currentProduct.color&&
                item.size===this.state.size){
                return item;
            }
        })
        if(this.props.user){
            const cartItem={
                id:'',
                userId:this.props.user.id,
                qty:1,
                status:'unpaid',
                product:product,
                order:'',
            }
            this.props.addToCart(cartItem);
            this.props.getCart(this.props.user.id);
        }else{
            const cartItem={
                id:'',
                userId:' ',
                qty:1,
                status:'unpaid',
                product:product,
                order:'',
            }
            this.props.addToTempCart(cartItem);
        }

        this.setState({
            ...this.state,
            open:true,
        })

    }


    render(){


        return(
            this.state.currentProduct?
            <Grid container className='main' spacing={4}>
                <Grid item container spacing={1} lg={7} md={7} sm={6} xs={6} className='showImg'>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image1} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image2} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image3} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image3} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                </Grid>





                <Grid item lg={4} md={5} sm={6} xs={6} className='showInfo'>

                    <Typography variant="h2">
                        {this.props.product.name}
                    </Typography>

                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            Select Style:
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid item container lg={12} md={12} sm={12} xs={12} spacing={1} className='showSmall'>
                        {this.state.showProducts.map(product=>
                            (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                                    <div className="small-wrapper" value={product.id} onClick={this.productShowHandler.bind(this,product.id)}>
                                        <img src={product.image1} alt={product.name} className="small-image"/>
                                    </div>
                                </Grid>
                            )
                        )}
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            Select Size:
                        </Typography>
                    </Grid>

                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top"
                                    value={this.state.size}
                                    onChange={this.sizeChangeHandler}
                        >
                            {
                                this.state.sizes.map(size=>(
                                    <FormControlLabel key={size} value={size} control={<Radio color="primary" />} label={size} />
                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='addtocart'>
                        {
                            this.props.user.profiles[0].type==='ROLE_ADMIN'?

                                <Button
                                    variant="contained"
                                    style={{color:"white",
                                        backgroundColor:'black'}}
                                    size="large"
                                    style={{backgroundColor:'#dddddd'}}
                                    disabled={true}
                                    endIcon={<ArrowRightAltIcon />}
                                    onClick={this.handleAddToCart}
                                >
                                    Add To Cart
                                </Button>
                                :
                                <Button
                                    variant="contained"
                                    style={{color:"white",
                                        backgroundColor:'black'}}
                                    size="large"
                                    endIcon={<ArrowRightAltIcon />}
                                    onClick={this.handleAddToCart}
                                >
                                    Add To Cart
                                </Button>
                        }

                    </Grid>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            {this.state.currentProduct.description}
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container item lg={10} md={10} sm={10} xs={10} className='reviews'>
                    {
                        this.props.reviews?
                            this.props.reviews.map(review=>(
                                <Grid item container lg={9} md={9} sm={9} xs={9} key={review.id} className='review-shower'>
                                    <Grid item lg={6} md={6} sm={6} xs={6}>
                                        <br/>
                                        Title:{review.title}
                                        <br/>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <br/>
                                        <Rating name="rate" value={review.rate} precision={1} readOnly/>
                                        <br/>
                                    </Grid>

                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <br/>
                                        Description:
                                        <br/>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <br/>
                                        {review.description}
                                        <br/>
                                        <br/>
                                        <br/>
                                    </Grid>
                                </Grid>
                            )):
                            <Grid item container lg={9} md={9} sm={9} xs={9} className='review-shower'>
                                <h3>
                                    <br/>
                                    No review right now
                                    <br/>
                                </h3>
                            </Grid>


                    }



                    <Grid item container lg={9} md={9} sm={9} xs={9} className='add-review-editor'>

                        <Grid item lg={9} md={9} sm={9} xs={9}>
                            <Rating name="rate" value={+this.state.currentReview.rate} precision={1}
                                    onChange={this.editReviewHandler}
                            />
                        </Grid>
                        <Grid item lg={9} md={9} sm={9} xs={9}>
                            <br/>
                            <TextField
                                label="Title"
                                name='title'
                                variant="outlined"
                                className='review-input'
                                id="outlined-multiline-static"
                                value={this.state.currentReview.title}
                                onChange={this.editReviewHandler}
                                // value={props.product.description}
                            />
                            <br/>
                            <br/>
                        </Grid>
                        <Grid item lg={9} md={9} sm={9} xs={9}>
                            <TextField
                                label="Description"
                                name='description'
                                variant="outlined"
                                className='review-input'
                                id="outlined-multiline-static"
                                value={this.state.currentReview.description}
                                multiline
                                rows={4}
                                onChange={this.editReviewHandler}
                                // value={props.product.description}
                            />
                            <br/>
                            <br/>

                        </Grid>
                        <Grid item lg={9} md={9} sm={9} xs={9} className='review-submit'>

                            <Fab
                                variant="extended"
                                size="large"
                                color="secondary"
                                aria-label="PlaceOrder"
                                type="submit"
                                className='check-out-btn'
                                style={{backgroundColor:"black",color:'white'}}
                                onClick={this.handleSubmitReview}
                            >
                                Submit
                            </Fab>
                        </Grid>


                    </Grid>
                </Grid>


                <Snackbar open={this.state.open} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Successfully Add {this.props.product.name} To Cart.
                    </Alert>
                </Snackbar>
            </Grid>
                :
                <h3>No data found</h3>
        )









    }
}
function mapStateToProps(appstate, ownProps) {
    const id=+ownProps.match.params.id;
    const product = appstate.products && appstate.products.find(p => +ownProps.match.params.id === p.id);
    const products=appstate.products;
    const user=appstate.user;
    const reviews=appstate.reviews;
    return {id,product,products,user,reviews};
}
export default connect(mapStateToProps, {getProducts,addToCart,getCart,addToTempCart,getReviewsByProductId,addReview,getTempCart})(Product);








