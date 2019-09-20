(function(){

  angular.module('app')
    .controller('NewsArticleController', ['$state', '$log', 'firebaseService', '$stateParams', NewsArticleController]);

  function NewsArticleController($state, $log, firebaseService, $stateParams){

    var vm = this;

    var onArticlesComplete = function(data){
      $log.debug(data);
      vm.article = data;
    }

    var onError = function(reason){
      $state.error = 'Error fetching the data';
    }

    firebaseService.getArticle($stateParams.id).then(onArticlesComplete, onError);

  }

}());
