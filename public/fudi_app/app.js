/**
 * Created by leo on 7/9/15.
 */
var fudiApp = angular.module("fudiApp",['ngRoute','uiGmapgoogle-maps','ngResource']);

// fleet module configurations
fudiApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: "public/fudi_app/views/main.html",
            // controller: "mainController"
        })
        .when('/rests', {
            templateUrl: "public/fudi_app/views/admin/restaurants.html",
            // controller: "restsController"
        })
        .when('/maps/:id/:pagename', {
            templateUrl: "public/fudi_app/views/admin/restsInGoogleMap.html",
            // controller: "restsController"
        })
        .when('/visitors', {
            templateUrl: "public/fudi_app/views/admin/visitors.html",
            // controller: "visitorsController"
        })
        .when('/', {
            templateUrl: "public/fudi_app/views/login.html",
            controller: "loginController"
        })
        .when('/user', {
            templateUrl: "public/fudi_app/views/user/index.html",
            controller: "loginController"
        })

        .otherwise({redirectTo: '/'});
}]);
