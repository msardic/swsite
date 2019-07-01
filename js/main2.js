fetch('https://swapi.co/api/people/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

console.log(returnData.results[0].name)


  let swData = document.getElementsByClassName('header')[0];




  swData.insertAdjacentHTML('afterend',

'<table class="charBox1 d-flex justify-content-center"><tbody class="table-bordered" >'+
'<tr><th class="tableHeader" colspan="2" >CHARACTER</th></tr>'+
'<tr><th>NAME</td><td class="name">'+returnData.results[1].name+'</td></tr>'+
'<tr><th>HEIGHT</td><td class="height">'+returnData.results[1].height+'</td></tr>'+
'<tr><th>MASS</td><td class="mass">'+returnData.results[1].mass+'</td></tr>'+
'<tr><th>HAIR COLOR</td><td class="hairColor">'+returnData.results[1].hair_color+'</td></tr>'+
'<tr><th>SKIN COLOR</td><td class="skinColor">'+returnData.results[1].skin_color+'</td></tr>'+
'<tr><th>EYE COLOR</td><td class="eyeColor">'+returnData.results[1].eye_color+'</td></tr>'+
'<tr><th>BIRTH YEAR</td><td class="birthYear">'+returnData.results[1].birth_year+'</td></tr>'+
'<tr><th>GENDER</td><td class="gender">'+returnData.results[1].gender+'</td></tr>'+
'<tr><th>HOMEWORLD</td><td class="homeworld">'+returnData.results[1].homeworld+'</td></tr>'+
'<tr><th>FILMS</td><td class="films">'+returnData.results[1].films+'</td></tr>'+
'</tbody></table>'

);



})
