import React, { Component } from 'react';
import { Paper,withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import F1 from './Images/Display/Basketball_Size_1_A.PNG';
import F2 from './Images/Display/Basketball_Size_3_A.PNG';
import F3 from './Images/Display/Basketball_Size_5-7_A.PNG';
const styleSheet = {
    root: {
        flexGrow: 1,
        color: 'red',
        marginTop: '80px'
    },

}
class BasketballComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                { id: 1, image: F1, name: 'F1' },
                { id: 2, image: F2, name: 'F2' },
                { id: 3, image: F3, name: 'F3' }
            ]

        }
    }

    
    render() {

        return (
            <div className="BasketballComponent" style={{marginTop:'10vh'}}>
                <div style={{fontSize:'40px'}}>
                    <strong>Basketball</strong>
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


BasketballComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(BasketballComponent);
// export default BasketballComponent;