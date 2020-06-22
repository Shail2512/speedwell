import React, { Component } from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import VectorLogo from './Images/vectorLogo.png';
import { Link } from 'react-router-dom'
import F1 from './Images/Display/Football_Club_A.PNG';
import F2 from './Images/Display/Football_Club_Box_A.PNG'
import F3 from './Images/Display/Football_Handstitch_A.PNG'
import F4 from './Images/Display/Football_PVC_A.PNG'
import F5 from './Images/Display/Football_RMB_A.PNG'
import F6 from './Images/Display/Football_TPU_A.PNG'
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
class FootballComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { id: 1, image: F1, name: 'F1' },
                { id: 2, image: F2, name: 'F2' },
                { id: 3, image: F3, name: 'F3' },
                { id: 4, image: F4, name: 'F4' },
                { id: 5, image: F5, name: 'F5' },
                { id: 6, image: F6, name: 'F6' },
            ]

        }
    }

    
    render() {

        return (
            <div className="FootballComponent" style={{marginTop:'10vh'}}>
                <div style={{fontSize:'40px'}}>
                    <strong>Football</strong>
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


FootballComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(FootballComponent);
// export default FootballComponent;