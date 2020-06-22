import React, { Component } from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import F1 from './Images/Display/Cricket_set_Wooden_A.PNG';
import F2 from './Images/Display/Cricket_set_Plastic_A.PNG'
import F3 from './Images/Display/Cricket_set_Plastic_2_A.PNG'
const styleSheet = {
    root: {
        flexGrow: 1,
        color: 'red',
        marginTop: '80px'
    },
    grid: {
        minWidth: 150,
        // alignContent: 'flex',
        alignItems: 'flex-end',
        // margin : '2%'
    },
    card: {
        // flexGrow:1,
        minWidth: 100,
        height: "100%",
    },
    logo: {
        width: 30,
    },

}
class CricketComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { id: 1, image: F1, name: 'F1' },
                { id: 2, image: F2, name: 'F2' },
                { id: 3, image: F3, name: 'F3' },
            ]

        }
    }

    
    render() {

        return (
            <div className="CricketComponent" style={{marginTop:'10vh'}}>
                <div style={{fontSize:'40px'}}>
                    <strong>Cricket</strong>
                </div>
                {
                    this.state.products.map(p => 
                        <Paper elevation={7} style={{margin:'5%'}}>
                            <img src={p.image} alt={p.name} style={{width:'100%'}}/>
                        </Paper>
                        )
                }
            </div>
        );
    }
}


CricketComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CricketComponent);
// export default CricketComponent;