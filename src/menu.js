import React from "react";

class Map extends React.Component{
    async searchLink(){ 
    let searchLink = await fetch(`http://api.tvmaze.com/search/shows?q=${document.querySelector('#inputSearch').value}`);
    let search = await searchLink.json();
    this.props.fun = search;
    }
    render(){
        return (
            <header>
                <nav className="menu">
                <ul>
                    <div><a className="img" href="index.html"><img src="http://static.tvmaze.com/images/tvm-header-logo.png" alt=""/></a></div>
                    <li className="hart"><a href="index.html"><i className="fas fa-heart"></i>Favorite</a></li>
                    <li id="filter"><a href="index.html"><i className="fas fa-plus-circle"></i>Filter</a></li>
                    <li id="serch">
                            <input type="text" id="inputSearch" />
                            <button id="button"><i className="fas fa-search" onClick={() => this.searchLink()}></i></button>
                    </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Map;