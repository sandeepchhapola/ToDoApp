var firstApp = angular.module("firstApp", []);

firstApp.controller('taskController', function ($scope, $window) {
    $scope.task = [];
    $scope.tsk = {};
    $scope.addTask = function (titl, desc) {
        if ((0 !== titl.length) || (" " === titl)) {
            var cur_date = new Date();
            $scope.task.push({
                title: titl,
                description: desc,
                time: cur_date.getHours() + ':' + cur_date.getMinutes(),
                date: cur_date.getDate() + "/" + (cur_date.getMonth() + 1) + "/" + cur_date.getFullYear()
            });
            if (jQuery("#collapseme").hasClass("out")) {
                jQuery("#collapseme").addClass("in");
                jQuery("#collapseme").removeClass("out");
            }
            jQuery("#jobTitle").val("");
            jQuery("#jobDesc").val("");
        }
        else
            $window.alert("empty value");
    };

    $scope.removeTask = function (index) {
        $scope.task.splice(index, 1);

        if (jQuery.isEmptyObject($scope.task)) {
            jQuery("#collapseme").addClass("out");
            jQuery("#collapseme").removeClass("in");
        }
    };

    $scope.addTaskModal = function () {
        jQuery('#getTaskModal').modal({
            keyboard: true
        });
    };
    $scope.dispalayTaskModal = function (index) {
        $scope.tsk = $scope.task[index];
        jQuery('#showTaskModal').modal({
            keyboard: true
        });
    };

});


firstApp.directive("mouseon", function () {
    return function ($scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.mouseon)
        });
    }
});

firstApp.directive("mouseoff", function () {
    return function ($scope, element, attrs) {
        element.bind("mouseleave", function () {
            element.removeClass(attrs.mouseon);
        });
    }
});
