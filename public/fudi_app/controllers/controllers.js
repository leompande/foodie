/**
 * Created by leo on 7/9/15.
 */

var fudiApp = angular.module("fudiApp");
fudiApp.controller("loginController",function($scope,$route,$location){
    $scope.processLogin = function(user){
        $location.path( "/rests" );
    };
});

fudiApp.controller("mainController",function($scope,$route,$http,RestaurantService){
  RestaurantService.prototype.$save = function() {
    if (this.id) {
        return this.$update();
    } else {
        return this.$create();
    }
};
    $scope.selections = "menu";
    // $scope.restaurants = null;
    $scope.getRestaurants = function(){
    RestaurantService.query().$promise.then(function(data) {
    $scope.restaurants = data;
    });
  };

    $scope.getRestaurants();

});

fudiApp.controller("restsController",function($scope,$route,$location,$http,$routeParams,$filter,RestaurantService){
  
  $scope.restaurant = $filter('filterRestaurant')($scope.$parent.restaurants, {id:$routeParams.id});
  $scope.addNewRest = function(restaurant){
    RestaurantService.save(restaurant).$promise.then(function(data) {
    $scope.getRestaurants();
    });
  };
  
  $scope.updateRest = function(restaurant){
    RestaurantService.update({ id:restaurant.id },restaurant).$promise.then(function(data) {
         $scope.getRestaurants();
    });
  };
  
  $scope.openInGoogleMap = function(restaurant){
 
            $location.path( "/maps/"+restaurant.id+"/"+restaurant.location.location_name );
          
  };
});
fudiApp.controller("restmapController",function($scope,$route,$routeParams,$filter,RestaurantService){
  $scope.viewDetails = true;
  $scope.editButton  = true;
  $scope.editForm    = false;
  
  $scope.showEditForm  = function(){
    $scope.viewDetails = false;
    $scope.editButton  = false;
    $scope.editForm    = true;
  };
  
  $scope.hideEditForm  = function(){
   $scope.viewDetails  = true;
   $scope.editButton   = true;
   $scope.editForm     = false;
  };
  /// taggle view and edit form
  RestaurantService.query().$promise.then(function(data) {
    $scope.rest_id = $routeParams.id;
    $scope.restaurant = $filter('filterRestaurant')(data, {id:$routeParams.id});
    $scope.center = {latitude:$scope.restaurant.location.latitude,longitude:$scope.restaurant.location.longitude};
  });
  
});
fudiApp.controller("visitorsController",function($scope,$route){});
fudiApp.controller("userController",function($scope,$route,$http){
    
});

fudiApp.filter('filterRestaurant', function () {
    return function (restaurants,input) {
        var restaurant = null;
        if(restaurants){
          
           for (var i = 0; i < restaurants.length; i++) {
             
            if (restaurants[i].id == input.id) {
                return restaurants[i];
            }
        }
        }
       
        return restaurant;
    };
});

fudiApp.factory('RestaurantService',function($resource) {
   return $resource("public/index.php/restaurant/:id",{
    id: '@id'
  },
    {
        'update': { method:'PUT' }
    });
    
    
 });


