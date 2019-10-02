const takeArr = (arr) => {
    let filter = [];
    if (arr[0].show) {
        arr = arr.map(value => value = value.show);
    }
    for (let film = 0; film < arr.length; film++) {
        filter = [...filter, ...arr[film].genres]
    }

    return [arr, filter]
}
export default takeArr
