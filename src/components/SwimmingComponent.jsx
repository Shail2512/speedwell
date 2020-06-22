import React, { Component } from 'react';
import { Paper,withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import F1 from './Images/Display/Swimming_Cap_1_A.PNG';
import F2 from './Images/Display/Swimming_Cap_A.PNG';
import F3 from './Images/Display/Swimming_Goggles_A.PNG';
import F4 from './Images/Display/Swimming_Goggles_JR_SR.PNG';
import F5 from './Images/Display/Swimming_Mask_1_A.PNG';
const styleSheet = {
    root: {
        flexGrow: 1,
        color: 'red',
        marginTop: '80px'
    },

}
class SwimmingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { id: 1, image: F1, name: 'F1' },
                { id: 2, image: F2, name: 'F2' },
                { id: 3, image: F3, name: 'F3' },
                { id: 2, image: F4, name: 'F4' },
                { id: 3, image: F5, name: 'F5' }
            ]

        }
    }

    
    render() {

        return (
            <div className="SwimmingComponent" style={{marginTop:'10vh'}}>
                <div style={{fontSize:'40px'}}>
                    <strong>Swimming</strong>
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


SwimmingComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SwimmingComponent);
// export default SwimmingComponent;