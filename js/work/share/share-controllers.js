

appCtrls.controller('ShareCtrl', function($scope, Shares) {
    $scope.shares = Shares.all();
    $scope.remove = function(share) {
        Inboxs.remove(share);
    }
});