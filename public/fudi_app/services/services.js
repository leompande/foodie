var fudiApp = angular.module("fudiApp");

fudiApp.factory('RestaurantService',function($resource) {
    return $resource("public/index.php/restaurant/:id",{
            id: '@id'
        },
        {
            'update': { method:'PUT' }
        });


});


fudiApp.factory('MenuService',function($resource) {
    return $resource("public/index.php/menu/:id",{
            id: '@id'
        },
        {
            'update': { method:'PUT' }
        });


});
fudiApp.factory('MenuItemService',function($resource) {
    return $resource("public/index.php/menuitem/:id",{
            id: '@id'
        },
        {
            'update': { method:'PUT' }
        });


});

fudiApp.factory('OrderService',function($resource) {
    return $resource("public/index.php/order/:id",{
            id: '@id'
        },
        {
            'update': { method:'PUT' }
        });


});
