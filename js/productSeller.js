const url = 'https://fakestoreapi.com/products/';



var app = angular.module('myApp', ['ui.router']);


Directives('navBar', './Directives/nav-bar.html');
Directives('productCards', './Directives/productCards.html');




function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}



function addCards(url) {
    
    $.getJSON(url, function (responce) {
        let data = responce;
        console.log(data[1]);
        let combine = '';
        for (let i = 0; i < data.length; i++) {
            combine += '<div class="card m-2 shadow" style="width: 18rem;"> ' +
            '<img src="'+data[i].image+'" class="card-img-top" alt="...">' +
            '<div class="card-body"><h5 class="card-title">' + data[i].title +
            '<h3 class="card-subtitle mb-2 text-dark"> Rs. '+ data[i].price+'/-</h3>'+
            '</h5><p class="card-text">' + data[i].description + '</p>'+
            '<h6 class="card-subtitle mb-2 text-body-secondary"> <span class="bi bi-star text-success"> '+data[i]["rating"].rate +'</span></h6>'+
            '<h5 >'+'<a href="#" class="btn btn-primary">Add to Card</a></div></div>';
        }
        $('#productCards').html(combine);
    });
    
}


$(document).ready(function () {
    addCards(url)
})