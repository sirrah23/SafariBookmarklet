javascript:(function(){ 
    //TODO: Add a loop to click the "more" button repeatedly...
    const books = document.getElementsByClassName("info");
    const data = [];
    let title, pctread_node, pctread;
    for(let i = 0; i < books.length; i++){
        title = books[i].querySelector("div.info > div.main > a.title-block > span.chapter-title").innerHTML;
        pctread_node = books[i].querySelector("div.main > div.progress span.gridtc div.time");
        if (pctread_node){
            pctread = pctread_node["style"].width ;
        } else {
            pctread = "0%";
        }
        data.push({title, pctread});
    }
    window.globalmybookdata = JSON.stringify(data);
})()
