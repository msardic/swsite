
fetch('https://swapi.co/api/people/?format=json')
.then(function (res) {
  return res.json();
})
.then(function (returnData) {

  let detailData = returnData.results;

  let text = "";

  detailData.forEach(function (item, i) {

    
      text +=


'<li><a href="index2.html">'+item.name+'</a></li>'




  });
  document.getElementsByClassName("listChar")[0].innerHTML = text;





































  //   let swData = document.getElementsByClassName('row')[0];




//   swData.insertAdjacentHTML('beforeend',

// '<div class="col mx-3 p-0 charBox rounded">'+
// '<div class="charTitle rounded d-flex justify-content-center">CHARACTER</div>'+
// '<div class="listItem">'+
// '<ul>'+
// '<li><a href="index2.html">'+returnData.results[1].name+'</a></li>'+
// '<li><a href="http://"></a></li>'+
// '</ul>'+
// '</div>'+
// '<div class="pageList d-flex justify-content-center">'+
// '<nav aria-label="...">'+
// '<ul class="pagination pagination-sm">'+
// '<li class="page-item"><a class="page-link" href="#">1</a></li>'+
// '<li class="page-item"><a class="page-link" href="#">2</a></li>'+
// '<li class="page-item"><a class="page-link" href="#">3</a></li>'+
// '</ul>'+
// '</nav>'+
// '</div>'+
// '</div>'

//   );



})
