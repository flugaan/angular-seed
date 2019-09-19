(function(){

  angular.module('app')
    .controller('TeamController', ['$state', TeamController]);

  function TeamController($state){

    var vm = this;

    vm.message = 'Team';

  }

}());
