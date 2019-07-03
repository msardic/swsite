let incomingData = window.location.search;


let parsedData;

  //= incomingData.split("=");
if (incomingData=="") {
 parsedData= 1;
  
} else {
  parsedData = incomingData.split("=")[1];
}


fetch('https://swapi.co/api/people/?format=json&page='+parsedData+'')
  .then(function (res) {
    return res.json();
  })
  .then(function (returnData) {

    let detailData = returnData.results;

    let peopleList = "";


      //api sayfa başına ne kadar gösterim yapacağını bize bildirmediği için biz varsayılan 10 yapacağız.
    let pageCount = Math.ceil(returnData.count / 10);


    let pageList = "";

    for (i = 0; i < pageCount; i++) {

      pageList += '<li class="page-item"><a class="page-link" href="character-list.html?page='+(i+1)+'">'+(i+1)+'</a></li>';


    } 
    document.getElementById("pageListContainer").innerHTML = pageList;


    detailData.forEach(function (item, i) {

      let peopleLink = item.url.split("/");


      peopleList += '<li><a href="character-detail.html?people=' + peopleLink[5] + '">' + item.name + '</a></li>';

    });
    document.getElementById("listChar").innerHTML = peopleList;





































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
