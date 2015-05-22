// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'chart.js', 'ionic.contrib.frostedGlass'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.work', {
    url: '/work',
    views: {
      'tab-work': {
        templateUrl: 'templates/tab-work2.html',
        controller: ''
      }
    }
  })

  .state('tab.project', {
      url: '/project',
      views: {
        'tab-project': {
          templateUrl: 'templates/work/project/project-list.html',
          controller: 'ProjectListCtrl'
        }
      }
    })

  .state('tab.inbox', {
    url: '/inbox',
    views: {
      'tab-inbox': {
        templateUrl: 'templates/tab-inbox.html',
        controller: 'InboxCtrl'
      }
    }
  })
  
  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  })

  .state('tab.work-projectList', {
    url: '/work-projectList',
    views: {
      'tab-project': {
        templateUrl: "templates/work/project/project-list.html",
        controller: 'ProjectListCtrl'
      }
    }
  })

  .state('tab.work-projectDetail', {
    url: '/work-projectDetail',
    views: {
      'tab-project': {
        templateUrl: "templates/work/project/project-detail.html",
        controller: ''
      }
    }
  })

  .state('tab.work-projectAdd', {
    url: '/work-projectAdd',
    views: {
      'tab-project': {
        templateUrl: "templates/work/project/project-add.html",
        controller: ''
      }
    }
  })

  .state('tab.more-im', {
    url: '/more-im',
    views: {
      'tab-more': {
        templateUrl: "templates/more/im.html",
        controller: 'MoreCtrl'
      }
    }
  })

  .state('tab.work-taskList', {
    url: '/work-taskList',
    views: {
      'tab-work': {
        templateUrl: "templates/work/task/task-list.html",
        controller: ''
      }
    }
  })

  .state('tab.work-taskAdd', {
    url: '/work-taskAdd',
    views: {
      'tab-work': {
        templateUrl: "templates/work/task/task-add.html",
        controller: ''
      }
    }
  })

  .state('tab.work-shareList', {
    url: '/work-shareList',
    views: {
      'tab-work': {
        templateUrl: "templates/work/share/share-list.html",
        controller: 'ShareCtrl'
      }
    }
  })

  .state('tab.work-shareAdd', {
    url: '/work-shareAdd',
    views: {
      'tab-work': {
        templateUrl: "templates/work/share/share-add.html",
        controller: ''
      }
    }
  })

  .state('tab.work-scheduleList', {
    url: '/work-scheduleList',
    views: {
      'tab-work': {
        templateUrl: "templates/work/schedule/schedule-list.html",
        controller: ''
      }
    }
  })

  .state('tab.work-scheduleAdd', {
    url: '/work-scheduleAdd',
    views: {
      'tab-work': {
        templateUrl: "templates/work/schedule/schedule-add.html",
        controller: ''
      }
    }
  })

  .state('tab.work-oaList', {
    url: '/work-oaList',
    views: {
      'tab-work': {
        templateUrl: "templates/work/oa/oa-list.html",
        controller: 'OaCtrl'
      }
    }
  })

  .state('tab.work-crmList', {
    url: '/work-crmList',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-list.html",
        controller: ''
      }
    }
  })

  .state('tab.work-crmBoard', {
    url: '/work-crmBoard',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-board.html",
        controller: 'CrmCtrl'
      }
    }
  })

  .state('tab.work-crmXsxs', {
    url: '/work-crmXsxs',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-xsxs.html",
        controller: 'CrmCtrl'
      }
    }
  })

  .state('tab.work-crmXsjh', {
    url: '/work-crmXsjh',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-xsjh.html",
        controller: ''
      }
    }
  })

  .state('tab.work-crmCustomer', {
    url: '/work-crmCustomer',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-customer.html",
        controller: ''
      }
    }
  })

  .state('tab.work-crmProduct', {
    url: '/work-crmProduct',
    views: {
      'tab-work': {
        templateUrl: "templates/work/crm/crm-product.html",
        controller: ''
      }
    }
  })

  .state('tab.inbox-detail', {
    url: '/inbox-detail',
    views: {
      'tab-inbox': {
        templateUrl: "templates/inbox/inbox-detail.html",
        controller: ''
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/work');

});
