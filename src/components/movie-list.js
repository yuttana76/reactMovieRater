import React from  'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {API} from '../api-service'
import {useCookies} from 'react-cookie'

function MovieList(props){
    const [token] = useCookies(['mr-token'])

    const movieClicked = movie =>evt=>{
        props.movieClicked(movie)
    }

    const movieEdit = movie =>{
        props.editClicked(movie);
    }

    const removieClicked = movie =>{
        API.deleteMovie(movie.id,token['mr-token'])
        .then(()=>props.removeClicked(movie,token['mr-token']))
        .catch(error=>console.log(error))

    }
    
    return(
        <div>
              {props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id} className="movie-item">
                        <h2 onClick={movieClicked(movie)} >{movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit}  onClick={()=>movieEdit(movie)}/>
                        <FontAwesomeIcon icon={faTrash} onClick={()=>removieClicked(movie)}/>

                    </div>
                
                )
              })}
            </div>
    )
}

export default MovieList;