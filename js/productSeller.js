// const url = 'https://fakestoreapi.com/products/';
// const dataUrl = './json/product.json';



var app = angular.module('myApp', ['ui.router']);


$(document).ready(function () {
    addCards()
    accountTable()
})



Directives('navBar', './Directives/nav-bar.html');
// Directives('productCards', './Directives/productCards.html');

app.config(function ($stateProvider, $urlRouterProvider) {

    var home = {
        name: 'home', url: '/home', templateUrl: './Directives/productCards.html'
    }

    var account = {
        name: 'account', url: '/account', templateUrl: './Directives/myAccount.html'
    }



    $stateProvider.state(home);
    $stateProvider.state(account);
    // $urlRouterProvider.state(home)
});



function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}



function addCards() {
    $.getJSON('./json/product.json', function (responce) {
        let data = responce.product;
        let combinne = '';
        for (let i = 0; i < data.length; i++) {
            combinne += '<div class="card m-2 shadow" style="width: 18rem;"> ' +
                '<img src="' + data[i].image + '" class="card-img-top" alt="...">' +
                '<div class="card-body"><h5 class="card-title">' + data[i].title +
                '<h3 class="card-subtitle mb-2 text-dark"> Rs. ' + data[i].price + '/-</h3>' +
                '</h5><p class="card-text">' + data[i].description + '</p>' +
                '<h6 class="card-subtitle mb-2 text-body-secondary"> <span class="bi bi-star text-success"> ' + data[i]["rating"].rate + '</span></h6>' +
                '<h5 >' + '<a href="#" class="btn btn-primary">Add to Card</a></div></div>';
        }
        $('#productCards').html(combinne);
    });
}




function accountTable() {
    $.getJSON('./json/accountdata.json', function (responce) {
        let data = responce.results;
        let combine = '';
        for (let i = 0; i < data.length; i++) {
            combine += '<tr>' +
                '<td>' + data[i].state_name + '</td>'+
                '<td>' + data[i].city + '</td>'+
                '<td>' + data[i].candidate_name + '</td>'+
                '</tr>';
        }
        $('.tbody').html(combine);
    });
}