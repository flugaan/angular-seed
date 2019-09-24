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
      .state('news_article', {
        url: '/news/:id',
        templateUrl: '/templates/newsArticle.html',
        controller: 'NewsArticleController',
        controllerAs: 'newsArticle'
      })
      .state('team', {
        url: '/team',
        templateUrl: '/templates/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .state('player', {
        url: '/player/:id',
        templateUrl: '/templates/player.html',
        controller: 'PlayerController',
        controllerAs: 'player'
      })
      .state('games', {
        url: '/games',
        templateUrl: '/templates/games.html',
        controller: 'GamesController',
        controllerAs: 'games'
      });

  }]);

}());
