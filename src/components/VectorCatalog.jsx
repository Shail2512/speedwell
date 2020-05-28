import React, {Component} from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia,CardContent, CardActions} from '@material-ui/core';
import PropTypes from 'prop-types';
import TennisBall from './Images/tennisBall.jpeg';
import CricketKit from './Images/cricketKit.jpeg';
import ShuttleCocks from './Images/shuttleCocks.jpeg';
import TableTennisSet from './Images/tableTennisSet.jpeg';
import FootBall from './Images/VectorX_cover.jpeg';
import SkateBoard from './Images/skateBoard.jpeg';
import VectorLogo from './Images/vectorLogo.jpeg';
import BicycleHelmet from './Images/helmet.jpeg';
const styleSheet = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color:'red',
      },
      grid:{
        minWidth:300,
        // alignContent: 'flex',
        alignItems:'flex-end',
      },
      card:{
        // flexGrow:1,
        minWidth:300,
        height:"100%",
    },
    logo:{
        width:30,
    },
      
  }));
class VectorCatalog extends Component {
    constructor(props){
        super(props)
        this.state={
            products : 
            [
                {image:TennisBall, name:'Tennis Ball'},
                {image:CricketKit, name:'Cricket Kit'},
                {image:ShuttleCocks, name:'Shuttlecock'},
                {image:TableTennisSet, name:'Table Tennis Set'},
                {image:FootBall, name:'Football'},
                {image:SkateBoard, name:'Skateboard'},
                {image:BicycleHelmet, name:'Bicycle Helmet'}
            ]
        }
    }
    render(){
    return (
    <div className="VectorCatalog">
        <Catalog products1 = {this.state.products}/>
    </div>
  );
}
}

const Catalog = (props) => {
    const classes = styleSheet()
    return (
        <div className={classes.root}>
            <img src={VectorLogo} width="50%" height="10%"/>
            <Grid container alignItems="stretch" justify="center" spacing={2} className={classes.root}>
            {
                        props.products1.map(
                            p=>
                            <Grid item  xs={4} className = {classes.grid}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        component="img"
                                        height="400"
                                        image={p.image}
                                        // image="src\components\Images\VectorX_cover.jpeg"
                                        title={p.name}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {p.name}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
    
                                </Card>
                            </Grid>
                        )
                        
                        }
            </Grid>
            <h6>This page is under construction. Many products are still not added. Contact us for any query</h6>
        </div>
      );
}
VectorCatalog.propTypes = {
    classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(VectorCatalog);
// export default VectorCatalog;