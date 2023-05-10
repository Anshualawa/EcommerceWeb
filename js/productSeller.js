var app = angular.module('myApp', ['ui.router']);


Directives('navBar','./Directives/nav-bar.html');




function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}