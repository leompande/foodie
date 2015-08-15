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

fudiApp.service('OwnerService',function($resource) {
    return $resource("public/index.php/user/:id",{
            id: '@id'
        },
        {
            'update': { method:'PUT' }
        });
});

fudiApp.service('UserService',function($resource,$http,$cookieStore) {
    var user = {};
    user.getByCredential = getByCredential;
    user.logUserOut = logUserOut;
    return user;


    function getByCredential(username,password) {
        return $http.get("public/index.php/user/login/"+username+"/"+password+"").then(handleSuccess, handleError);
    }

function logUserOut(userId) {
        return $http.get("public/index.php/user/logout/"+userId).then(handleSuccess, handleError);
    }

    function handleError(error) {
        return function () {

            return { success: false, message: error };
        };
    }

    function handleSuccess(data) {
        return data;
    }

});

fudiApp.service('AuthService',function(UserService,$timeout,$cookies) {
    var service = {};

    service.Login = Login;
    service.LogOut = LogOut;

    return service;

    function Login(username, password, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        $timeout(function () {
            var response;
            UserService.getByCredential(username,password)
                .then(function (data) {
                    //console.log(data);
                    if (data !== null && data.data!==null) {
                        if(data.data.email==username){
                            var user = {
                                id:data.data.id,
                                username:data.data.name,
                                email:data.data.email
                            };
                            //role:data.data.role
                            $cookies.logedUser = user;
                            response = {success: true};
                        }else{
                            response = {success: false, message: 'Email or password is incorrect'};

                        }

                    } else {
                        response = {success: false, message: 'Email or password is incorrect'};
                    }
                    callback(response,data.data);
                });
        }, 1000);

    }

    function LogOut(userId, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        $timeout(function () {
            var response;
            UserService.logUserOut(userId)
                .then(function (data) {
                    console.log(data);
                    if (data !== null && data.data!==null) {
                        if(data.data=="true"){

                            response = {success: true,message:"your successfully logged out"};
                        }else{
                            response = {success: false, message: 'logout failure'};

                        }

                    } else {
                        response = {success: false, message: 'logout failure'};
                    }
                    callback(response,data.data);
                });
        }, 1000);

    }
    });
