import React from 'react';

import Movie from './Movie';

const Movies = ({ moviesArr }) => {
    const movieInfoList = moviesArr.map((movieInfo) => <Movie key={movieInfo.id} movieInfo={movieInfo} />)
    return <ul>{movieInfoList}</ul>
}  

export default Movies;