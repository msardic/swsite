let incomingData = window.location.search;
let parsedData = incomingData.split("=");



fetch('https://swapi.co/api/films/'+parsedData[1]+'/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  console.log(returnData);

  let swData = document.getElementById('filmDetailContainer');

 
  swData.insertAdjacentHTML('beforeend',

'<table class="table table-bordered charBox1">'+
'<tbody>'+
'<tr><th class="tableHeader" colspan="2" >FILM</th></tr>'+
'<tr><th >title</td><td class="title">'+returnData.title+'</td></tr>'+
'<tr><th>episode id</td><td class="episode">'+returnData.episode_id+'</td></tr>'+
'<tr><th>opening crawl</td><td class="openingCrawl">'+returnData.opening_crawl+'</td></tr>'+
'<tr><th>director</td><td class="director">'+returnData.director+'</td></tr>'+
'<tr><th>producer</td><td class="producer">'+returnData.producer+'</td></tr>'+
'<tr><th>release date</td><td class="releaseDate">'+returnData.release_date+'</td></tr>'+
'<tr><th>characters</td><td class="characters">'+returnData.characters.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>planets</td><td class="planets">'+returnData.planets.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>starships</td><td class="starships">'+returnData.starships.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>vehicles</td><td class="vehicles">'+returnData.vehicles.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>species</td><td class="species">'+returnData.species.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+

'</tbody></table>'
);



})
