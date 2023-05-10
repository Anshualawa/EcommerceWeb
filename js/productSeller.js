const url = 'https://fakestoreapi.com/products/';

$(document).ready(function () {
    addCards(url)
})


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
        for (let i = 0; i < data.lenght; i++) {
            combine += '<div class="card" style="width: 18rem;"> ' +
                '<img src="" class="card-img-top" alt="...">' +
                '<div class="card-body"><h5 class="card-title">' + data[i].title +
                '</h5><p class="card-text">' + data[i].description + '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';
        }
        $('#productCards').html('combine');
    });

}

