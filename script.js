// Code goes here
(function () {
    "use strict";

    var homeController = function ($scope) {
        $scope.title = "Needle.com";
    };

    var dataController = function ($scope) {
        $scope.title = "Data Entry Table :";
        $scope.rowEntries = [{
            value: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0}],
            total: 0
        }];

        $scope.rowEntry = [{
            col1: 0,
            col2: 0,
            col3: 0,
            col4: 0,
            col5: 0,
            col6: 0,
            total: 0
        }];

        $scope.columnTotals = [
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
        ];

        $scope.calculateColumn = function (row, column) {
            var rowTotal = 0;
            var rowIndex = $scope.rowEntries.indexOf(row);
            var colIndex = $scope.rowEntries[rowIndex].value.indexOf(column);
            for (var i = 0; i < $scope.rowEntries[rowIndex].value.length; i++) {
                if ($scope.rowEntries[rowIndex].value[i].value) {
                    rowTotal += $scope.rowEntries[rowIndex].value[i].value * (i + 1);
                };
            };
            $scope.rowEntries[rowIndex].total = rowTotal;

            var colTotal = 0;
            for (var j in $scope.rowEntries) {
                colTotal += $scope.rowEntries[j].value[colIndex].value * (colIndex + 1);
            };
            $scope.columnTotals[colIndex].value = colTotal;

            if (rowIndex == $scope.rowEntries.length - 1) {
                $scope.rowEntries.push({ value: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0}], total: 0 });
            };
        };

    };

    var app = angular.module("needleApp", [])
    .controller("HomeController", homeController)
    .controller("DataController", dataController);
} ());
