
fetch('https://swapi.co/api/films/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  let detailData = returnData.results;

  let text = "";

  detailData.forEach(function (item, i) {
    
    let filmLink = item.url.split("/");
    console.log(filmLink[5]);
    
    
      text +=


'<li><a href="film-detail.html?film='+filmLink[5]+'">'+item.title+'</a></li>'




  });
  document.getElementById("listFilm").innerHTML = text;




 

})
