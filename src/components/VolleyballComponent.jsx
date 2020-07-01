import React, { Component } from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import F2 from './Images/Display/Volleyball_A.PNG'
import F1 from './Images/Display/Volleyball_Speed.PNG'
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
class VolleyballComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { id: 1, image: F1, name: 'F1' },
                { id: 1, image: F2, name: 'F2' }
            ]

        }
    }

    
    render() {

        return (
            <div className="VolleyballComponent" style={{marginTop:'10vh'}}>
                <div style={{fontSize:'40px'}}>
                    <strong> Volleyball </strong>
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


VolleyballComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(VolleyballComponent);
// export default VolleyballComponent;