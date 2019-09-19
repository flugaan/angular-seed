(function(){

  var app = angular.module('app', ['ui.router', 'firebase']);

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('news', {
        url: '/news',
        templateUrl: '/templates/news.html',
        controller: 'NewsController',
        controllerAs: 'news'
      })
      .state('team', {
        url: '/team',
        templateUrl: '/templates/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .state('games', {
        url: '/games',
        templateUrl: '/templates/games.html',
        controller: 'GamesController',
        controllerAs: 'games'
      });

  }]);

}());
