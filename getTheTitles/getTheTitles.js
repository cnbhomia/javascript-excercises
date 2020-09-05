const getTheTitles = function(books) {

    let titles =[];
    for (let i of books){
        // console.log(i.title);
        titles.push(i.title);
        //console.log(titles);
    }
    return titles
}

module.exports = getTheTitles;
