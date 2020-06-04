import React, { Component } from 'react';
import Slider from './Slider'
import {Paper, withStyles, Button} from '@material-ui/core';
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
import VectorLogo from './Images/vectorLogo.jpeg';
import BicycleHelmet from './Images/helmet.jpeg';

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
      <Paper elevation={5} className="paper">
         <img src = {text} alt={text} width="150" height="200"/>
          <h4>{name}</h4>
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
    this.VectorX = this.VectorX.bind(this);
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
      <Slider/>
      {this.VectorX()}
      <Paper elevation="4" style={{background:'lightblue', margin:'1%', textAlign:'left'}}>
        <img src={VectorLogo} style={{margin:"1%"}} alt = "VectorLogo" height="35vh" width="150vw"/>
        <Button variant="contained" color="primary" style={{margin:"1%", float:'right'}}>
        <Link to="/vector" style={{color:'white', textDecoration: 'none'}}>View More</Link>
        </Button>
        <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
      </Paper>
      <p style={{color:"red"}}>  The development of this site is under progress. <Link to="/contact" style={{color:'red'}}>Contact Us</Link> for more details</p>
    </div>
  );
}


VectorX(){
  const {classes} = this.props
  return(
    <div className={classes.root}>
      <p style={{fontSize:"20px"}}>
        <b>Speedwell Cycle Industries</b> owns the wholesale supply of Sports Good's company and Tyre-Tube companies. <br/>
        One of the leading brands in sports goods "Vector-X" is widely accepted all over India.<br/>

      </p> 
    </div>
  )
}
}
About.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(About);
