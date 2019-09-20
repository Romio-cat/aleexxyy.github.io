///////////window infiMovie
const row = document.querySelector(".row");
window.addEventListener('load', descpitrionWin);

async function descpitrionWin() {
    let linkMovie = localStorage.getItem('info');
    console.log(linkMovie);
    let linkAPI = await fetch(` https://api.tvmaze.com/lookup/shows?thetvdb=${JSON.parse(linkMovie)}`);
    let linkJson = await linkAPI.json();
    console.log([linkJson][0].summary)
    let prod = new InfoMovie(row, [linkJson]).create();
}