var appCtrls = angular.module('starter.controllers', [])

.controller('WorkCtrl', function($scope) {

})

.controller('ProjectCtrl', function($scope) {

})

.controller('InboxCtrl', function($scope, Inboxs) {
    $scope.inboxs = Inboxs.all();
    $scope.remove = function(inbox) {
        Inboxs.remove(inbox);
    }
})

.controller('MoreCtrl', function($scope, $ionicPopup, $http, $state,$ionicFrostedDelegate, $ionicScrollDelegate, $timeout,$rootScope) {
    $scope.showInfo = function() {
        $ionicPopup.alert({
            title: "关于",
            template: "e管理版本1.0"
        });
    };

    $scope.goIm = function() {
        $state.go('tab.more-im');
    }

    var messageOptions = [{
        content: '<p>Wow, this is really something huh?</p>'
    }, {
        content: '<p>Yea, it\'s pretty sweet</p>'
    }, {
        content: '<p>I think I like Ionic more than I like ice cream!</p>'
    }, {
        content: '<p>Gee wiz, this is something special.</p>'
    }, {
        content: '<p>Is this magic?</p>'
    }, {
        content: '<p>Am I dreaming?</p>'
    }, {
        content: '<p>Am I dreaming?</p>'
    }, {
        content: '<p>Yea, it\'s pretty sweet</p>'
    }, {
        content: '<p>I think I like Ionic more than I like ice cream!</p>'
    }, ];

    var messageIter = 0;
    //$scope.messages = messageOptions.slice(0, messageOptions.length);
    $scope.messages =[];

    $scope.add = function() {
        var nextMessage = messageOptions[messageIter++ % messageOptions.length];
        $scope.messages.push(angular.extend({}, nextMessage));

        // Update the scroll area and tell the frosted glass to redraw itself
        $ionicScrollDelegate.resize();
        $ionicFrostedDelegate.update();
        $timeout(function() {
            $ionicScrollDelegate.scrollBottom(true);
        }, 1);
    };

    var urlAppGroup = 'http://www.viizee.com/?s=/Babythings';
    //反馈
    $scope.feedback = function() {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
            template: '<textarea rows="5" ng-model="data.feedback">',
            title: '意见反馈',
            subTitle: '非常感谢您的支持',
            scope: $scope,
            buttons: [
                {text: '取消'},
                {
                    text: '<b>提交</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.feedback) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.feedback;
                        }
                    }
                }
            ]
        });
        myPopup.then(function (res) {
            $http.get(urlAppGroup + '/Index/feedback/content/' + res).then(function (response) {
                $scope.feedbackResult = response.data;
            });
        });
    };})
;
