let incomingData = window.location.search;
let parsedData = incomingData.split("=");



fetch('https://swapi.co/api/people/'+parsedData[1]+'/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  
  let swData = document.getElementById('characterDetailContainer');

  
  
  fetch("https://swapi.co/api/people/4/").then(function (res1) {
    return res1.json();
  })
  .then(function (returnData2) {
    
    returnData2.films.forEach(function (item, i) {
    
      fetch(item).then(function(res){
        return res.json();

      }).then(function(returndata3){
        console.log(returndata3.title)
         
      })
      
    });
    
            
    });
   

  

  swData.insertAdjacentHTML('afterend',

'<table class="charBox1 d-flex justify-content-center"><tbody class="table-bordered" >'+
'<tr><th class="tableHeader" colspan="2" >CHARACTER</th></tr>'+
'<tr><th>NAME</td><td class="name">'+returnData.name+'</td></tr>'+
'<tr><th>HEIGHT</td><td class="height">'+returnData.height+'</td></tr>'+
'<tr><th>MASS</td><td class="mass">'+returnData.mass+'</td></tr>'+
'<tr><th>HAIR COLOR</td><td class="hairColor">'+returnData.hair_color+'</td></tr>'+
'<tr><th>SKIN COLOR</td><td class="skinColor">'+returnData.skin_color+'</td></tr>'+
'<tr><th>EYE COLOR</td><td class="eyeColor">'+returnData.eye_color+'</td></tr>'+
'<tr><th>BIRTH YEAR</td><td class="birthYear">'+returnData.birth_year+'</td></tr>'+
'<tr><th>GENDER</td><td class="gender">'+returnData.gender+'</td></tr>'+
'<tr><th>HOMEWORLD</td><td class="homeworld">'+returnData.homeworld+'</td></tr>'+
'<tr><th>FILMS</td><td class="films">'+returnData.films.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>SPECIES</td><td class="species">'+returnData.species.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>VEHICLES</td><td class="vehicles">'+returnData.vehicles.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'<tr><th>STARSHIPS</td><td class="starships">'+returnData.starships.reduce((total,item)=>total + (" "+item),"")+'</td></tr>'+
'</tbody></table>'

);


  
})
