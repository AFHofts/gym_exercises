import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ bodyPart }) => {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const allExercises = await fetchData('https://gym-fit.p.rapidapi.com/exercises/search', exerciseOptions);
        
        const exercisesWithImages = allExercises.map(exercise => ({
          ...exercise,
          imageUrl: getImageUrlForExercise(exercise), // Function to get image URL for each exercise
        }));
        setExercises(exercisesWithImages);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        // Handle error here if necessary
      }
    };

    fetchExercisesData();
  }, []);

  const getImageUrlForExercise = (exercise) => {
    
   
      switch (exercise.id) {
          case "0cf3e60b-4cb4-4e95-84d3-87c940b51732":
              return 'https://cdn.shopify.com/s/files/1/0449/8453/3153/files/barbell-deadlift_600x600.gif?v=1690860568';
          case "13442157-21c9-4aae-b1c0-c9cdc3372775":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/04/dumbbell-reverse-curl.gif';
          case "176ec79e-971b-4649-afcc-3ebb7057cc71":
              return 'https://homeworkouts.org/wp-content/uploads/anim-mountain-climbers.gif';
          case "20174e04-0edd-43a8-b964-0eb25248634e":
              return 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/side-crunch.gif';
          case "2031d11b-611e-4286-bd0b-3035c524ffee":
              return 'https://i.pinimg.com/originals/af/3a/a1/af3aa1a7ce97c56350fda73829525075.gif';
          case "20d56ce0-3381-4a86-8ddf-27fa1744d23a":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif';
          case "257cc0b7-30f0-458f-b28e-018409b3a7ec":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif';
          case "25bde911-03a9-44eb-a04e-0f7228832927":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif';
          case "26dc6147-0d37-47f6-a434-f5b8da249d11":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif';
          case "2c24d7d3-c898-4714-b155-b04d1d21fa77":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-dumbbell-Fly.gif';
          case "2eaa4d63-a522-43cf-9708-4a66495797ca":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif';
          case "38c9e625-7213-448c-808d-6410c3c5aadc":
              return 'https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif';
          case "3b8edd89-c79a-43a8-80a5-dd6fa8177595":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Flutter-Kicks.gif';
          case "3d5510cd-c2de-4317-9741-b0f8a1ce9b15":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif';
          case "3e1df6ff-b2a0-46e9-8ebd-30fde985de54":
              return 'https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif';
          case "419bc295-ddc8-4fe3-9d60-2024c02c130b":
              return 'https://i.pinimg.com/originals/37/4d/3f/374d3f830f7fa0c0d56edb3792577b4e.gif';
          case "41aeff91-79d7-4d73-883d-f61d117dc0d8":
              return 'https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918';
          case "4341193e-d0a8-44d3-8747-1a1a0e63c6f6":
              return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtf2WhE39EURV3HS12g41Q4lB9CejLjI9dqZuFJcfLQ&s';
          case "43afce45-2eac-473c-bc70-957f79666eaf":
              return 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-Dumbbell-Leg-Curl.gif';
          case "47f7aba8-991c-44eb-86bc-5a47fba335aa":
              return 'https://i.pinimg.com/originals/42/c2/e0/42c2e013e244a47fe8fc71b49001345b.gif';
          case "4b9555a0-8fa4-4e57-ba8c-6108c6b32d54":
              return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCoX9A2D9zE2ULa07cS2wIH5fHIgA0tkRv726jTRCjQ&s';
          case "4f5b8d06-4254-4c7a-809e-2ca06cc934cc":
              return 'https://www.oldschoollabs.com/wp-content/uploads/2021/02/40581301-Leg-Raise-Dragon-Flag_Waist_720.gif';
          case "5200b74e-1aff-44ef-bf0c-4a13dd227bfa":
              return 'https://i.pinimg.com/originals/a1/10/5a/a1105a644aa6126ccd361c5ee221fc30.gif';
          case "5599bae5-949a-407a-a472-181a1342c1bb":
              return 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Calf-Press-on-Leg-Press-Machine.gif';
          case "57580614-5392-4100-ba3e-58aea18bf4c7":
              return 'https://i.pinimg.com/originals/8e/3c/a8/8e3ca8b47008f15ddaae99939f211bd8.gif';
          case "5f72f486-c03d-45c9-b0d6-1eefa8a27ecc":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif';
          case "5f7f7304-a99f-407f-99ff-fb4abbdfca90":
              return 'https://homeworkouts.org/wp-content/uploads/anim-leg-raise.gif';
          case "63f0dd8e-b0af-4cc9-b08a-90b8c00df56a":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-V-up.gif';
          case "66b41463-fa55-43c7-b0de-7ebd512ce78a":
              return 'https://cdn.shopify.com/s/files/1/1501/0558/files/Australian-Pull-Ups_a1cc8e8b-2587-4116-be41-8939f26f71fb.gif?v=1507281598';
          case "6c2b7631-1a4d-4b3a-bc96-02450551f97d":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif';
          case "6cec750e-ca8c-40a8-8a19-c83bca32ea29":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif';
          case "79e308ad-4db1-4c52-ab8d-a76f41829532":
              return 'https://i.pinimg.com/originals/a2/cf/5d/a2cf5d462de2446fd77c2237fe21f35e.gif';  
          case "7cc3c13c-5bc4-458d-ba3b-3a08d5d55971":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Knee-Push-Up.gif';
          case "828e00e7-222e-4b1b-9715-73e279e9e015":
              return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QzNWg-vbgvN_BL_j6Ij3YqlK95m-saqjNXbIyQpKGg&s';
          case "83ff656c-a0aa-49f4-82d1-ebf48fab208c":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif';
          case "84177edb-a08d-4756-8be7-2bf6515c91e4":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dips.gif';
          case "8a764a28-b2d8-496e-9d08-fa352280b178":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif';
          case "8e47bfa6-21bf-4702-9312-ef54d35651b3":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Barbell-Seated-Calf-Raise.gif';
          case "90b1a8bd-7ba8-4429-8425-db7ed425a40b":
              return 'https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Seated-Gittleson-Shrug.gif';
          case "91c8161a-4966-4eeb-b091-8ee4825145ea":
              return 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Single-Arm-Twisting-Seated-Cable-Row.gif';
          case "941e85ab-d459-48cd-9f7a-8323272585f6":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif';
          case "982afe95-e4df-4741-89e5-9333ce2c6cf5":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif';
          case "9a7486ce-0c41-4cfe-af3b-088ab583eef4":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Weighted-Back-Extension.gif';
          case "9d61550a-b858-4550-b584-deeea8d2bc45":
              return 'https://media.tenor.com/ToAHkKHVQP4AAAAM/on-lying-triceps-al%C4%B1n-press.gif';
          case "a0e06014-3b00-4a3d-ad97-717bb4c62325":
              return 'https://www.inspireusafoundation.org/wp-content/uploads/2023/09/russian-twist.gif';
          case "a1281637-139d-4864-903b-67d62037c16e":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif';
          case "a747b623-a4e8-4756-8059-775f05014a7a":
              return 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Push-Up-to-Renegade-Row.gif';
          case "ab0fefa0-937a-416e-9f6f-d13f06890d73":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif';
          case "af3d6a16-23a2-42be-a486-fc2c00e66098":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif';
          case "b4d49731-534c-4cbd-821f-aed5108e205c":
              return 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Dumbbell-Curl-On-Arm-Blaster.gif';
          default:
              return 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'; // Default image URL if exercise ID doesn't match
      }
  };
  

  const filteredExercises = bodyPart ? exercises.filter(exercise => exercise.bodyParts.includes(bodyPart)) : exercises;

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} imageUrl={exercise.imageUrl} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(filteredExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
