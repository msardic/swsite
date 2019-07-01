https://swapi.co/api/films/?format=json


fetch('https://swapi.co/api/films/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  let detailData = returnData.results;

  let text = "";

  detailData.forEach(function (item, i) {

    
      text +=


'<li><a href="index2.html">'+item.title+'</a></li>'




  });
  document.getElementsByClassName("listFilm")[0].innerHTML = text;




 

})
