    const nameSearch = document.querySelector(".serch, input");
    const buttonSearch = document.querySelector('#button');
    const row = document.querySelector(".row");
    /////////// to event
    buttonSearch.addEventListener('click', search);
    
    async function search(){
        row.innerHTML = "";
        let linkAPI = await fetch(`https://api.tvmaze.com/search/shows?q=${nameSearch.value}`);
        let linkJson = await linkAPI.json();
        let reatCatalog = new ServiceProduction(row, linkJson);
        reatCatalog.create('Follow', addFavore);
        reatCatalog.createFilter();
        sessionStorage.setItem('valueSearch', nameSearch.value);
    }

    window.addEventListener('load', () => {
        if (!sessionStorage.getItem('valueSearch')) return;
        nameSearch.value = sessionStorage.getItem('valueSearch');
        buttonSearch.click();
    })