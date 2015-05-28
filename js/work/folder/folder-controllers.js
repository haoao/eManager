appCtrls.controller('FolderCtrl', function($scope, $ionicActionSheet) {
    // Triggered on a button click, or some other target
    $scope.folderAdd = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            titleText: "",
            buttons: [
                { text: "创建文件夹" },
                { text: "拍照上传" },
                { text: "选择已有照片" }
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