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
fudiApp.controller("settingController",function($scope,$route,$http,$routeParams,$filter,MenuService,MenuItemService,OrderService){


    $scope.loadHtml = 'public/fudi_app/views/admin/menu/orders.html';
    $scope.menu = null;
    $scope.menu_type = 'Breakfast';
    $scope.addNewMenu = function(newMenu){
        MenuService.save(newMenu);
    }
    //$scope.addNewMenu({menu_name:"Specials"});
    MenuService.query().$promise.then(function(data) {
        $scope.menus = data;
        });
    MenuItemService.query().$promise.then(function(data) {
        $scope.menuItems = data;
        $scope.this_rest_menu_items = $filter('filterRestItems')(data, {restaurant_id:$routeParams.id});
        $scope.current_rest = $routeParams.id;
    });

    $scope.getOrders = function(){
        OrderService.query().$promise.then(function(data) {
            $scope.orders = data;
            $scope.newOrders = $filter('filterOrderByStatus')(data, {status:'new'});

        });
    };
    $scope.getOrders();
    $scope.o_status= 'new';
    $scope.orderStatus = function(ostatus,$event){
        $scope.o_status = ostatus;
        angular.element($("a.menuButton")).removeClass('onYellow');
        angular.element($event.target).parent().addClass("onYellow")
    }
    $scope.flipMenu = function(menu){
        $scope.loadHtml =  'public/fudi_app/views/admin/menu/'+menu+'.html';

    }
    $scope.flipMenu('menus');
    $scope.currentDirective = function(menu){
        if($scope.menu_type==menu){
            return true
        }else{
           return false;
        }
    }

    $scope.currentMenu = function(menu,$event){
        $scope.menu_type = menu;
    }




});
fudiApp.directive('settingMenu',['MenuItemService',function(MenuItemService){
    return {
        link:function($scope,element,attrs){
            $scope.entry={
                item_name:"",
                price:"",
                restaurant_id:parseInt($scope.current_rest_id), // set restaurant ID for the populated menu
                menu_id:parseInt($scope.menu.id) //set the menu Id for populated menu
            }

            $scope.tableText = true;
            $scope.tableInput = false;
            $scope.saveIcon = false;
            $scope.updateIcon = true;
            $scope.add_new = false;
            $scope.showForm = function(){
                $scope.add_new = true;
            }

            $scope.hideForm = function(){
                $scope.add_new = false;
            }

            $scope.getMenuItems = function(){
                MenuItemService.query().$promise.then(function(data) {
                    $scope.items = data;
                });
            };
            $scope.getMenuItems();


            var updateMenuItem = function(menuItem){
                MenuItemService.update({ id:menuItem.id },menuItem).$promise.then(function(data) {
                    $scope.getMenuItems();
                });
            };

            var deleteMenuItem = function(menuItem){
                MenuItemService.delete({ id:menuItem.id }).$promise.then(function(data) {
                    $scope.getMenuItems();
                });
            };

            $scope.addMenuItem = function(entry){
                MenuItemService.save(entry).$promise.then(function(data) {
                    $scope.getMenuItems();
                });
            }

            $scope.editItem = function(Item,$event){
                if(!$scope.tableInput){
                    $scope.tableInput = true;
                    $scope.tableText = false;
                    $scope.updateIcon = false;
                    $scope.saveIcon = true;
                }else{


                    updateMenuItem(Item);
                    $scope.updateIcon = true;
                    $scope.saveIcon = false;
                    $scope.tableInput = false;
                    $scope.tableText = true;
                }
            }

            $scope.deleteItem = function(Item){
                deleteMenuItem(Item);
            }

            $scope.$watch('menu',function(){

            });

            $scope.$watch('items',function(){

            });


            ////TEST DATATABLES




        },
        scope: {
            current: "=current",
            menu: "=menu",
            items: "=items",
            current_rest_id: "=restaurant"
        },
        restrict:"E",
        replace: true,
        templateUrl:"public/fudi_app/views/admin/directives/templates/setting-menu.html"
    }


}]);
fudiApp.directive('settingOrders',['OrderService','MenuItemService','$filter',function(OrderService,MenuItemService,$filter){
    return {
        link:function($scope,element,attrs){
            $scope.currentPage = 1;
            $scope.pageSize = 3;


            $scope.o_status = 'new';
            $scope.getMenuItems = function(){
                MenuItemService.query().$promise.then(function(data) {
                    $scope.Ordereditems = data;

                });
            };
            $scope.getMenuItems();

            $scope.$watch('o_status',function(){
                return $scope.o_status;
            })
        },
        scope: {
            current: "=current",
            orders: "=orders",
            o_status: "=status"
        },
        restrict:"E",
        replace: true,
        templateUrl:"public/fudi_app/views/admin/directives/templates/setting-order.html"
    }


}]);
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
fudiApp.filter('filterRestItems', function () {
    return function (restaurants,input) {
        var restaurant = [];


        if(restaurants){

           for (var i = 0; i < restaurants.length; i++) {

            if (restaurants[i].restaurant_id == input.restaurant_id) {

                restaurant.push(restaurants[i]);
            }
        }
        }

        return restaurant;
    };
});

fudiApp.filter('filterOrderByStatus', function () {
    return function (order,input) {
        var orders = [];


        if(order){

           for (var i = 0; i < order.length; i++) {

            if (order[i].order_status == input.status) {

                orders.push(order[i]);
            }
        }
        }

        return orders;
    };
});


