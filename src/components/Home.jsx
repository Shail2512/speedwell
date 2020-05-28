import React,{Component} from 'react';
import { AppBar, Toolbar, Typography, Button,List, ListItem, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia,CardContent, CardActions} from '@material-ui/core';
import './Home.css';
import PropTypes from 'prop-types';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Vector from './Images/VectorX_cover.jpeg';
import Hartex from './Images/hartex.jpg'
import VectorLogo from './Images/vectorLogo.jpeg'
import HartexLogo from './Images/hartexLogo.jpeg'
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import VectorCatalog from './VectorCatalog';
import HartexCatalog from './HartexCatalog';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TennisBall from './Images/tennisBall.jpeg';
import CricketKit from './Images/cricketKit.jpeg';
import ShuttleCocks from './Images/shuttleCocks.jpeg';
import TableTennisSet from './Images/tableTennisSet.jpeg';
import FootBall from './Images/VectorX_cover.jpeg';
import SkateBoard from './Images/skateBoard.jpeg';
import BicycleHelmet from './Images/helmet.jpeg';
const styleSheet = makeStyles((theme) => ({
  main:{
    color:'red',
  },  
  home:{
        fontSize:20,
    },
    root: {
      flexGrow: 1,
    },
    card:{
        // flexGrow:1,
        minWidth:300,
        height:"100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'left',
      marginLeft:10,
      paddingLeft:10,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
      media: {
        minWidth : 200,
        minHeight : 200,
      },
      grid:{
        minWidth:300,
        // alignContent: 'flex',
        alignItems:'flex-end',
      },
      list : {
        width : 200,
      },
      padding : {
        paddingRight : 30,
        cursor : "pointer",
      },
    
      sideBarIcon : {
        padding : 0,
        color : "white",
        cursor : "pointer",
      },

      toolBar : {
        // backgroundColor: "rgb(24, 174, 224)",
        // backgroundColor: "green"
    }
    
  }));

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {drawerActivate:false, drawer:false};
        this.updateDrawer = this.updateDrawer.bind(this);
      }
    
      componentWillMount(){
        if(window.innerWidth <= 600){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 600){
            this.setState({drawerActivate:true});
          }
          else{
            this.setState({drawerActivate:false})
          }
        });
      }
    
      
    updateDrawer = (text) => {this.setState({drawer:text})}
    render(){
        return(
            <div className="Home">
                {this.state.drawerActivate ? <CreateDrawer updateState={this.updateDrawer} drawerState={this.state.drawer}/> : <DestroyDrawer/>}
                    <>
                        <Switch>
                            {/* <Route path="/" exact component={<p>Hello</p>}/>
                            <Route path="/about" component={<p>Hello</p>}/>
                            <Route path="/contact" component={<p>Contact</p>}/>
                            <Route component={ErrorComponent}/> */}
                            <Route path="/" exact><CenterCard/></Route>
                            <Route path="/about" exact><CenterCard/></Route>
                            <Route path="/contact" exact><ContactUs/></Route>
                            <Route path="/vector" exact><VectorCatalog/></Route>
                            <Route path="/hartex" exact><HartexCatalog/></Route>
                        </Switch>
                    </>
            </div>

        );
    }
}

const CreateDrawer = (props) => {
  const classes = styleSheet()
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Grid container direction = "row" justify = "space-between" alignItems="center">
            <MenuIcon
              className = {classes.sideBarIcon}
              onClick={()=>{props.updateState(true)}} />

              <Typography variant="h6" className={classes.title}>Speedwell Cycle Industries</Typography>
              <a href="https://api.whatsapp.com/send?phone=+919898714218">
              <WhatsAppIcon style={{color:"white",backgroundColor:"green"}}/>
          </a>
          </Grid>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
       open={props.drawerState}
       onClose={()=>{props.updateState(false)}}
       onOpen={()=>{props.updateState(true)}}>

         <div
           tabIndex={0}
           role="button"
           onClick={()=>{props.updateState(false)}}
           onKeyDown={()=>{props.updateState(false)}}>
          <List className = {classes.list}>
             <ListItem key = {1} button divider><Link to="/about" color="inherit" style={{textDecoration: 'none'}}>About </Link> </ListItem>
             <ListItem key = {2} button divider><Link to="/contact" color="inherit" style={{textDecoration: 'none'}}>Contact Us </Link> </ListItem>
           </List>

       </div>
     </SwipeableDrawer>

    </div>
  );
}

