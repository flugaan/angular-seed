(function(){

  angular.module('app')
    .controller('TeamController', ['$state', 'firebaseService', '$log', TeamController]);

  function TeamController($state, firebaseService, $log){

    var vm = this;

    var onPlayersComplete = function(data){
      vm.players = data;
    }

    var onError = function(reason){
      vm.error = 'Error fetching the data';
    }

    firebaseService.getPlayers('men').then(onPlayersComplete, onError);

  }

}());
