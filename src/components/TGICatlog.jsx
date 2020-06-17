import React, { Component } from 'react';
import { Paper, Typography, withStyles, SwipeableDrawer, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import TGI1 from './Images/TGI/TGI_1.jpg';
import TGI2 from './Images/TGI/TGI_2.jpg';
import TGI3 from './Images/TGI/TGI_3.jpg';
import TGI4 from './Images/TGI/TGI_4.jpg';
import TGI5 from './Images/TGI/TGI_5.jpg';
import TGI6 from './Images/TGI/TGI_6.jpg';
import TGI7 from './Images/TGI/TGI_7.jpg';
import TGI8 from './Images/TGI/TGI_8.jpg';
import TGI9 from './Images/TGI/TGI_9.jpg';
import TGI10 from './Images/TGI/TGI_10.jpg';
import TGI11 from './Images/TGI/TGI_11.jpg';
import TGI12 from './Images/TGI/TGI_12.jpg';
import TGI13 from './Images/TGI/TGI_13.jpg';
import TGI14 from './Images/TGI/TGI_14.jpg';
import TGI15 from './Images/TGI/TGI_15.jpg';
import TGI16 from './Images/TGI/TGI_16.jpg';
import TGI17 from './Images/TGI/TGI_17.jpg';
import TGI18 from './Images/TGI/TGI_18.jpg';
import TGI19 from './Images/TGI/TGI_19.jpg';
import TGI20 from './Images/TGI/TGI_20.jpg';
import TGI21 from './Images/TGI/TGI_21.jpg';
import TGI22 from './Images/TGI/TGI_22.jpg';
import TGI23 from './Images/TGI/TGI_23.jpg';
import TGI24 from './Images/TGI/TGI_24.jpg';
import TGI25 from './Images/TGI/TGI_25.jpg';
import TGI26 from './Images/TGI/TGI_26.jpg';
import { Link } from 'react-router-dom'
import TGILogo from './Images/TGI/TGILogo.jpg'
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
class TGICatalog extends Component {
    constructor(props) {
        super(props)
        this.Catalog = this.Catalog.bind(this);
        this.state = {
            products: [
                { id: 1, image: TGI1, name: 'TGI1' },
                { id: 2, image: TGI2, name: 'TGI2' },
                { id: 3, image: TGI3, name: 'TGI3' },
                { id: 4, image: TGI4, name: 'TGI4' },
                { id: 5, image: TGI5, name: 'TGI5' },
                { id: 6, image: TGI6, name: 'TGI6' },
                { id: 7, image: TGI7, name: 'TGI7' },
                { id: 8, image: TGI8, name: 'TGI8' },
                { id: 9, image: TGI9, name: 'TGI9' },
                { id: 10, image: TGI10, name: 'TGI10' },
                { id: 11, image: TGI11, name: 'TGI11' },
                { id: 12, image: TGI12, name: 'TGI12' },
                { id: 13, image: TGI13, name: 'TGI13' },
                { id: 14, image: TGI14, name: 'TGI14' },
                { id: 15, image: TGI15, name: 'TGI15' },
                { id: 16, image: TGI16, name: 'TGI16' },
                { id: 17, image: TGI17, name: 'TGI17' },
                { id: 18, image: TGI18, name: 'TGI18' },
                { id: 19, image: TGI19, name: 'TGI19' },
                { id: 20, image: TGI20, name: 'TGI20' },
                { id: 21, image: TGI21, name: 'TGI21' },
                { id: 22, image: TGI22, name: 'TGI22' },
                { id: 23, image: TGI23, name: 'TGI23' },
                { id: 24, image: TGI24, name: 'TGI24' },
                { id: 25, image: TGI25, name: 'TGI25' },
                { id: 26, image: TGI26, name: 'TGI26' }
            ]

        }
    }

    Catalog() {
        const { classes } = this.props
        return (

            <div className={classes.root}>
                <img src={TGILogo} width="30%" height="8%" />
                <div>
                {/* <video className='videoTag' controls style={{width:'60%'}}>
                    <source src={vectorAd} type='video/mp4' />
                </video> */}
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
                                                {/* <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        {p.name}
                                                    </Typography>
                                                </CardContent> */}
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
            <div className="TGICatalog">
                {this.Catalog()}
            </div>
        );
    }
}


TGICatalog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(TGICatalog);
// export default VectorCatalog;