var app = angular.module('webApp', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'bootstrapLightbox'
]);

app.config([
    '$urlRouterProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    function ($urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };
    }
]);

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

        $scope.openLightboxModal = function (imageSection, index) {
            switch(imageSection) {
                case 'gallery':
                    Lightbox.openModal($scope.galleryImages, index);
                case 'timeline':
                    Lightbox.openModal($scope.timelineImages, index);
            }
        };
    }
]);

