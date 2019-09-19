(function(){

  angular.module('app')
    .controller('GamesController', ['$state', GamesController]);

  function GamesController($state){

    var vm = this;

    vm.message = 'Games';

  }

}());
