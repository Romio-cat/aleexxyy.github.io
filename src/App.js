import React from "react";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.arrFavorite = [];
        this.state = {
            cnt: [],
            fct: [],
        }
    }
    async searchLink(){
        let story = sessionStorage.getItem('search')? sessionStorage.getItem('search'): '[]';
        let inputValue = document.querySelector('#inputSearch').value || story;
        let searchLinks = await fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`);
        let search = await searchLinks.json();
        if (search.length){
            console.log(search)
            sessionStorage.setItem('search', inputValue);
            this.takeArr(search);
        } 
    }
    takeArr(arr) {
        let arrFiltr = [];
        if (arr[0].show) {
            arr = arr.map(value => value = value.show);
        }
        for (let film = 0; film < arr.length; film++) {
            arrFiltr = [...arrFiltr, ...arr[film].genres]
        }
        this.filtrMovie(arrFiltr);
        this.createMovie(arr);
        console.log(arr);
    }
    //выводит филтмы
    createMovie(arr){
        console.log(arr[0].image)
        let newArr = [];
        for (let film = 0; film < arr.length; film++) {
           let noImg = arr[film].image? arr[film].image.medium: 'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1350441335.jpg';
            let content = 
                <div className='movie-box' key={arr[film].id}>
                    <div className="movie-img" style={{backgroundImage: `url(${noImg})`}}></div>
                    <div className="movie-name">{arr[film].name}</div>
                    <div className="add" id={arr[film].id} onClick={this.addMovie.bind(this)}>Follow</div>
                    <div className="info">info</div>
                </div> ;
            newArr.push(content)
        } 
        
        this.setState({cnt: newArr});
    }
    //клик на кнопку ADD
    addMovie(e) {
        this.arrFavorite.push(e.target.id);
        localStorage.setItem('createMovie', JSON.stringify(this.arrFavorite));
    }
    //Выводит фильтр
    filtrMovie(arr){
        let objFilter = {};
        for (let key of arr) {
            objFilter[key] = true
        }
        arr = Array.from(Object.keys(objFilter));
        let newArrFilter = arr.map(value => <li key={value} onClick={this.renderMovie.bind(this)}>{value}</li>);
        this.setState({fct: newArrFilter});
    }
    async renderMovie(e){
        let textFilter = e.target.innerHTML;
        let searchLinks = await fetch(`http://api.tvmaze.com/search/shows?q=${sessionStorage.getItem('search')}`);
        let search = await searchLinks.json();
        if (search[0].show) {
            search = search.map(value => value = value.show);
        }
        let newArr = search.filter(value => (value.genres).indexOf(`${textFilter}`));
        this.createMovie(newArr)
    }
    componentDidMount(){
        this.searchLink();
    }
    render(){
        return (
            <div>
            <header>
                <nav className="menu">
                <ul>
                    <div><a className="img" href="index.html"><img src="http://static.tvmaze.com/images/tvm-header-logo.png" alt=""/></a></div>
                    <li className="hart"><a href="index.html"><i className="fas fa-heart"></i>Favorite</a></li>
                    <li id="filter"><a href="index.html"><i className="fas fa-plus-circle"></i>Filter</a><ul>{this.state.fct}</ul></li>
                    <li id="serch">
                            <input type="text" id="inputSearch"/>
                            <button id="button"><i className="fas fa-search" onClick={() => this.searchLink()}></i></button>
                    </li>
                    </ul>
                </nav>
            </header>
            <div className='row'>
                {this.state.cnt}
            </div>
            </div>
        )
    }
}
export default App;
