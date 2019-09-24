(function(){

  angular.module('app')
    .controller('PlayerController', ['$state', 'firebaseService', '$log', '$stateParams', PlayerController]);

  function PlayerController($state, firebaseService, $log, $stateParams){

    var vm = this;

    var onPlayerComplete = function(data){
      vm.player = data;
    }

    var onError = function(reason){
      vm.error = 'Error fetching the data';
    }

    if ($stateParams.id < 10 && $stateParams.id > 0){
      var id = '00' + $stateParams.id;
    }
    else {
      var id = '0' + $stateParams.id;
    }

    firebaseService.getPlayer('men', id).then(onPlayerComplete, onError);
  }

}());
