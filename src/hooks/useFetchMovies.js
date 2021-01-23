import { useState, useEffect } from 'react';

import getData from '../services/getData';
import genresUrl from '../services/genresUrl';
import allDataUrl from '../services/allDataUrl';

const MIN_SEARCH_LENGTH = 1;

const useFetchMovies = (movieName) => {
           
    const [allInfo, setAllInfo] = useState([]);
    
    useEffect(() => {
        (async () => {
            if (movieName.length > MIN_SEARCH_LENGTH) {
                console.log("searching...");
                try {
                    const allMoviesData = await getData(allDataUrl(movieName));
                    const allGenres = await Promise.all(allMoviesData.results.map(({id}) => getData(genresUrl(id))));
                    setAllInfo(allMoviesData.results.reduce((prev, {title, id, release_date, poster_path}, i) => {
                        if (allGenres[i].genres.length === 0){
                            prev["Other"] = [...(prev["Other"] || []), {title, id, release_date, poster_path}];
                        }else{
                            allGenres[i].genres.forEach(({name}) => {
                                prev[name] = [...(prev[name] || []), {title, id, release_date, poster_path}];
                            }); 
                        }
                        return prev;
                    },{}));
        
                }catch(err) {
                    console.error(err);
                }
            } else {
                setAllInfo([]);
            }
        })();

    }, [movieName]);
    
    return allInfo;
    
}

export default useFetchMovies;