import React from 'react';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const Movie = ({ movieInfo}) => {
    return (
            <li>
                <Typography variant="h4">
                    {movieInfo.title}
                </Typography>
                <img 
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieInfo.poster_path}`}
                    alt={movieInfo.title}
                ></img>
                <Typography variant="subtitle1" align="center">
                    Release Date: {movieInfo.release_date}
                </Typography>
            </li>
    )
}

export default Movie;