import React, { useState } from 'react';

import Movies from './Movies';

import useFetchMovies from '../hooks/useFetchMovies';
import TextField from '@material-ui/core/TextField';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const SearchMovies = () => {
    const [movieName, setMovieName] = useState("");
        
    const allInfo = useFetchMovies(movieName);

    const movies = Object.keys(allInfo).map(movieGenre => {
        let moviesArr = allInfo[movieGenre];

        return (
            <div key={movieGenre}>
                <Typography variant="h3">
                    {movieGenre}
                </Typography>
                <Movies moviesArr={moviesArr}/>
            </div>
        )
    }); 

    return (
        <>
            <div className="search-movies-container">
                <TextField 
                    variant="outlined"
                    label="Movie name"
                    value={movieName} 
                    onChange={(e) => setMovieName(e.target.value)} 
                    placeholder="TYPE A MOVIE NAME"
                />
                {movies}            
            </div>
        </>
    );
}

export default SearchMovies;