import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ selectedExercise, allExercises, setBodyPart}) => {

    
  // Check if selectedExercise is defined and has bodyParts
  const selectedMuscles = selectedExercise?.bodyParts || [];


  // Filter out exercises targeting the same muscles
  const similarExercises = allExercises.filter(exercise => {
    
    return (
    exercise.id !== selectedExercise.id && // Exclude the selected exercise itself
    exercise.bodyParts && // Ensure exercise has bodyParts defined
    exercise.bodyParts.some(part => selectedMuscles.includes(part))
  );
});



  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {similarExercises.length !== 0 ? <HorizontalScrollbar data={similarExercises} setBodyPart={setBodyPart}/> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
