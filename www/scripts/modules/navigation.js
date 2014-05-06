'use strict';

angular.module('mindmaker.menu', [])
.run(['$rootScope', '$spMenu', function($rootScope, $spMenu){
    $rootScope.$spMenu = $spMenu;
}])
.provider('$spMenu', function(){
    this.$get = [function(){
        var menu = {};

        menu.toggleLeft = function toggleLeft() {
            var menu = angular.element(document.querySelector('#sp-nav-left'));
            var centralPage = angular.element(document.querySelector('#sp-page'));
            menu.toggleClass('show-left');
            centralPage.toggleClass('show-left');
        };

        menu.toggleRight = function toggleRight() {
            var menu = angular.element(document.querySelector('#sp-nav-right'));
            var centralPage = angular.element(document.querySelector('#sp-page'));
            centralPage.toggleClass('show-right');
            menu.toggleClass('show-right');
        };

        return menu;
    }];
})
.directive('clickLink', ['$location', function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $location.path(attrs.clickLink);
                });
            });
        }
    };
}]);