angular.module('weddingApp')
  .config(function($routeProvider){ 'use strict';
    $routeProvider
      .when('/', {
        controller: 'mainCtr',
        templateUrl: 'app/components/main/main.template.html'
      })
      .when('/gallery', {
        controller: 'galleryCtr',
        templateUrl: 'app/components/gallery/gallery.template.html'
      })
      .otherwise('/');
  });
