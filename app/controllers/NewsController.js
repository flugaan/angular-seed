(function(){

  angular.module('app')
    .controller('NewsController', ['$state', NewsController]);

  function NewsController($state){

    var vm = this;

    vm.message = 'News';

  }

}());
