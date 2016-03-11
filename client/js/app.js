var myModule = angular.module("myApp", ["ngRoute"]);

myModule.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl: "partials/home.html",
		Controller: 'carousel'
	})
	.when('/about',{
		templateUrl: "partials/about-us.html"
	})
	.when('/front',{
		templateUrl: "partials/front-menu.html"
	})
	.when('/back',{
		templateUrl: "partials/back-menu.html"
	})
	.when('/gallery',{
		templateUrl: "partials/gallery.html"
	})
	.when('/contact',{
		templateUrl: "partials/contacts.html"
	})
	.when('/bothmenu',{
		templateUrl: "partials/both-menu.html"
	})
	.when('/specials',{
		templateUrl: "partials/specials.html"
	})
	.when('/delivery',{
		templateUrl: "partials/delivery.html"
	})
	.when('/desserts', {
		templateUrl: "partials/desserts.html"
	})
})