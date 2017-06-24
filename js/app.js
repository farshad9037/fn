
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
        // $anchorScroll.yOffset = 60;
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
                    'gallery': {
                        templateUrl: 'partials/gallery.html'
                    },
                    'companies': {
                        templateUrl: 'partials/companies.html'
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

    app.controller('CommonController', ['$anchorScroll', '$location', '$scope', 'Lightbox',
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
                image: 'css/images/ambani_1.png'
            }, {
                id: 2,
                image: 'css/images/ambani_1.png'
            }]

            $scope.timelineImages = [{
                url: 'css/images/1932.png',
                thumbUrl: 'css/images/1932.png',
                year: '1932',
                description: 'He was born in a Modh baniya family to Hirachand Govardhandas Ambani and Jamanaben in the village of Chorwad in the district of Junagarh. His father was employed as a school teacher while his mother was a homemaker.'
            }, {
                url: 'css/images/1949.png',
                thumbUrl: 'css/images/1949.png',
                year: '1949 - 1962',
                description: 'In 1949, He went to Aden (now Yemen) in search of opportunity, and worked as a dispatch clerk for A. Besse. A couple of years later, the company became a distributor for Shell products and Dhirubhai was promoted to manage the company\'s oil-filling station at the port of Aden. It was here that he dreamed of setting up and owning a refinery, which he later realized with his petrochemicals venture.\
                In 1962, He identified an emerging opportunity in yarn trading and shifted to the new business.\
                In 1965, Champaklal Damani and Dhirubhai Ambani ended their partnership and Dhirubhai started on his own.' 
            }, {
                url: 'css/images/1963.png',
                thumbUrl: 'css/images/1963.png',
                year: '1963 - 1977',
                description: 'Three years later, he changed the name of his company to Reliance Textile Industries. In 1966, he purchased land in Naroda, Gujarat, to set up a textile mill.\
                    In 1977, the company went public. Dhirubhai\'s decision to prefer the capital markets over banks as the primary source of funding for his ambitious expansion plans, was as daring as it was unprecedented.\
                    Dhirubhai is credited with starting the equity cult in India. More than 58,000 investors from various parts of India subscribed to Reliance\'s IPO in 1977.'
            }, {
                url: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril5.jpg',
                thumbUrl: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril5.jpg',
                year: '1980- 1991',
                description: 'In the early 80s, he had taken the first important step in strategic backward integration for Reliance with the commissioning of the Patalganga plant which initially manufactured polyester filament yarn and polyester staple fibre.\
                In 1991, he set up Reliance Hazira, for the manufacture of petrochemicals—the next link in the backward integration chain. At the time, Reliance Hazira represented the single largest investment made by a private sector group in India at a single location.'
            }, {
                url: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril6.jpg',
                thumbUrl: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril6.jpg',
                year: '1999',
                description: 'Dhirubhai had firmed up plans of setting up a massive grassroots refinery—the next big leap in his overall strategic roadmap for Reliance. Conceived as the world\'s largest grassroots refinery at the time, Jamnagar in Gujarat was to have an annual capacity of 27 million tonnes. In the face of formidable challenges, including a massive cyclone that flattened the project site mid-way through construction, Reliance commissioned the Jamnagar facility in 1999.'
            }, {
                url: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril7.jpg',
                thumbUrl: 'http://drop.ndtv.com/albums/BUSINESS/dhirubhai/ril7.jpg',
                year: '2002',
                description: 'In 2002, reliance entered the infocom business and went on to trigger a revolution in mobile telephony\
                He wanted Reliance to spearhead a communications revolution that would dramatically cut down the cost of connectivity, and propel India into the digital age. His ultimate ambition: To make the cost of a phone call cheaper than that of a post card. It was therefore entirely logical for Reliance to enter the telecommunications space when the sector was opened up for private participation in the 1990s.\
                In 2002, Reliance made its first discovery of oil & gas in the KG-D6 block.'
            }];

            $scope.galleryImages = [{
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
                switch(imageSection) {
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

