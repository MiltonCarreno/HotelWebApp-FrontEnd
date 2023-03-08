import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import { v4 } from 'uuid';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Hero = ({movies}) => {
    return (
        <div className="movie-carousel-container" key={v4()}>
            <Carousel key={v4()}>
                {
                    movies?.map((movie) =>{
                        return(
                            <Paper key={v4()}>
                                <div className='movie-card-container' key={v4()}>
                                    <div className='movie-card' key={v4()} style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-detail' key={v4()}>
                                            <div className='movie-poster' key={v4()}>
                                                <img src={movie.poster} key={v4()} alt=''/>
                                            </div>
                                            <div className='movie-title' key={v4()}>
                                                <h4 key={v4()}>{movie.title}</h4>
                                            </div>
                                            <div className='movie-buttons-container'>
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className='play-button-icon-container'>
                                                        <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero