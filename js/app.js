
'use strict';
define(['angularAMD', 'uiRouter', 'bootstrapLightbox', 'angularSanitize', 'angularAnimate', 'angularReadMore', 'directives/setViewportHeightDirective'], function (angularAMD) {
    var app = angular.module('webApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'bootstrapLightbox',
        'hm.readmore'
    ]);

    app.run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 80;
    }]);

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
        }
    ]);

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'home': {
                        templateUrl: 'partials/home.html'
                    },
                    'profile': {
                        templateUrl: 'partials/profile.html'
                    },
                    'employment': {
                        templateUrl: 'partials/employment.html'
                    },
                    'companies': {
                        templateUrl: 'partials/companies.html'
                    }
                }
            })
            .state('gallery', {
                url: "/gallery",
                views: {
                    'gallery': {
                        templateUrl: 'partials/gallery.html'
                    }
                }
            })
        $locationProvider.html5Mode(true);
    });

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

    app.controller('CommonController', ['$anchorScroll', '$location', '$scope', 'Lightbox', '$state', '$timeout',
        function ($anchorScroll, $location, $scope, Lightbox, $state, $timeout) {
            $scope.isDomLoaded = false;
            $scope.$on('$viewContentLoaded', function(){
                $timeout(function () {
                    $scope.isDomLoaded = true;
                }, 500);
            });

            $scope.gotoAnchor = function (x) {
                $location.hash(x);
                $anchorScroll();
            };

            $scope.goToState = function (stateName, urlName) {
                $state.go(stateName);
                $timeout(function () {
                    $scope.gotoAnchor(urlName);
                });
            };
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [{
                id: 0,
                image: 'css/images/cover-image.png',
                heading: '\"Entrepreneur, Philanthropist\"'
            }]

            $scope.galleryImages = [{
                'url': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.2&disp=inline&safe=1&attbid=ANGjdJ8VyABOzVG4GOJNMeNY1fMINK0MWH_-N4sQrA9qxnRPJkPzHb9c0X2F6amGdqsYg3ICgGZj8J3-rhN2vK_awpkwF4LQns49h7o2yY2GUKWKS22sTnyUuUnkZ3Q&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800',
                'thumbUrl': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.2&disp=inline&safe=1&attbid=ANGjdJ8VyABOzVG4GOJNMeNY1fMINK0MWH_-N4sQrA9qxnRPJkPzHb9c0X2F6amGdqsYg3ICgGZj8J3-rhN2vK_awpkwF4LQns49h7o2yY2GUKWKS22sTnyUuUnkZ3Q&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800',
                'caption': ''
            }, {
                'url': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.3&disp=inline&safe=1&attbid=ANGjdJ_3qo7INy_Yy5ollKOz-5bvXIeC_8tyeLkL72ioDtwp78cT474gCTK0uzanm9NrjyLXOlawT209Y53aYi1b-3HUkKMmcHfcwQn4acXNHe2DpDLHH7iOyN-MO_A&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800',
                'thumbUrl': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.3&disp=inline&safe=1&attbid=ANGjdJ_3qo7INy_Yy5ollKOz-5bvXIeC_8tyeLkL72ioDtwp78cT474gCTK0uzanm9NrjyLXOlawT209Y53aYi1b-3HUkKMmcHfcwQn4acXNHe2DpDLHH7iOyN-MO_A&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800'
            }, {
                'url': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.1&disp=inline&safe=1&attbid=ANGjdJ9gKBNi2LtGmDbATMFT76bhHpBycgymwiQ5TiICgxXrkHNt54G9qq3SXyrP4G9OTEvTMeeE86f9igdu4CG2TRNhpFrDZGnt3VcLZczW-7KENo9VBqF4yGeKkuk&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800',
                'thumbUrl': 'https://mail.google.com/mail/u/0/?ui=2&ik=2df0956b6b&view=fimg&th=15cd168219e20919&attid=0.1&disp=inline&safe=1&attbid=ANGjdJ9gKBNi2LtGmDbATMFT76bhHpBycgymwiQ5TiICgxXrkHNt54G9qq3SXyrP4G9OTEvTMeeE86f9igdu4CG2TRNhpFrDZGnt3VcLZczW-7KENo9VBqF4yGeKkuk&ats=1499028070827&rm=15cd168219e20919&zw&sz=w1440-h800',
                'caption': ''
            }, {
                'url': 'https://lh6.googleusercontent.com/tTIh_XQteyloeH5ogZ5PUbPT9mdVa5oP3GBJCRI32YgbtAAMG-9at-94OjYOUPXGR3UKwKVflPy3vd0=w1440-h800-rw',
                'thumbUrl': 'https://lh6.googleusercontent.com/tTIh_XQteyloeH5ogZ5PUbPT9mdVa5oP3GBJCRI32YgbtAAMG-9at-94OjYOUPXGR3UKwKVflPy3vd0=w1440-h800-rw'
            }, {
                'url': 'https://lh4.googleusercontent.com/5a9qfi-quGTLglWDM0CTwDapH7qntUwZStw4Gkg-7h1qbrGf-xy27tgtDzaAHw8JdFz_XeCWgm5IbOk=w1440-h800-rw',
                'thumbUrl': 'https://lh4.googleusercontent.com/5a9qfi-quGTLglWDM0CTwDapH7qntUwZStw4Gkg-7h1qbrGf-xy27tgtDzaAHw8JdFz_XeCWgm5IbOk=w1440-h800-rw',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18921130_10203408744015092_6794833340120573474_o.jpg?oh=adb2d87f7ff1542566f802659d35ec94&oe=59CEEE2F',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18921130_10203408744015092_6794833340120573474_o.jpg?oh=adb2d87f7ff1542566f802659d35ec94&oe=59CEEE2F'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18953338_10203405953105321_699891125219995713_o.jpg?oh=e5e1fc07bd4895bc6218fb2d268ba0a5&oe=59CEEC6A',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18953338_10203405953105321_699891125219995713_o.jpg?oh=e5e1fc07bd4895bc6218fb2d268ba0a5&oe=59CEEC6A',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814540_10203395441482537_2502095319364721193_o.jpg?oh=8834bd2e6a79e75c1fa6615db044232c&oe=59E498C4',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814540_10203395441482537_2502095319364721193_o.jpg?oh=8834bd2e6a79e75c1fa6615db044232c&oe=59E498C4'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814558_10203384646612672_811847553722283589_o.jpg?oh=fc21c2ce7648cba79d0d4710311701f9&oe=59C5221A',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814558_10203384646612672_811847553722283589_o.jpg?oh=fc21c2ce7648cba79d0d4710311701f9&oe=59C5221A'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19400262_10203462697563897_3262037357523189151_o.jpg?oh=f19bc8c118cb840f6bf04cfe7b823cd2&oe=59CDCF1E',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19400262_10203462697563897_3262037357523189151_o.jpg?oh=f19bc8c118cb840f6bf04cfe7b823cd2&oe=59CDCF1E',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19221731_1657044671002235_13802316879551189_o.jpg?oh=2207380ba5f80620adee9338113961f2&oe=59CCAE86',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19221731_1657044671002235_13802316879551189_o.jpg?oh=2207380ba5f80620adee9338113961f2&oe=59CCAE86'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/19146045_10203431448742696_2177249613067306637_n.jpg?oh=b25c27347e77242dbfb7b8c28b56daab&oe=59E9355F',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/19146045_10203431448742696_2177249613067306637_n.jpg?oh=b25c27347e77242dbfb7b8c28b56daab&oe=59E9355F',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19055160_10203418850267742_4094927806329081164_o.jpg?oh=db76a600a398fd948c1c37706c29421b&oe=59EA7D15',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/19055160_10203418850267742_4094927806329081164_o.jpg?oh=db76a600a398fd948c1c37706c29421b&oe=59EA7D15'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/18920175_10203411330519753_3022884927660727640_n.jpg?oh=d18f1edc735757d910602ae42f18efcb&oe=59D3452F',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/18920175_10203411330519753_3022884927660727640_n.jpg?oh=d18f1edc735757d910602ae42f18efcb&oe=59D3452F',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18921130_10203408744015092_6794833340120573474_o.jpg?oh=adb2d87f7ff1542566f802659d35ec94&oe=59CEEE2F',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18921130_10203408744015092_6794833340120573474_o.jpg?oh=adb2d87f7ff1542566f802659d35ec94&oe=59CEEE2F'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18953338_10203405953105321_699891125219995713_o.jpg?oh=e5e1fc07bd4895bc6218fb2d268ba0a5&oe=59CEEC6A',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18953338_10203405953105321_699891125219995713_o.jpg?oh=e5e1fc07bd4895bc6218fb2d268ba0a5&oe=59CEEC6A',
                'caption': ''
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814540_10203395441482537_2502095319364721193_o.jpg?oh=8834bd2e6a79e75c1fa6615db044232c&oe=59E498C4',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814540_10203395441482537_2502095319364721193_o.jpg?oh=8834bd2e6a79e75c1fa6615db044232c&oe=59E498C4'
            }, {
                'url': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814558_10203384646612672_811847553722283589_o.jpg?oh=fc21c2ce7648cba79d0d4710311701f9&oe=59C5221A',
                'thumbUrl': 'https://scontent.fblr1-1.fna.fbcdn.net/v/t31.0-8/18814558_10203384646612672_811847553722283589_o.jpg?oh=fc21c2ce7648cba79d0d4710311701f9&oe=59C5221A'
            }];

            $scope.openLightboxModal = function (imageSection, index) {
                switch (imageSection) {
                    case 'gallery':
                        Lightbox.openModal($scope.galleryImages, index);
                        break;
                    case 'timeline':
                        Lightbox.openModal($scope.timelineImages, index);
                        break;
                }
            };
        }
    ]);

    return angularAMD.bootstrap(app);
});

