
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
                    'employment': {
                        templateUrl: 'partials/employment.html'
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
            .state('profile', {
                url: "/profile",
                views: {
                    'profile': {
                        templateUrl: 'partials/profile.html'
                    }
                }
            })
            .state('companies', {
                url: "/companies",
                views: {
                    'profile': {
                        templateUrl: 'partials/companies.html'
                    }
                }
            });
        // $locationProvider.html5Mode(true);
    });

    app.config(['$qProvider', 'LightboxProvider', function ($qProvider, LightboxProvider) {
        $qProvider.errorOnUnhandledRejections(false);
        LightboxProvider.templateUrl = 'partials/gallery-modal.html';
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
                image: 'css/images/cover-image-full.jpg',
                heading: '\"Entrepreneur, Philanthropist\"'
            }]

            $scope.galleryImages = [{
                'url': 'css/images/gallery-1.png',
                'thumbUrl': 'css/images/gallery-1-thumb.png',
                'caption': 'Gifting Mr.Backer Trichur\'s \'DOT ART\' to MOHAMMED BIN HAMAD BIN MOHAMMED AL SHARQI, CROWN PRINCE OF FUJAIRAH, UAE. It was an auspicious moment passing through in my life in the gulf soil, gifting "Dot Art" of HH HAMAD BIN MOHAMMED AL SHARQI.\
                In the presence of Mr. Faisal AK, Corporate Executive Director Malabar Gold & Co Chairman - COSMOS Sports Intl, Mr. Aak Muhammed Musthafa, MD - AAK Group Of companies, Mr. Muhammad Salikunjo, Director - Malabar Gold & KIMS Hospital, Mr.Muhasin Wandoor, Director - Orange Events Intl, Mr.Backer Trichur - Oracle & Virtuoso dot painting Artist.'
            }, {
                'url': 'css/images/gallery-2.png',
                'thumbUrl': 'css/images/gallery-2-thumb.png',
                'caption': 'MOHAMMED BIN HAMAD BIN MOHAMMED AL SHARQI, CROWN PRINCE OF FUJAIRAH, UAE'
            }, {
                'url': 'css/images/gallery-3.png',
                'thumbUrl': 'css/images/gallery-3-thumb.png',
                'caption': 'Masha\'Allah, \“Love your family. Spend time, tomorrow is not promised & today is short.”'
            }, {
                'url': 'css/images/gallery-4.png',
                'thumbUrl': 'css/images/gallery-4-thumb.png',
                'caption': 'With Irfan Pathan - Brand ambassador, Address fashion'
            }, {
                'url': 'css/images/gallery-5.png',
                'thumbUrl': 'css/images/gallery-5.png',
                'caption': 'With Dignitaries ( DWTC ) RAMADAN SUHOUR at Dubai World Trade Centre (7/06/2017 )'
            }, {
                'url': 'css/images/gallery-6.png',
                'thumbUrl': 'css/images/gallery-6.png',
                'caption': 'Universal Hospital Iftar at Etihad Towers, Abu Dhabi, United Arab Emirates'
            }, {
                'url': 'css/images/gallery-7.png',
                'thumbUrl': 'css/images/gallery-7.png',
                'caption': 'With Mr. HAMAD ABDULLA EISA BUSHAB AL SUWAIDI, Mr. NAZAR ABDULLA EISA BUSHAB AL SUWAIDI, Mr.Faisal AK - Executive Director,Malabar Gold & Diamonds & Hadi Muhammed Faisal '
            }, {
                'url': 'css/images/gallery-8.png',
                'thumbUrl': 'css/images/gallery-8.png',
                'caption': 'Indelible Moment at HH Fujairah Palace with Eminent Entrepreneur #DrBRShetty (Executive Chairman NMC Healthcare and Chairman of UAE Exchange),Mr. Faisal AK ,( Corporate Executive Director , Malabar Gold) Mr. Aak Muhammed Musthafa ( MD AAK Group of companies ), Mr. Muhammad Salikunjo ( Director Malbar Gold & Kims Hospital ) , and an oracle & virtuoso dot painting artist Mr.Backer Trichur'
            }, {
                'url': 'css/images/gallery-9.png',
                'thumbUrl': 'css/images/gallery-9.png',
                'caption': 'On behalf of Orange Events, promulgates brochure of Orange Events from Inducement Tycoon Mr. A.K.Faisal (Corporate Executive Director, Malabar Gold & Diamonds ) to the young and Impetus Mogul Mr. Mehroof Manalody, Chairman & MD G-Tec Education)held at Dubai on 13th of June , in presence with Mr.Faisal Neelambra, MD-Luxuria Watches& D\'Sign Interiors ) Mr.Rejy Narein Rajeesh ( Creative Head -Orange Events) , Mr.Jaya Kumar ( Business Designer and Entrepreneur , Florris Group, Habbebi Documents, IMA IT solution & Orange Events ), Muhasin Babu ( Director Marketing -Orange Events ) & Shafeek Vahab ( Director Program- Orange Events )'
            }, {
                'url': 'css/images/gallery-10.png',
                'thumbUrl': 'css/images/gallery-10.png'
            }, {
                'url': 'css/images/gallery-11.png',
                'thumbUrl': 'css/images/gallery-11.png'
            }, {
                'url': 'css/images/gallery-12.png',
                'thumbUrl': 'css/images/gallery-12.png',
                'caption': ''
            }, {
                'url': 'css/images/gallery-13.png',
                'thumbUrl': 'css/images/gallery-13.png'
            }, {
                'url': 'css/images/gallery-14.png',
                'thumbUrl': 'css/images/gallery-14.png'
            }, {
                'url': 'css/images/gallery-15.png',
                'thumbUrl': 'css/images/gallery-15.png'
            }];

            $scope.employmentImages = [{
                position: 'MANAGING DIRECTOR',
                url: 'css/images/luxuria.png',
                thumbUrl: 'css/images/luxuria.png',
                caption: 'The Luxuria retail brand was born in 2014, and has grown to 5 Retail Store Locations in high traffic value destinations in unite Arab Emirates and a well curated website that supports direct Consumer communication. Luxuria offers classic watches for men, elegant gold and silver watches for women, where each watch is a paragon of quality and precision engineering.',
                details: {
                    name: 'LUXURIA',
                    place: 'ABU DHABI',
                },
                description: [{
                    section: 'Retail',
                    points: [
                        'KM Trading Group',
                        'Address Men\'s Fashion',
                        'Cosmo Sports',
                        'Alquoz Macine Group',
                        'Spinneys Group'
                    ]
                }, {
                    section: 'Corporate Sales',
                    points: [
                        'Branded Watches',
                        'Branded Perfumes',
                        'Branded Accessories'
                    ]
                }]
            }, {
                position: 'MANAGING DIRECTOR',
                url: 'css/images/d-sign.jpg',
                thumbUrl: 'css/images/d-sign.jpg',
                caption: '',
                details: {
                    name: 'D\'SIGN INTERIOR',
                    place: 'FUJAIRAH',
                },
                description: [{
                    section: 'Home',
                    points: [
                        'Bedroom Furniture Arrangement',
                        'Bedroom Colours',
                        'Flooring',
                        'Lighting'
                    ]
                }, {
                    section: 'Office',
                    points: [
                        'Traditional Workspace',
                        'Classy Office',
                        'Efficient Floor',
                        'Progressiv Firm'
                    ]
                }]
            }, {
                position: 'MANAGING PARTNER',
                url: 'css/images/amigos.png',
                thumbUrl: 'css/images/amigos.png',
                details: {
                    name: 'AMIGOS EXHIBITION LLC',
                    place: 'DUBAI',
                },
                description: [{
                    section: 'Designing',
                    points: [
                        'Exhibition Stand Design',
                        'Exhibition Booth Design',
                        'Kiosk Design',
                        'Modular Stand Design'
                    ]
                }, {
                    section: 'Printing',
                    points: [
                        'Indoor Digital Printing',
                        'Outdoor Digital Printing',
                        'Trade Show Branding',
                        'Exhibition Giveaways'
                    ]
                }, {
                    section: 'Exhibition',
                    points: [
                        'Exhibition Stand Build Up',
                        'Stand Fabrication',
                        'Trades Show Displays',
                        'Furniture on Rentals'
                    ]
                }]
            }];

            $scope.openLightboxModal = function (imageSection, index) {
                switch (imageSection) {
                    case 'gallery':
                        Lightbox.openModal($scope.galleryImages, index);
                        break;
                    case 'employment':
                        Lightbox.openModal($scope.employmentImages, index);
                        break;
                }
            };
        }
    ]);

    return angularAMD.bootstrap(app);
});

