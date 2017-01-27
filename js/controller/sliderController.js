Fideligard.controller('SliderController', ['$scope',
  function($scope){
    $scope.dateSelector = true;
    $scope.slide = 0  ;
    $scope.endDate = new Date() - 0;
    $scope.startDate = new Date() - 15897600000;
    $scope.currentDate = new Date() - 0;

    $scope.toggleSelector = function(){
      $scope.dateSelector = !$scope.dateSelector;
    }

    $scope.changeCurrentDate = function() {
      $scope.currentDate = new Date() +($scope.slide)
    }
  }]);
