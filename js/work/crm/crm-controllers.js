appCtrls.controller('CrmCtrl', function($scope, $ionicActionSheet) {
    $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.pieData = [300, 500, 100];

    $scope.lineLabels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月"];
    $scope.lineSeries = ['小张', '小李'];
    $scope.lineData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.barLabels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月"];
    $scope.barSeries = ['小张', '小李'];

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

appCtrls.controller('ContactCtrl', function($scope, $timeout, PersonService) {
    $scope.items = [{"user":{"gender":"female","name":{"title":"mrs","first":"ava","last":"hoffman"},"location":{"street":"3987 park road","city":"exeter","state":"berkshire","postcode":"CI5P 3BB"},"email":"ava.hoffman30@example.com","username":"smallostrich534","password":"ramses","salt":"eU3XcP3T","md5":"06254d3e648f75ab73ec2ed035af89f9","sha1":"38685aba0a228f3d3d914c976140584d6936e9a9","sha256":"6161930ae840feb5eadd37fe7fb4354704214a9da7e41bce277efdd35c74e13c","registered":"1378179821","dob":"956494252","phone":"017683 06095","cell":"0709-030-050","NINO":"BT 31 46 94 N","picture":{"large":"http://api.randomuser.me/portraits/women/46.jpg","medium":"http://api.randomuser.me/portraits/med/women/46.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/46.jpg"},"version":"0.6","nationality":"GB"},"seed":"a1fedaf5df6a709204"}]

    PersonService.GetFeed( $scope.items);
})

appCtrls.controller('SchdCtrl',function($scope, $ionicActionSheet) {
    $scope.schdMore = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            titleText: "",
            buttons: [
                { text: "分享到联系人" },
                { text: "分享到工作圈" }
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
    };
})