import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Hartex2 from './Images/hartex1.jpg';
import VectorX1 from './Images/vectorx.jpg';
import VectorX2 from './Images/vectorX_1.jpg';
import VectorX3 from './Images/vectorX2.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const products_pc = [
  {id:1,image:VectorX3, name:'Vector1'},
  {id:2,image:VectorX2, name:'Vector2'},
  // {id:4,image:VectorX1, name:'Vector3'},
  {id:5, image:Hartex2, name:'Hartex2'}
]
const products_mobile = [
  // {id:1,image:VectorX3, name:'Vector1'},
  {id:2,image:VectorX2, name:'Vector2'},
  {id:4,image:VectorX1, name:'Vector3'},
  {id:5, image:Hartex2, name:'Hartex2'}
]
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
    flexGrow: 1,
    position:'center',
    // height:"40vh",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 0,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '70vh',
    display: 'block',
    // maxWidth: 500,
    overflow: 'hidden',
    // width: '100%',
    position:'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = products_pc.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const isMobile = window.innerWidth < 480;
  const products = isMobile ? products_mobile : products_pc;
  return (
    <div className={classes.root}>
        <Paper elevation={5}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {products.map((step, index) => (
            <div key={step.name}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.image} alt={step.name}/>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        </Paper>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}

    </div>
  );
}

export default SwipeableTextMobileStepper;
