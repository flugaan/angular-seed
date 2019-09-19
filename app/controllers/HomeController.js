(function(){

  angular.module('app')
    .controller('HomeController', ['$state', HomeController]);

  function HomeController($state){

    var vm = this;

    vm.message = 'Homepage';

  }

}());
