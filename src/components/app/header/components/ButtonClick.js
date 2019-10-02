import takeArr from "./ClearSearch"

async function clickButton(props) {
    let story = sessionStorage.getItem('search')? sessionStorage.getItem('search'): '[]';
    let inputValue = document.querySelector('#inputSearch').value || story;
    let searchLinks = await fetch(`http://api.tvmaze.com/search/shows?q=${props.search}`);
    let search = await searchLinks.json();
    if (search.length){
        sessionStorage.setItem('search', inputValue);
        let res = takeArr(search);
        return res
    }
}
export default clickButton