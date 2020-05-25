import React,{Component} from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Paper, Grid, Card, CardActionArea, CardMedia,CardContent, CardActions} from '@material-ui/core';
import './Home.css';
import Vector from './Images/VectorX_cover.jpeg';
import Hartex from './Images/hartex.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card:{
        flexGrow:1,
        minWidth:300,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'left'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
      media: {
        minWidth : 300,
        minHeight : 300,
      },
      grid:{
        minWidth:300,
        // alignContent: 'flex',
        alignItems:'flex-end',
      },
  }));

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <NavigationBar/>
                <CenterCard/>
            </div>

        );
    }
}

function NavigationBar(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Speedwell Cycle Industries
            </Typography>
            Contact Us : +919898714218 / raval104@yahoo.co.in
        </Toolbar>
        </AppBar>
    </div>
    );
    }

function CenterCard(){
    const classes=useStyles();
    return(
    <div className={classes.root}>
        <Grid container spacing={2} >
            <Grid item xs={6} className = {classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Vector}
                        // image="src\components\Images\VectorX_cover.jpeg"
                        title="Vector X"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Vector X
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        With the growing demand of good health and fitness, Vector X comes up with innovations each day. Whether it’s hard core fitness or trying your hands on your favorite sport, VectorX is there for you. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Browse
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} className = {classes.grid}>
            <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Hartex}
                        // image="src\components\Images\VectorX_cover.jpeg"
                        title="Hartex"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Hartex
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hartex one of the leading manufacturers and exporters of quality bicycle tyres and tubes for more than 40 years now.
                            We have the dealership of the tyres of tractors, trucks, two-wheelers, and bicycles.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Browse
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>
    );
}



export default Home
