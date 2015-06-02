appServices.factory('PersonService', function() {
    //var BASE_URL = "http://api.randomuser.me/";
    //var items = [];
    //
    //return {
    //    GetFeed: function() {
    //        return $http.get(BASE_URL + '?results=30').then(function(response) {
    //            items = response.data.results;
    //            return items;
    //        });
    //    }
    //}
    return {
        GetFeed: function(items) {
            items.sort(function(a, b) {
                var textA = a.user.name.first.toUpperCase();
                var textB = b.user.name.first.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })

            /*
             items.sort(function(a,b){
             var textA = a.user.gender.toUpperCase();
             var textB = b.user.gender.toUpperCase();
             return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
             })*/

            //$scope.dividerFunction = function(key) {
            //    return key;
            //}

            return items;
        }
    }
})