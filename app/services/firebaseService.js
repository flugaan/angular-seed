(function(){

  angular.module("app")
    .factory('firebaseService', ['$firebaseObject', firebaseService]);

  function firebaseService($firebaseObject) {

    var config = {
      apiKey: "AIzaSyDxgP8X48Ej-0xcX1U0g0X85LxXA6Q_fiA",
      authDomain: "sportsteamwebpage-a77fc.firebaseapp.com",
      databaseURL: "https://sportsteamwebpage-a77fc.firebaseio.com",
      projectId: "sportsteamwebpage-a77fc",
      storageBucket: "sportsteamwebpage-a77fc.appspot.com",
      messagingSenderId: "310389626211",
      appId: "1:310389626211:web:9aab1b3fc64bf3b5d46f56"
    };

    firebase.initializeApp(config);

    var getAllArticles = function(){
      return $firebaseObject(firebase.database().ref().child('articles'))
                .$loaded().then(function(data) {
                    return data;
                });
    };

    var getArticle = function(id){
      return $firebaseObject(firebase.database().ref().child('articles/' + id))
                .$loaded().then(function(data) {
                    return data;
                });
    };

    var getPlayers = function(team){
      return $firebaseObject(firebase.database().ref().child('teams/' + team + '/'))
                .$loaded().then(function(data) {
                    return data;
                });
    };

    var getPlayer = function(team, id){
      return $firebaseObject(firebase.database().ref().child('teams/' + team + '/' + id + '/'))
                .$loaded().then(function(data) {
                    return data;
                });
    };

    return {
        getAllArticles: getAllArticles,
        getArticle: getArticle,
        getPlayers: getPlayers,
        getPlayer: getPlayer
    };

  };



}());
