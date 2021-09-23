var movieApp = angular.module('movieApp', ['ngRoute']);

//Router
movieApp.config(function ($routeProvider) {
    //Router Url
    $routeProvider.when('/', {
        title: 'Popular Titles',
        templateUrl: '/views/home/home.html',
        controller: 'movieController'
    }).when('/Films', {
        title: 'Popular Films',
        templateUrl: '/views/movies/films.html',
        controller: 'movieController'
    }).when('/Series', {
        title: 'Popular Series',
        templateUrl: '/views/movies/series.html',
        controller: 'movieController'
    }).otherwise({
        templateUrl: '/'
    });
});

movieApp.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
});

movieApp.controller('movieController', function ($scope) {
    $scope.copyDate = new Date();
});




