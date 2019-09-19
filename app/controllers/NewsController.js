(function(){

  angular.module('app')
    .controller('NewsController', ['$state', '$log', 'firebaseService', NewsController]);

  function NewsController($state, $log, firebaseService){

    var vm = this;

    var onArticlesComplete = function(data){
      $log.debug(data);
      vm.articles = data;
    }

    var onError = function(reason){
      $state.error = 'Error fetching the data';
    }

    firebaseService.getAllArticles().then(onArticlesComplete, onError);

    /*const rootRef = firebase.database().ref().child('articles');
    const ref = rootRef.child('article1');

    var article = $firebaseObject(rootRef);

    article.$loaded().then((function(data) {
      $log.debug(data);
      this.header = data.article1.header;
      this.text = data.article1.text;
    }).bind(this));*/

  }

}());
