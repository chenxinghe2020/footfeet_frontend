import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import './ProductInfo.scss'
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import Chip from "@material-ui/core/Chip";
import DoneIcon from '@material-ui/icons/Done';

const ProductInfo=(props)=>{

    const handleFormControl = (event) => {
        const newProduct = {...props.product};
        newProduct[event.target.name] = event.target.value;
        props.setProduct(newProduct);
    };


    const handleDelete=(item)=>{
        let chips=props.product.tags.split(' ');
        let index=chips.findIndex(chip=>{
            return chip===item;
        })
        chips.splice(index,1);
        let newTags=chips.join(" ");
        let newProduct={
            ...props.product,
            tags:newTags
        }
        props.setProduct(newProduct);
    }

    const [tagInput,setTagInput]=useState('Nike');

    const handleChipChange=(event)=>{
        setTagInput(event.target.value);
    }
    const handleAddChip=(event)=>{
        let newTags=props.product.tags+' '+tagInput;
        let newProduct={
            ...props.product,
            tags:newTags
        }
        props.setProduct(newProduct);
    }

    return(
        <Grid container className='product' spacing={2}>
            <Grid item container lg={4} md={4} sm={4} xs={4} className='left' spacing={1}>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Paper className="product-wrapper">
                        <div className='image-wrapper'>
                            <img src={props.product.image1} alt='product image 1'  className='image'/>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Paper className="product-wrapper">
                        <div className='image-wrapper'>
                            <img src={props.product.image2} alt='product image 2'  className='image'/>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Paper className="product-wrapper">
                        <div className='image-wrapper'>
                            <img src={props.product.image3} alt='product image 3'  className='image'/>
                        </div>
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Paper className="product-wrapper">
                        <div className='image-wrapper'>
                            <img src={props.product.image4} alt='product image 4'  className='image'/>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item container lg={6} md={6} sm={6} xs={6} className='right'>
                <Grid item container lg={9} md={9} sm={9} xs={9} className='name-size'>
                    {props.product.name}
                </Grid>
                <Grid item container  lg={1} md={1} sm={1} xs={1} className='other-size'>
                    ${props.product.price}
                </Grid>
                <Grid item container  lg={9} md={9} sm={9} xs={9} className='other-size'>
                    Color: {props.product.color}
                </Grid>
                <Grid item container  lg={1} md={1} sm={1} xs={1} className='other-size'>
                    Size: {props.product.size}
                </Grid>
                <Grid item container  lg={9} md={9} sm={9} xs={9} className='other-size'>
                    Brand: {props.product.brand}
                </Grid>
                <Grid item container  lg={1} md={1} sm={1} xs={1} className='other-size'>
                    stock: {props.product.stock}
                </Grid>
                <Grid item container  lg={10} md={10} sm={10} xs={10} className='other-size'>
                    description: {props.product.description}
                </Grid>
            </Grid>

            <Grid container item lg={10} md={10} sm={10} xs={10} spacing={3} className='bottom'>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Name"
                               name='name'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.name}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Price"
                               name='price'
                               variant="outlined"
                               className='input'
                               type='number'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.price}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Color"
                               name='color'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.color}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Size"
                               name='size'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.size}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Brand"
                               name='brand'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.brand}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Stock"
                               name='stock'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.stock}
                    />
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                    <TextField id="outlined-basic"
                               label="Image One"
                               name='image1'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image1}
                    />
                </Grid>

                <Grid item lg={5} md={5} sm={5} xs={5}>
                    <TextField id="outlined-basic"
                               label="Image Two"
                               name='image2'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image2}
                    />
                </Grid>

                <Grid item lg={5} md={5} sm={5} xs={5}>
                    <TextField id="outlined-basic"
                               label="Image Three"
                               name='image3'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image3}
                    />
                </Grid>

                <Grid item lg={5} md={5} sm={5} xs={5}>
                    <TextField id="outlined-basic"
                               label="Image Four"
                               name='image4'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image4}
                    />
                </Grid>


                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                               label="Description"
                               name='description'
                               variant="outlined"
                               className='input'
                               id="outlined-multiline-static"
                               multiline
                               rows={4}
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.description}
                    />
                </Grid>
                <Grid item spacing={2} lg={12} md={12} sm={12} xs={12} className='showTag'>
                    {
                        props.product.tags.split(' ').map(chip=>(
                            <Chip
                                label={chip}
                                name={chip}
                                clickable
                                disabled={!props.editable}
                                color="primary"
                                onDelete={handleDelete.bind(this,chip)}
                            />
                        ))
                    }
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12} className='addTag'>
                    <Grid item lg={9} md={10} sm={10} xs={10}>
                        <TextField
                            label="Add Tags"
                            name='description'
                            variant="outlined"
                            className='input'
                            id="outlined-multiline-static"
                            disabled={!props.editable}
                            onChange={handleChipChange}
                            value={tagInput}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2}>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            disabled={!props.editable}
                            onClick={handleAddChip}
                            style={{backgroundColor:"black",color:"white"}}
                        >
                            Add Tags <SendIcon style={{margin:10}}/>
                        </Fab>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
export default ProductInfo;