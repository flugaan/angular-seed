(function(){

  angular.module('app')
    .controller('NewsController', ['$state', '$log', 'firebaseService', NewsController]);

  function NewsController($state, $log, firebaseService){

    var vm = this;

    var onArticlesComplete = function(data){
      vm.articles = data;
    }

    var onError = function(reason){
      $state.error = 'Error fetching the data';
    }

    firebaseService.getAllArticles().then(onArticlesComplete, onError);
  }

}());
