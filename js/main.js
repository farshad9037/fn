var app = angular.module('webApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'bootstrapLightbox']);

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
                'gallery': {
                    templateUrl: 'partials/gallery.html'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                }
            }
        })
    $locationProvider.html5Mode(true);
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('CommonCtrl', ['$anchorScroll', '$location', '$scope', 'Lightbox',
    function ($anchorScroll, $location, $scope, Lightbox) {
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

        $scope.images = [{
            'url': 'css/images/thumb_main_1.png',
            'thumbUrl': 'css/images/thumb_main_1.png',
            'caption': ''
        }, {
            'url': 'css/images/thumb_main_2.png',
            'thumbUrl': 'css/images/thumb_main_2.png'
        }, {
            'url': 'css/images/thumb_main_3.png',
            'thumbUrl': 'css/images/thumb_main_3.png',
            'caption': ''
        }, {
            'url': 'css/images/thumb_main_5.png',
            'thumbUrl': 'css/images/thumb_main_5.png'
        }, {
            'url': 'css/images/thumb_main_6.png',
            'thumbUrl': 'css/images/thumb_main_6.png',
            'caption': ''
        }, {
            'url': 'css/images/thumb_main_7.png',
            'thumbUrl': 'css/images/thumb_main_7.png'
        }, {
            'url': 'css/images/thumb_main_8.png',
            'thumbUrl': 'css/images/thumb_main_8.png',
            'caption': ''
        }, {
            'url': 'css/images/thumb_main_9.png',
            'thumbUrl': 'css/images/thumb_main_9.png'
        }, {
            'url': 'css/images/thumb_main_10.png',
            'thumbUrl': 'css/images/thumb_main_10.png'
        }, {
            'url': 'css/images/thumb_main_11.png',
            'thumbUrl': 'css/images/thumb_main_11.png',
            'caption': ''
        }, {
            'url': 'css/images/thumb_main_12.png',
            'thumbUrl': 'css/images/thumb_main_12.png'
        }, {
            'url': 'css/images/thumb_main_13.png',
            'thumbUrl': 'css/images/thumb_main_13.png'
        }];

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };
    }
]);