//Larger Screens
function DestroyDrawer(){
  const classes = styleSheet();
  // const preventDefault = (event) => event.preventDefault();
  return (
  <div className={classes.root}>
      <AppBar position="static" color="primary">
      <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
          Speedwell Cycle Industries
          </Typography>
          {/* <Button color="inherit" to="/about">About</Button>
          <Button color="inherit" to="/contact">Contact Us</Button> */}
          <Button color="inherit"><Link to="/about" style={{color:'white',textDecoration: 'none'}}>About </Link></Button>
          <Button color="inherit"><Link to="/contact" style={{color:'white',textDecoration: 'none'}}>Contact Us </Link></Button>
      </Toolbar>
      </AppBar>
  </div>
  );
}

function CenterCard(){
  const classes=styleSheet();
  const products = [
    {id:1, image:TennisBall, name:'Tennis Ball'},
    {id:2,image:CricketKit, name:'Cricket Kit'},
    {id:3,image:ShuttleCocks, name:'Shuttlecock'},
    {id:4,image:TableTennisSet, name:'Table Tennis Set'},
    {id:5,image:FootBall, name:'Football'},
    {id:6,image:SkateBoard, name:'Skateboard'},
    {id:7,image:BicycleHelmet, name:'Bicycle Helmet'}
]
  return(
  <div className={classes.root}>
    <div><h3>Wholesale Supplier of Vector-X and Hartex Products</h3></div>
      <Grid container alignItems="stretch" justify="center" spacing={2} >
          <Grid item  xs={6} className = {classes.grid}>
              <Card className={classes.card}>
                  <CardActionArea>
                      <Carousel>
                        {
                          products.map(
                            p=>
                            <div>
                              <CardMedia
                            className={classes.media}
                            component="img"
                            height="240"
                            image={p.image}
                            // image="src\components\Images\VectorX_cover.jpeg"
                            title="Vector X"
                            key={p.id}
                            />
                            <p className="legend">{p.name}</p>
                            </div>
                          )
                        }
                      </Carousel>
                      <CardContent>
                      <img src={VectorLogo} width="40%" height="20%"/>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                          Vector X
                      </Typography> */}
                      <div><p style={{fontSize:20}}>India's leading brand in sports goods</p></div>
                      <Typography variant="body2" color="textSecondary" component="p">
                      With the growing demand of good health and fitness, Vector X comes up with innovations each day. Whether it’s hard core fitness or trying your hands on your favorite sport, VectorX is there for you. 
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="primary">
                      <Link to="/vector" style={{color:'blue', textDecoration: 'none'}}>View Products </Link>
                      </Button>
                  </CardActions>
              </Card>
          </Grid>
          <Grid item xs={6} className = {classes.grid}>
          <Card className={classes.card}>
                  <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      component="img"
                      height="300"
                      image={Hartex}
                      // image="src\components\Images\VectorX_cover.jpeg"
                      title="Hartex"
                      />
                      <CardContent>
                      <img src={HartexLogo} width="40%" height="15%"/>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                          Hartex
                      </Typography> */}
                      <p style={{fontSize:20}}>Trusted brand in India for Tyre-Tubes</p>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Hartex one of the leading manufacturers and exporters of quality bicycle tyres and tubes for more than 40 years now.
                         Also upcoming auto Tyre-Tubes.
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="primary">
                      <Link to="/hartex" style={{color:'blue', textDecoration: 'none'}}>View Products </Link>
                      </Button>
                  </CardActions>
              </Card>
          </Grid>
      </Grid>
  </div>
  );
}

function ContactUs(){
  return(
      <div style={{alignContent: "center"}}>
          <h3>Contact Us : </h3>
          <div>
            <LocationOnIcon/> : 1104, Sangita Complex, <br/> Opp. Doctor House, <br/>Ambawadi, <br/>Ahmedabad-380006, <br/>Gujarat <br/><br/>
          </div>
          <div>
          <PhoneIcon/> : +919898714218  
          <a href="https://api.whatsapp.com/send?phone=+919898714218">
              <WhatsAppIcon style={{color:"white",backgroundColor:"green"}}/>
          </a> <br/><br/>
          </div>
          <div>
          <MailIcon/> : raval104@yahoo.co.in     
          </div>
      </div>
  );
}

function ErrorComponent(){
  return <div>Error Occured.... Invalid URL</div>
}

Home.propTypes = {
    classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Home);
// export default Home;