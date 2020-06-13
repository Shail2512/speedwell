import React, { Component } from 'react';
import Slider from './Slider'
import {Paper, withStyles, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './About.css';
import TennisBall from './Images/tennisBall.jpeg';
import CricketKit from './Images/cricketKit.jpeg';
import ShuttleCocks from './Images/shuttleCocks.jpeg';
import TableTennisSet from './Images/tableTennisSet.jpeg';
import FootBall from './Images/VectorX_cover.jpeg';
import SkateBoard from './Images/skateBoard.jpeg';
import VectorLogo from './Images/vectorLogo.png';
import BicycleHelmet from './Images/helmet.jpeg';
import Zoom from 'react-reveal/Zoom';
import { Container} from 'react-floating-action-button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
const styleSheet = {
  root:{
    // display: 'flex',
    // flexWrap: 'nowrap',
    // maxWidth: 2500,
    alignItems : "center",
    // overFlowX : 'scroll',
    // // overFlowY : 'hidden',
    // height : 200,
    // '& > *': {
    //   margin: 10,
    //   width: 150,
    //   height: 200,
    //   // display:'inline-block',
    //   flex: '0 0 auto',
    // },
}
}
const images = [
  {id:1, image:TennisBall, name:'Tennis Ball'},
  {id:2,image:CricketKit, name:'Cricket Kit'},
  {id:3,image:ShuttleCocks, name:'Shuttlecock'},
  {id:4,image:TableTennisSet, name:'Table Tennis Set'},
  {id:5,image:FootBall, name:'Football'},
  {id:6,image:SkateBoard, name:'Skateboard'},
  {id:7,image:BicycleHelmet, name:'Bicycle Helmet'}
];

const MenuItem = ({ text, name, selected }) => {
  return (
    <div
      className="menu-item"
    >
      <Paper elevation={5} className="paper" style={{borderRadius:"50%",alignItems:'center'}}>
        <img src = {text} alt={text} width="150" height="200" style={{borderRadius:"50%"}}/>
        <h4 style={{position:"center"}}>{name}</h4>
      </Paper>
    </div>
  );
};

const Menu = (images) => images.map(el => {
  // const { name } = el;
  // console.log(el)

  return (
    <MenuItem
      text={el.image}
      name = {el.name}
      key={el.id}
    />
  );
});

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class About extends Component{
  constructor(props){
    super(props)
    this.Description = this.Description.bind(this);
    this.state={
      selected:0
      
  }
  }

  onSelect = key => {
    this.setState({ selected: key });
  }
  
  render(){
    const { selected } = this.state;
    const menu = Menu(images, selected);
    return (
    <div className="About" style={{marginTop:"4%"}}>
      <div >
      
        <Slider/>
        {this.Description()}
        <div style={{position:'fixed',zIndex:'100', marginLeft:'80%'}}>
        <a href="https://api.whatsapp.com/send?phone=+919898714218">
                <WhatsAppIcon fontSize="large" style={{color:"white",backgroundColor:"green", borderRadius:'50%', hover:{color:'black'}}}/>
            </a>
          <FacebookIcon fontSize="large" style={{color:"blue"}}/>
      </div>
      </div>
      
      {/* <div style={{height:'100vh'}}> */}
      {/* <Reveal effect="fadeInUp" effectOut="fadeOutLeft" delay={7000}> */}
      
        <Zoom>
        <Paper elevation="4" style={{background:'lightblue', margin:'2%', textAlign:'left',paddingBottom:'1%'}}>
        <img src={VectorLogo} style={{margin:"1%"}} alt = "VectorLogo" height="35vh" width="150vw"/>
          <Button variant="contained" color="primary" style={{margin:"1%", float:'right'}}>
          <Link to="/vector" style={{color:'white', textDecoration: 'none'}}>View More</Link>
          </Button>
          <Typography variant="h6" align="center"> One of the leading brands in sports goods widely accepted all over India.<br/></Typography>
          <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
              </Paper>
        </Zoom>

      {/* </Reveal> */}
      {/* </div> */}
      <p style={{color:"red"}}>  The development of this site is under progress. <Link to="/contact" style={{color:'red'}}>Contact Us</Link> for more details</p>
      
    </div>
  );
}

Description(){
  const {classes} = this.props
  return(
    <div className={classes.root}>
      <p style={{fontSize:"20px"}}>
        <b>Speedwell Cycle Industries</b> owns the wholesale supply of Sports Good's company and Tyre-Tube companies. <br/>

      </p> 
    </div>
  )
}
}
About.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(About);
