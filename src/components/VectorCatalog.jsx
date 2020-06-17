import React, { Component } from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
// import TennisBall from './Images/tennisBall.jpeg';
// import CricketKit from './Images/cricketKit.jpeg';
// import ShuttleCocks from './Images/shuttleCocks.jpeg';
// import TableTennisSet from './Images/tableTennisSet.jpeg';
// import FootBall from './Images/VectorX_cover.jpeg';
// import SkateBoard from './Images/skateBoard.jpeg';
import VectorLogo from './Images/vectorLogo.png';
// import BicycleHelmet from './Images/helmet.jpeg';
import Badminton from './Images/badminton_f.PNG';
import Basketball from './Images/basketball_f.PNG';
import Football from './Images/football_f.PNG';
import Cricket from './Images/cricket_f.PNG';
import Boxing from './Images/boxing_f.PNG';
import Skates from './Images/skates_f.PNG';
import Volleyball from './Images/volleyball_f.PNG';
import Swimming from './Images/swimming_f.PNG'
import Ropes from './Images/ropes_f.PNG';
import Bottles from './Images/bottles_f.PNG';
import { Link } from 'react-router-dom'
import vectorAd from './Images/vectorad.mp4'
const styleSheet = {
    root: {
        flexGrow: 1,
        color: 'red',
        paddingTop: '5%',
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
class VectorCatalog extends Component {
    constructor(props) {
        super(props)
        this.Catalog = this.Catalog.bind(this);
        this.state = {
            products: [
                { id: 1, image: Cricket, name: 'Cricket' },
                { id: 2, image: Football, name: 'Football' },
                { id: 3, image: Volleyball, name: 'Volleyball' },
                { id: 4, image: Badminton, name: 'Badminton' },
                { id: 5, image: Basketball, name: 'Basketball' },
                { id: 6, image: Boxing, name: 'Boxing' },
                { id: 7, image: Skates, name: 'Skates' },
                { id: 8, image: Swimming, name: 'Swimming' },
                { id: 9, image: Bottles, name: 'Bottles' }
            ]

        }
    }

    Catalog() {
        const { classes } = this.props
        return (

            <div className={classes.root}>
                <img src={VectorLogo} width="30%" height="8%" />
                <div>
                <video className='videoTag' controls style={{width:'60%'}}>
                    <source src={vectorAd} type='video/mp4' />
                </video>
                </div>
                <Paper elevation={5} style={{ margin: '4%', padding: '2%', textAlign: 'center' }}>
                    <Grid container alignItems="stretch" justify="center" spacing={2} className={classes.root}>
                        {

                            this.state.products.map(
                                p =>
                                    <Grid item xs={2} className={classes.grid} key={p.id}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    component="img"
                                                    height="200"
                                                    image={p.image}
                                                    // image="src\components\Images\VectorX_cover.jpeg"
                                                    title={p.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        {p.name}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Card>
                                    </Grid>
                            )

                        }
                    </Grid>
                </Paper>
                {/* <hr/> */}
                <p style={{ color: "red" }}>  The development of this site is under progress. <Link to="/contact" style={{ color: 'red' }}>Contact Us</Link> for more details</p>
                {/* <h6>This page is under construction. Many products are still not added. Contact us for any query</h6> */}
            </div>
        );
    }
    render() {

        return (
            <div className="VectorCatalog">
                {this.Catalog()}
            </div>
        );
    }
}



// const styleSheet = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         color:'red',
//       },
//       grid:{
//         minWidth:300,
//         // alignContent: 'flex',
//         alignItems:'flex-end',
//       },
//       card:{
//         // flexGrow:1,
//         minWidth:300,
//         height:"100%",
//     },
//     logo:{
//         width:30,
//     },

//   }));
// class VectorCatalog extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             products : [
//                 {id:1, image:TennisBall, name:'Tennis Ball'},
//                 {id:2,image:CricketKit, name:'Cricket Kit'},
//                 {id:3,image:ShuttleCocks, name:'Shuttlecock'},
//                 {id:4,image:TableTennisSet, name:'Table Tennis Set'},
//                 {id:5,image:FootBall, name:'Football'},
//                 {id:6,image:SkateBoard, name:'Skateboard'},
//                 {id:7,image:BicycleHelmet, name:'Bicycle Helmet'}
//             ]

//         }
//     }
//     render(){

//     return (
//     <div className="VectorCatalog">
//         {console.log(this.props)}
//         <Catalog products1 = {this.state.products}/>
//     </div>
//   );
// }
// }


// const Catalog = (props) => {
//     const classes = styleSheet()
//     const array = props.products1
//     return (

//         <div className={classes.root}>
//             {/* {console.log( "Inside function ",props.products1)} */}
//             <img src={VectorLogo} width="50%" height="10%"/>
//             <Grid container alignItems="stretch" justify="center" spacing={2} className={classes.root}>
//             {

//                     <h1>{array[0].id}</h1>

//                         // props.products1 && props.products1.map(
//                         //     p=>
//                         //     <h1>p.id</h1>
//                             // <Grid item  xs={4} className = {classes.grid} key={p.id}>
//                             //     <Card className={classes.card}>
//                             //         <CardActionArea>
//                             //             <CardMedia
//                             //             className={classes.media}
//                             //             component="img"
//                             //             height="400"
//                             //             image={p.image}
//                             //             // image="src\components\Images\VectorX_cover.jpeg"
//                             //             title={p.name}
//                             //             />
//                             //             <CardContent>
//                             //             <Typography gutterBottom variant="h5" component="h2">
//                             //                 {p.name}
//                             //             </Typography>
//                             //             </CardContent>
//                             //         </CardActionArea>

//                             //     </Card>
//                             // </Grid>
//                         // )

//                         }
//             </Grid>
//             <h6>This page is under construction. Many products are still not added. Contact us for any query</h6>
//         </div>
//       );
// }

VectorCatalog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(VectorCatalog);
// export default VectorCatalog;