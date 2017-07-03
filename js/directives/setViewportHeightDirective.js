define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('setViewportHeight', ['$window', function ($window) {
        return {
            restrict: 'A',
            scope: {
                adjustment: '@'
            },
            link: function (scope, element, attrs) {
                var _setHeight,
                    adjustment = scope.$eval(attrs.adjustment) || 0;

                _setHeight = function () {
                    element.css({
                        maxHeight: $window.innerHeight - adjustment,
                        transition: 'max-height 1s ease-out'
                    });
                };
                _setHeight();
                angular.element($window).on('resize', _setHeight);
            }
        };
    }]);
});