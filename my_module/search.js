function find(arr, seach) {
    const itemObj = ['name', 'location', 'scope'];
    const res = [];
    arr.forEach((el) =>{
        for (let item in el){
            if(itemObj.includes(item)){
                if(searchInString(el[item], seach)){
                    res.push(el);
                    console.log(el)
                }
            }
        }
    });
    return res;
}

function searchInString(searchText, indexSearch) {
    return searchText.toLowerCase().includes(indexSearch.toLowerCase());
}
module.exports = find;