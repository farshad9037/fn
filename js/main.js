var app = angular.module('webApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 60;
}])

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'home': {
                    templateUrl: 'partials/home.html'
                },
                'about': {
                    templateUrl: 'partials/about.html'
                },
                'childhood': {
                    templateUrl: 'partials/childhood.html'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                }
            }
        })
    $locationProvider.html5Mode(true);
});

app.controller('CommonCtrl', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
        $scope.gotoAnchor = function (x) {
            $location.hash(x);
            $anchorScroll();
        };
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [{
            id: 0,
            image: 'css/images/ambani_1.png'
        }, {
            id: 1,
            image: 'css/images/ambani_2.jpg'
        }, {
            id: 2,
            image: 'css/images/ambani_3.jpg'
        }]
    }
]);

