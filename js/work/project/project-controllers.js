/**
 * Created by fenghao1 on 15/5/8.
 */

appCtrls.controller('ProjectListCtrl', function($scope, $ionicLoading, $ionicListDelegate, $timeout, $http) {
    $scope.projects = [];
    var idx = 0;
    $scope.load = function() {
        //显示载入指示器
        $ionicLoading.show({
            template: "正在载入数据，请稍后..."
        });
        //延时2000ms来模拟载入的耗时行为
        $timeout(function(){
            for(var i  =0; i < 10; i++, idx++) $scope.projects.unshift("项目 " + idx);
            //隐藏载入指示器
            $ionicLoading.hide();
        },2000);
    };
    $scope.doRefresh = function() {
        $timeout( function() {
            //simulate async response
            var r = Math.floor(Math.random() * 1000) + 4;
            $scope.projects.push('下拉刷新的项目' + r);
            //console.log('Refreshing!' + r);
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        }, 2000);
    };


     $scope.hasmore = true;
     //更多
     $scope.loadMore = function() {

         //这里使用定时器是为了缓存一下加载过程，防止加载过快
         $timeout(function() {
            if($scope.hasmore){
                var r = Math.floor(Math.random() * 1000) + 4;
                $scope.projects.push('上拉刷新的项目' + r);
                //console.log('loadMore!' + r);
                if($scope.projects.length == 20) {
                    $scope.hasmore = false;
                }
                
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }
         },2000);
     };
     $scope.moreDataCanBeLoaded = function(){
        return $scope.hasmore;
     }

});