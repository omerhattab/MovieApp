movieApp.controller('moviesController', function ($scope, $http) {
    //Json Data
    $http.get('app/model/sample.json').then(function (response) {
        const moviesResponse = response.data.entries;
        $scope.movies = moviesResponse;
    });

    //Page Number Limit
    var page = 1;
    var countItem = 11;
    $scope.pageLimit = function (data) {
        return countItem * page;
    };

    //More Upload 
    $scope.movieMore = function () {
        page = page + 1;  
    }
    

    //Text Three Dots
    $scope.add3Dots = function (string, limit) {
        var dots = "...";
        if (string.length > limit) {
            string = string.substring(0, limit) + dots;
        }
        return string;
    }
});
