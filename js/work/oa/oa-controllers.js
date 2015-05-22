appCtrls.controller('OaCtrl', function($scope, $ionicActionSheet) {
    // Triggered on a button click, or some other target
    $scope.showOaAdd = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            titleText: "新建",
            buttons: [
                { text: "请假申请" },
                { text: "报销申请" },
                { text: "外出申请" }
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
});