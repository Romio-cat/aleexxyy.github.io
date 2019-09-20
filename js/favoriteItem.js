const row = document.querySelector(".row");
window.addEventListener('load', createFavore)
    
async function createFavore() {
    let linkObj = JSON.parse(localStorage.getItem('itemObj'));
    let objFavorite;
    
    if (linkObj) {
        objFavorite = [];
        for (let i = 0; i < linkObj.length; i++){
            let linkAPI = await fetch(` https://api.tvmaze.com/lookup/shows?thetvdb=${linkObj[i]}`);
            let linkJson = await linkAPI.json();
            objFavorite.push(linkJson);
        }
        let prod = new FavoriteProduction(row, objFavorite).create('delete', deleteFavore);
    }
}
