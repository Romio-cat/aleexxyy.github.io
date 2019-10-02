import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "./../../../../actions";

class ButtonFilterFavor extends React.Component {
    chooseFilter(e){
        let newFilterMovie = this.props.movie.filter(value => value.genres.indexOf(String(e.target.innerHTML)))
        this.props.movieLoaded(newFilterMovie);
    }
    render(){
        let NewArr = this.props.filter.map(value => <li key={value} onClick={this.chooseFilter.bind(this)}>{value}</li>);
    
    return(
        <li id="filter">
            <a href="index.html">
                <i className="fas fa-plus-circle"></i>
                     Filter
            </a>
            <ul>{NewArr}</ul>
        </li>
    )}
}
const mapStateToProps = ({movie, filter, filterMovie}) => {
    return {movie, filterMovie, filter}
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterFavor)