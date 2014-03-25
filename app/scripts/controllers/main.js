'use strict';

angular.module('mindMakerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('shoppinpal.mobile-menu', [])
    .run(['$rootScope', '$spMenu', function($rootScope, $spMenu){
        $rootScope.$spMenu = $spMenu;
      }])
    .provider('$spMenu', function(){
        this.$get = [function(){
            var menu = {};

            menu.toggleLeft = function toggleLeft() {
                var menu = angular.element(document.querySelector('#sp-nav-left'));
                menu.toggleClass('show-left');
            };

            menu.toggleRight = function toggleRight() {
                var menu = angular.element(document.querySelector('#sp-nav-right'));
                menu.toggleClass('show-right');
            };

            return menu;
        }];
    });
