import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://gym-fit.p.rapidapi.com/body-parts', exerciseOptions);
            
            // Check if bodyPartsData is an array, if not, convert it to an array
            const bodyPartsArray = Array.isArray(bodyPartsData) ? bodyPartsData : [bodyPartsData];
            setBodyParts(['all', ...bodyPartsArray]);
        }
    
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://gym-fit.p.rapidapi.com/exercises/search', exerciseOptions);
            console.log("Exercises data:", exercisesData);
    
            const searchedExercises = exercisesData.filter((exercise) => {
                // Convert both search query and exercise name to lowercase for case-insensitive comparison
                const searchTerm = search.toLowerCase();
                const exerciseName = exercise.name.toLowerCase();
                return exerciseName.includes(searchTerm);
            });
    
            console.log("Searched exercises:", searchedExercises);
    
            setSearch('');
            setExercises(searchedExercises);
            console.log("Filtered exercises:", searchedExercises);
        }
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br />
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField sx={{
                input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
                width: { lg: '800px', xs: '350px'},
                backgroundColor: '#fff',
                borderRadius: '40px'
            }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises" type="text" />
            <Button className="search-btn" sx={{
                bgcolor: '#FF2625',
                color: '#fff',
                textTransform: 'none', 
                width: { lg: '175px', xs: '80px'},
                fontSize: { lg: '20px', xs: '14px'},
                height: '56px', 
                position: "absolute", 
                right: '0'
            }}
            onClick={handleSearch}>
                Search
            </Button>   
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises