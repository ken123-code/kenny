import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';
import './section2.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Section2() {
  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetchData();
  }, []);

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";

  const fetchData = () => {
    axios.get(url)
      .then(function (res) {
        // Limit the number of items to 3 for demonstration
        setData(res.data.slice(0, 3));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        position: 'relative',
        overflow: 'hidden', // Ensures overflow is handled
      }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{ width: '100%' }} // Ensure the swipeable views take full width
      >
        {data.map((step, index) => (
          <div key={step.img} style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%', // Ensures div takes full height
              width: '100%', 
              position: 'relative',
              textAlign: 'center' // Center text alignment
            }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                mb: 2, // Margin bottom for spacing
                color: 'text.primary',
                fontWeight: 'bold',
              }}
            >
              {step.name}
            </Typography>
            <Box
              component="img"
              sx={{
                maxWidth: '60vw', // 60% of the viewport width
                width: '80%', // Adjust width to be 60% of container
                height: 'auto', // Maintain aspect ratio
                borderRadius: 2, // Optional: add rounded corners
              }}
              src={step.img}
              alt={step.name}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ 
          position: 'absolute',
          bottom: 0,
          width: '100%', 
          bgcolor: 'transparent', // Make background transparent to blend with image
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Section2;
