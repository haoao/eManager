appServices.factory('PersonService', function($http) {
    var BASE_URL = "http://api.randomuser.me/";
    var items = [];

    return {
        GetFeed: function() {
            return $http.get(BASE_URL + '?results=30').then(function(response) {
                items = response.data.results;
                return items;
            });
        }
    }
})