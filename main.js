var firstApp = angular.module("firstApp", []);

firstApp.controller('taskController',function($scope){
    $scope.task= [];
    $scope.addTask=function(data) {
        if ((0 !== data.length)||(" "===data)) {
            var cur_date = new Date();
            $scope.task.push({
                name: data,
                date: cur_date.getDay() + "/" + (cur_date.getMonth() + 1) + "/" + cur_date.getFullYear()
            });
        }
        else
            alert("empty value");
    };

    $scope.removeTask = function(index){
        $scope.task.splice(index, 1);
    };
});
