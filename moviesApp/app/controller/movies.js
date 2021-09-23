movieApp.controller('moviesController', function ($scope, $http) {
    //Loading
    $scope.loading = true;
    $scope.loadMovies = false;

    //Json Data
    $http.get('app/model/sample.json').then(function (response) {
        const moviesResponse = response.data.entries;
        $scope.movies = moviesResponse;
        $scope.errorAlert = false; 
        $scope.loadMovies = true;       
    }).catch(function(error){
        if(error.status == '404'){
            $scope.errorAlert = true;
            $scope.loading = false;
        }
    }).finally(function(){
        $scope.loading = false;
        $scope.loadMovies = true; 
    });

    //Page Number Limit
    var page = 1;
    var countItem = 21;
    $scope.pageLimit = function (data) {
        return countItem * page;
    };

    //More Upload 
    $scope.movieMore = function () {
        page = page + 1; 
    }
    
    //Filter Year => 2010
    $scope.filterYear = function (item) {
        if(item.releaseYear >= 2010){
            return item;
        }
    };

    //Text Three Dots
    $scope.add3Dots = function (string, limit) {
        var dots = "...";
        if (string.length > limit) {
            string = string.substring(0, limit) + dots;
        }
        return string;
    }
});
