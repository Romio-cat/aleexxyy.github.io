import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './reset.css';
// let root = document.querySelector('#root');
// const input = document.querySelector('#input');
// const button = document.querySelector('#button');

// button.addEventListener('click', App.say);
// async function search() {
//   let searchLink = await fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`);
//   let seatch = await searchLink.json();
//   console.log(seatch);
//     Constructor(seatch)
// }   
// function Constructor(arr) {
//     let newArr = [];

//     for (let film = 0; film < arr.length; film++) {

//         let content = 
//             <div className='movie-box' key={arr[film].show.id}>
//                 <div className="movie-img" style={{backgroundImage: `url(${arr[film].show.image.medium})`}}>

//                 </div>
//             </div> ;
//         newArr.push(content)
//     }
//     ReactDOM.render(
//         newArr, root
//     )
// }
// class App extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {obj:[]};
//     }
//     say() {
//         console.log(1)
//     }
    // async createBox() {
    //     let searchLink = await fetch(`http://api.tvmaze.com/search/shows?q=${this.props.arr}`);
    //     let seatch = await searchLink.json();
    //     console.log(seatch);
    //     let newArr = [];
    //     for (let film = 0; film < seatch.length; film++) {
    //         let content = 
    //             <div className='movie-box' key={seatch[film].show.id}>
    //                 <div className="movie-img" style={{backgroundImage: `url(${seatch[film].show.image.medium})`}}>
    //                 </div>
    //             </div> ;
    //         newArr.push(content)
    //     } 
    //     this.setState({obj: newArr}) 
    // }   
//     render(){
//         return(
//            this.state.obj
//         )}
// }
// function search() {
//     ReactDOM.render(
//         <App />, root
//     )
// }
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));