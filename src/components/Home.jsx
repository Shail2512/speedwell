import React,{Component} from 'react';
import { AppBar, Toolbar, Typography, Button,List, ListItem, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia,CardContent, CardActions} from '@material-ui/core';
import './Home.css';
import PropTypes from 'prop-types';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Vector from './Images/VectorX_cover.jpeg';
import Hartex from './Images/hartex.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
const styleSheet = makeStyles((theme) => ({
    home:{
        fontSize:20,
    },
    root: {
      flexGrow: 1,
    },
    card:{
        // flexGrow:1,
        minWidth:300
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
        minWidth : 300,
        minHeight : 300,
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
        // this.createDrawer = this.createDrawer.bind(this);
        // this.destroyDrawer = this.destroyDrawer.bind(this);
        // this.centerCard = this.centerCard.bind(this);
        // this.contactUs = this.contactUs.bind(this);
        // this.errorComponent = this.errorComponent.bind(this);
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
            <div style={{width:'100vw'}}>
                {this.state.drawerActivate ? <CreateDrawer updateState={this.updateDrawer} drawerState={this.state.drawer}/> : <DestroyDrawer/>}
                    <>
                        <Switch>
                            {/* <Route path="/" exact component={<p>Hello</p>}/>
                            <Route path="/about" component={<p>Hello</p>}/>
                            <Route path="/contact" component={<p>Contact</p>}/>
                            <Route component={ErrorComponent}/> */}
                            <Route path="/" exact><p><CenterCard/></p></Route>
                            <Route path="/about" exact><p><CenterCard/></p></Route>
                            <Route path="/contact" exact><ContactUs/></Route>
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
             <ListItem key = {1} button divider><Link to="/about" color="inherit">About </Link> </ListItem>
             <ListItem key = {2} button divider><Link to="/contact" color="inherit">Contact Us </Link> </ListItem>
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
          <Button color="inherit"><Link to="/about" style={{color:'white'}}>About </Link></Button>
          <Button color="inherit"><Link to="/contact" style={{color:'white'}}>Contact Us </Link></Button>
      </Toolbar>
      </AppBar>
  </div>
  );
}

function CenterCard(){
  const classes=styleSheet();
  return(
  <div className={classes.root}>
    <h3>Wholesale Supplier of VectorX and Hartex products</h3>
      <Grid container alignItems="stretch" justify="center" spacing={2} >
          <Grid item  xs={6} className = {classes.grid}>
              <Card className={classes.card}>
                  <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      component="img"
                      height="300"
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
                      component="img"
                      height="300"
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

function ContactUs(){
  return(
      <div style={{alignContent: "center"}}>
          <h3>Contact Us : </h3>
          <div>
            <LocationOnIcon/> : 1104, Sangita Complex, <br/>Ambawadi, <br/>Ahmedabad-380006, <br/>Gujarat <br/><br/>
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