let incomingData = window.location.search;
let parsedData = incomingData.split("=");



fetch('https://swapi.co/api/films/'+parsedData[1]+'/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  

  let swData = document.getElementById('filmDetailContainer');

  returnData.characters.forEach(function (item, i) {

    fetch(item).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('characters');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })
  });

  returnData.planets.forEach(function (item, i) {

    fetch(item).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('planets');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })
  });

  returnData.starships.forEach(function (item, i) {

    fetch(item).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('starships');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })
  });

  returnData.vehicles.forEach(function (item, i) {

    fetch(item).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('vehicles');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })
  });

  returnData.species.forEach(function (item, i) {

    fetch(item).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('species');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })
  });



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
'<tr><th>characters</td><td><ul id="characters"></ul></td></tr>'+
'<tr><th>planets</td><td><ul id="planets"></ul></td></tr>'+
'<tr><th>starships</td><td><ul id="starships"></ul></td></tr>'+
'<tr><th>vehicles</td><td><ul id="vehicles"></ul></td></tr>'+
'<tr><th>species</td><td><ul id="species"></ul></td></tr>'+

'</tbody></table>'
);



})
