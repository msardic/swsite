let incomingData = window.location.search;
let parsedData = incomingData.split("=");

fetch('https://swapi.co/api/people/' + parsedData[1] + '/?format=json')
  .then(function (res) {
    return res.json();
  })
  .then(function (returnData) {


    let swData = document.getElementById('characterDetailContainer');

    returnData.films.forEach(function (item, i) {

      fetch(item).then(function (res) {
        return res.json();

      }).then(function (returnData2) {
        let deneme = document.getElementById('films');
        deneme.insertAdjacentHTML('beforeend',
          "<li>" + returnData2.title + "</li>"
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

    fetch(returnData.homeworld).then(function (res) {
      return res.json();

    }).then(function (returnData2) {
      let deneme = document.getElementById('homeworld');
      deneme.insertAdjacentHTML('beforeend',
        "<li>" + returnData2.name + "</li>"
      )

    })

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




    swData.insertAdjacentHTML('afterend',

      '<table class="charBox1 d-flex justify-content-center"><tbody class="table-bordered" >' +
      '<tr><th class="tableHeader" colspan="2" >CHARACTER</th></tr>' +
      '<tr><th>NAME</td><td class="name">' + returnData.name + '</td></tr>' +
      '<tr><th>HEIGHT</td><td class="height">' + returnData.height + '</td></tr>' +
      '<tr><th>MASS</td><td class="mass">' + returnData.mass + '</td></tr>' +
      '<tr><th>HAIR COLOR</td><td class="hairColor">' + returnData.hair_color + '</td></tr>' +
      '<tr><th>SKIN COLOR</td><td class="skinColor">' + returnData.skin_color + '</td></tr>' +
      '<tr><th>EYE COLOR</td><td class="eyeColor">' + returnData.eye_color + '</td></tr>' +
      '<tr><th>BIRTH YEAR</td><td class="birthYear">' + returnData.birth_year + '</td></tr>' +
      '<tr><th>GENDER</td><td class="gender">' + returnData.gender + '</td></tr>' +
      '<tr><th>HOMEWORLD</td><td><ul id="homeworld"></ul></td></tr>' +
      '<tr><th>FILMS</td><td><ul id="films"></ul></td></tr>' +
      '<tr><th>SPECIES</td><td><ul id="species"></ul></td></tr>' +
      '<tr><th>VEHICLES</td><td><ul id="vehicles"></ul></td></tr>' +
      '<tr><th>STARSHIPS</td><td><ul id="starships"></ul></td></tr>' +
      '</tbody></table>'

    );



  })


