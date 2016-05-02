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
		  .when('/ceremony', {
        controller: 'ceremonyCtr',
        templateUrl: 'app/components/ceremony/ceremony.template.html'
      })
			.when('/landing-page', {
        controller: 'landingCtr',
        templateUrl: 'app/components/landing-page/landing-page.template.html'
      })
    .when('/guys', {
        controller: 'guysCtr',
        templateUrl: 'app/components/guys/guys.template.html'
      })
    .when('/mail-box', {
        controller: 'mailboxCtr',
        templateUrl: 'app/components/mail-box/mail-box.template.html'
      })
    .when('/other-events', {
        controller: 'othereventsCtr',
        templateUrl: 'app/components/other-events/other-events.template.html'
      })
    .when('/quiz', {
        controller: 'quizCtr',
        templateUrl: 'app/components/quiz/quiz.template.html'
      })
    .when('/registry', {
        controller: 'registryCtr',
        templateUrl: 'app/components/registry/registry.template.html'
      })
        	
      .otherwise('/');
  });
