import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import React, {useEffect, useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './SideBar.scss'

export const SideBar=(props)=>{

    // const [filters,setFilters]=useState({
    //     search:' ',
    //     sport: {
    //         running:false,
    //         lifeStyle:false,
    //         soccer:false,
    //         basketball:false,
    //         hiking:false,
    //         gym:false,
    //
    //     },
    //     size: {
    //         four:false,
    //         five:false,
    //         six:false,
    //         seven:false,
    //         eight:false,
    //         nine:false,
    //         ten:false,
    //         eleven:false,
    //         twelve:false
    //     },
    //     color:{
    //         red:false,
    //         blue:false,
    //         gray:false,
    //         white:false,
    //         orange:false,
    //         pink:false,
    //     },
    //     brand:{
    //         nike:false,
    //         adidas:false,
    //         jordan:false,
    //         newBalance:false
    //     },
    //     price:{
    //         "0-100":false,
    //         '100-200':false,
    //         '200-300':false,
    //         '400-500':false,
    //         'above500':false,
    //     },
    // })
    // const handleFormControl = (event) => {
    //     const newProduct = {...props.product};
    //     newProduct[event.target.name] = event.target.value;
    //     props.setProduct(newProduct);
    // };

    const handleFormChange=(title,event)=>{
        // console.log(event.target)
        // console.log(title)
        const newFilters={
            ...props.filters
        }
        newFilters[title][event.target.name]=!props.filters[title][event.target.name]
        // console.log(event.target)
        props.setFilters(newFilters);

    }


    return(
        <div className='sideBar-main'>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Sport</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormGroup row>
                        <FormControlLabel
                            checked={props.filters.sport.running}
                            control={<Checkbox name="running"/>}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="Running"
                        />
                        <FormControlLabel
                            checked={props.filters.sport.lifeStyle}
                            control={<Checkbox name="lifeStyle" />}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="LifeStyle"
                        />
                        <FormControlLabel
                            checked={props.filters.sport.soccer}
                            control={<Checkbox name="soccer" />}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="Soccer"
                        />
                        <FormControlLabel
                            checked={props.filters.sport.basketball}
                            control={<Checkbox name="basketball" />}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="Basketball"
                        />
                        <FormControlLabel
                            checked={props.filters.sport.hiking}
                            control={<Checkbox name="hiking" />}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="Hiking"
                        />
                        <FormControlLabel
                            checked={props.filters.sport.gym}
                            control={<Checkbox name="gym" />}
                            onClick={handleFormChange.bind(this,'sport')}
                            label="Gym"
                        />
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Brand</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.brand.nike}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="nike" />}
                        label="Nike"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.adidas}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="adidas" />}
                        label="Adidas"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.newBalance}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="newBalance" />}
                        label="New Balance"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.jordan}
                        control={<Checkbox name="jordan" />}
                        onClick={handleFormChange.bind(this,'brand')}
                        label="Jordan"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Size</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.size.four}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="four" />}
                        label="4"
                    />
                    <FormControlLabel
                        checked={props.filters.size.five}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="five" />}
                        label="5"
                    />
                    <FormControlLabel
                        checked={props.filters.size.six}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="six" />}
                        label="6"
                    />
                    <FormControlLabel
                        checked={props.filters.size.seven}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="seven" />}
                        label="7"
                    />
                    <FormControlLabel
                        checked={props.filters.size.eight}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="eight" />}
                        label="8"
                    />
                    <FormControlLabel
                        checked={props.filters.size.nine}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="nine" />}
                        label="9"
                    />
                    <FormControlLabel
                        checked={props.filters.size.ten}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="ten" />}
                        label="10"
                    />
                    <FormControlLabel
                        checked={props.filters.size.eleven}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="eleven" />}
                        label="11"
                    />
                    <FormControlLabel
                        checked={props.filters.size.twelve}
                        onClick={handleFormChange.bind(this,'size')}
                        control={<Checkbox name="twelve" />}
                        label="12"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Color</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.color.red}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="red" />}
                        label="Red"
                    />
                    <FormControlLabel
                        checked={props.filters.color.blue}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="blue" />}
                        label="Blue"
                    />
                    <FormControlLabel
                        checked={props.filters.color.black}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="black" />}
                        label="Black"
                    />
                    <FormControlLabel
                        checked={props.filters.color.white}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="white" />}
                        label="White"
                    />
                    <FormControlLabel
                        checked={props.filters.color.orange}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="orange" />}
                        label="Orange"
                    />
                    <FormControlLabel
                        checked={props.filters.color.gray}
                        onClick={handleFormChange.bind(this,'color')}
                        control={<Checkbox name="gray" />}
                        label="Gray"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.price["0-100"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="0-100" />}
                        label="0-100"
                    />
                    <FormControlLabel
                        checked={props.filters.price["100-200"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="100-200" />}
                        label="100-200"
                    />
                    <FormControlLabel
                        checked={props.filters.price["200-300"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="200-300" />}
                        label="200-300"
                    />
                    <FormControlLabel
                        checked={props.filters.price["300-400"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="300-400" />}
                        label="300-400"
                    />
                    <FormControlLabel
                        checked={props.filters.price["400-500"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="400-500" />}
                        label="400-500"
                    />
                    <FormControlLabel
                        checked={props.filters.price["above500"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="above500" />}
                        label="above 500"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}




