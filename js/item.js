/////////to create element
class ServiceProduction{
    constructor(containerFilms, filmsCatalog) {
        this.container = containerFilms;
        this.filmsCatalog = filmsCatalog;
    }

    create(nameCont, eventFun){
        let wrapper = document.createElement('slot');
        for (let film = 0; film < this.filmsCatalog.length; film++) {
            let item = this.elementCreate({tagName: 'div',className: 'movie-box',});
            let itemImg = this.elementCreate({tagName: 'div',className: 'movie-img', imgUrl: true, numFilm: film});
            let itemAdd = this.elementCreate({tagName: 'div', className: 'add', content: nameCont, idName: true, handler: eventFun, numFilm: film});
            let itemInfo = this.elementCreate({tagName: 'div', className: 'info', content: 'info', handler: infoMovie});
            let itemName = this.elementCreate({tagName: 'div', className: 'movie-name', filmName: true, numFilm: film});

            wrapper.appendChild(item);
            item.appendChild(itemImg);
            item.appendChild(itemName);
            item.appendChild(itemAdd);
            item.appendChild(itemInfo);

        }
        this.container.appendChild(wrapper);
  
    }
    createFilter(){
        let arr = [];
        for (let film = 0; film < this.filmsCatalog.length; film++) {
            let cont = this.filmsCatalog[film];
            arr = cont.show?  [...arr, ...cont.show.genres]:[...arr, ...cont.genres];
        }
            addFilter(arr.sort());
    }
    elementCreate(options){
        let element = document.createElement(options.tagName);

        if (options.className){
            element.setAttribute('class', options.className);
        }
        if (options.idName) {
            let reduction = this.filmsCatalog[options.numFilm];
            if (!reduction.show) {
                element.setAttribute('id', reduction.externals.thetvdb);
            } else {
            element.setAttribute('id', reduction.show.externals.thetvdb);
            }
        }
        if (options.imgUrl){
            let reduction = this.filmsCatalog[options.numFilm];
            if (!reduction.show) {
                element.setAttribute('style', `background-image:url(${reduction.image.medium})`);
            } else {
            element.setAttribute('style', `background-image:url(${reduction.show.image.medium})`);
            }
        }
        if (options.content) {
            element.addEventListener('click', options.handler);
            element.innerHTML = options.content
            
        }
        if (options.filmName) {
            let reduction = this.filmsCatalog[options.numFilm];
            element.innerHTML = reduction.show? reduction.show.name: reduction.name;
        }
        if (options.description) {
            element.innerHTML += options.description
        }
        return element;
    }
}
/////////to create element
class FavoriteProduction extends ServiceProduction{
    constructor(containerFilms, filmsCatalog){
        super(containerFilms, filmsCatalog)
    }
}
///////// add handler
function addFavore() {
    if (!localStorage.getItem('itemObj')) {
        let itemObj = [];
        itemObj.push(this.id)
        localStorage.setItem(`itemObj`, JSON.stringify(itemObj));
        return;
    }
    let itemObj = JSON.parse(localStorage.getItem('itemObj'));
    if (!itemObj.includes(this.id)) { itemObj.push(this.id) };
    localStorage.setItem(`itemObj`, JSON.stringify(itemObj))
}
/////////// delete handler
function deleteFavore() {
    let itemObj = JSON.parse(localStorage.getItem('itemObj'));
    let position = itemObj.indexOf(this.id);
    itemObj.splice(position, 1);
    localStorage.setItem('itemObj', JSON.stringify(itemObj));
    document.querySelector(".row").innerHTML = "";
    createFavore();
}
/////////// open info
function infoMovie() {
    localStorage.setItem('info', JSON.stringify(this.previousElementSibling.id));
    window.location = 'aboutMovie.html'
}
/////////class infiMovie
class InfoMovie extends ServiceProduction{
    constructor(containerFilms, filmsCatalog){
        super(containerFilms, filmsCatalog)
    }
    create() {
        let itemImg = this.elementCreate({tagName: 'div',className: 'posrer-movie', imgUrl: true, numFilm: 0});
        let itemAdd = this.elementCreate({tagName: 'div', className: 'description', description: this.filmsCatalog[0].summary, numFilm: 0});

        this.container.appendChild(itemImg);
        this.container.appendChild(itemAdd);
    }
}
function addFilter(arr) {
    const boxFilter= document.querySelector('#filter');
    // if (boxFilter.children[1]) boxFilter.children[1].remove();
    let objFiltr = {};
    for (let key of arr) {
        objFiltr[key] = key;
    }
    let wrapper = document.createElement('ul');
    for (let key in objFiltr) {
        let item = document.createElement('li');
        item.innerHTML = objFiltr[key];
        wrapper.appendChild(item);
        item.addEventListener('click', findFilterMovie);
    }
    boxFilter.appendChild(wrapper);

}
async function findFilterMovie() {
    let eventFilter = event.target.innerHTML;
    console.log(eventFilter)
    
        row.innerHTML = "";
        let linkAPI = await fetch(`https://api.tvmaze.com/search/shows?q=${sessionStorage.getItem('valueSearch')}`);
        let linkJson = await linkAPI.json();
        let filmsCatalog = [];
        for (let film = 0; film < linkJson.length; film++) {
            let objFor = linkJson[film];
            if (objFor.show) {
                if (objFor.show.genres.indexOf(eventFilter) !== -1) {
                    filmsCatalog.push(linkJson[film])
                }
            } else {
                if (objFor.genres.indexOf(eventFilter) !== -1) {
                    filmsCatalog.push(linkJson[film])
                }
            }
        }
        let creatCatalog = new ServiceProduction(row, filmsCatalog).create('Follow', addFavore);
        console.log(filmsCatalog)
}
