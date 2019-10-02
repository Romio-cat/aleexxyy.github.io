import React from 'react';
import {connect} from 'react-redux';

const Row = (props) => {
    let newArr = props.movie.map(film => film = 
        <div className='movie-box' key={film.id}>
            <div className="movie-img" style={{backgroundImage: `url(${film.image.medium})`}}></div>
            <div className="movie-name">{film.name}</div>
            <div className="add" id={film.id} >Follow</div>
            <div className="info">info</div>
        </div>
        )
    return(
        <div className="row">
            {newArr}
        </div>
)}

const mapStateToProps = ({movie, search}) => {
    return { movie, search }
}
export default connect(mapStateToProps)(Row);
