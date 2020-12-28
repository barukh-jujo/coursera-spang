(function() {
    'use strict';

    angular.module('lunchApp', [])
        .controller('lunchCtl', lunchCtl);

    lunchCtl.$inject = ['$scope'];

    function lunchCtl($scope) {
        $scope.result = "";
        $scope.splitLunch = function(lunchStr) {

            if (lunchStr === undefined || lunchStr === null) {
                $scope.result = "Please enter data first! ";
            } else {
                var arr = lunchStr.split(",");

                var noNull = arr.filter(item => item);

                if (noNull.length > 3)
                    $scope.result = "Too much!";
                else
                    $scope.result = "Enjoy!";
            }
        };


    }

})();