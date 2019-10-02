import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "./../../../../actions";
import ButtonClick from './ButtonClick'


class SearchBlock extends React.Component {
    clickButton(){
        let arrMovie;
        ButtonClick(this.props).then(res => arrMovie = res).then(() => { this.props.movieLoaded(arrMovie[0]); this.fixArrFavorite(arrMovie[1])});
    };
    fixArrFavorite(arr){
        let objMovie = {};
        for (let film of arr) {
            objMovie[film] = true
        }
        this.props.filterMovie(Array.from(Object.keys(objMovie)));
    }

    render(){
        return(
            <li id="serch">
                <input type="text" id="inputSearch" onChange={(e) =>{ this.props.writeSearch(e.target.value); console.log(this.props)}}/>
                <button id="button" onClick={this.clickButton.bind(this)}>
                    <i className="fas fa-search"></i>
                </button>
            </li>
        )
    }
}


const mapStateToProps = ({movie, search, filter}) => {
    return {movie, search, filter}
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock)





    // async clickButton() {
    //     let story = sessionStorage.getItem('search')? sessionStorage.getItem('search'): '[]';
    //     let inputValue = document.querySelector('#inputSearch').value || story;
    //     let searchLinks = await fetch(`http://api.tvmaze.com/search/shows?q=${this.props.search}`);
    //     let search = await searchLinks.json();
    //     if (search.length){
    //         sessionStorage.setItem('search', inputValue);
    //         this.takeArr(search);
    //     }
    // }
    // takeArr(arr) {
    //     let filter = [];
    //     if (arr[0].show) {
    //         arr = arr.map(value => value = value.show);
    //     }
    //     for (let film = 0; film < arr.length; film++) {
    //         filter = [...filter, ...arr[film].genres]
    //     }
    //     this.props.movieLoaded(arr);

    // }