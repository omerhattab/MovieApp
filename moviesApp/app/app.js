var movieApp = angular.module('movieApp', ['ngRoute']);

//Router
movieApp.config(function ($routeProvider) {
    const pages = {
        home: {
            url: '/',
            templateUrl: '/views/home/home.html',
            controller: 'movieController'
        },
        films: {
            url: '/',
            templateUrl: '/views/movies/films.html',
            controller: 'movieController'
        },
        series: {
            url: '/',
            templateUrl: '/views/movies/series.html',
            controller: 'movieController'
        },
        error: {
            url: '/',
            templateUrl: '/views/error/error.html',
            controller: 'movieController'
        }
    }

    //Router Url
    $routeProvider.when('/', {
        title: 'Popular Titles',
        templateUrl: pages.home.templateUrl
    }).when('/Films', {
        title: 'Popular Films',
        templateUrl: pages.films.templateUrl
    }).when('/Series', {
        title: 'Popular Series',
        templateUrl: pages.series.templateUrl
    }).otherwise({
        templateUrl: pages.error.templateUrl
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




