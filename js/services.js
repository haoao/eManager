var appServices = angular.module('starter.services', [])

.factory('Inboxs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var inboxs = [{
    id: 0,
    name: '#移动互联',
    lastText: 'XXX完成了任务',
    detail: 'webApp原型试验开发',
    face: 'img/IMG_3872.JPG'
  }, {
    id: 1,
    name: '#移动互联',
    lastText: 'XXX完成了任务',
    detail: 'webApp原型试验开发',
    face: 'img/IMG_3872.JPG'
  },{
    id: 2,
    name: '#移动互联',
    lastText: 'XXX完成了任务',
    detail: 'webApp原型试验开发',
    face: 'img/IMG_3872.JPG'
  }, {
    id: 3,
    name: '#移动互联',
    lastText: 'XXX完成了任务',
    detail: 'webApp原型试验开发',
    face: 'img/IMG_3872.JPG'
  }, {
    id: 4,
    name: '#移动互联',
    lastText: 'XXX完成了任务',
    detail: 'webApp原型试验开发',
    face: 'img/IMG_3872.JPG'
  }];

  return {
    all: function() {
      return inboxs;
    },
    remove: function(inbox) {
      inboxs.splice(inboxs.indexOf(inbox), 1);
    },
    get: function(inboxId) {
      for (var i = 0; i < inboxs.length; i++) {
        if (inboxs[i].id === parseInt(inboxId)) {
          return inboxs[i];
        }
      }
      return null;
    }
  };
});
