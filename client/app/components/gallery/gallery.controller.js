(function(){'use strict';
function galleryCtr($scope, $http){
  $http.get('http://0.0.0.0:3000/',{})
  .then(function(response){
    $scope.data = response.data;
  });
  $scope.favorite = Math.round(Math.random() * 10);
}

angular.module('weddingApp')
  .controller('galleryCtr', ['$scope', '$http', galleryCtr]);
}());
