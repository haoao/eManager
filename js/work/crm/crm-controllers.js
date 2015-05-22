appCtrls.controller('CrmCtrl', function($scope, $ionicActionSheet) {
    $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.pieData = [300, 500, 100];

    $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.lineSeries = ['Series A', 'Series B'];
    $scope.lineData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.barSeries = ['Series A', 'Series B'];

    $scope.barData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.doughnutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.doughnutData = [300, 500, 100];

    $scope.radarLabels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.radarData = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];

    $scope.paLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.paData = [300, 500, 100, 40, 120];

    $scope.groups = [];
    for (var i=0; i<10; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j=0; j<3; j++) {
            $scope.groups[i].items.push(i + '-' + j);
        }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };

    $scope.showXsxsAdd = function() {
        var hideSheet = $ionicActionSheet.show({
            titleText: "",
            buttons: [
                { text: "名片扫描" },
                { text: "手工输入" }
            ],
            buttonClicked: function(index) {
                return true;
            },
            cancelText: "取消",
            cancel: function() {
                // add cancel code..
            }
            /*,
             destructiveText: "删除",
             destructiveButtonClicked:function(){
             }*/
        });
    }
})