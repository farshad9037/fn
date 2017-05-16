
// var home, about, service, team, project, testimonials, blog, contact, footer, sections,
//     constants = {
//         HEADER_HEIGHT: 60
//     };

// $(document).ready(function () {
//     _initVariables();
//     _loadTemplates();
//     footer.hide();
// });

// function _initVariables() {
//     home = $("#home");
//     about = $("#about");
//     service = $("#service");
//     team = $("#team");
//     project = $("#project");
//     testimonials = $("#testimonials");
//     blog = $("#blog");
//     contact = $("#contact");
//     footer = $('#footer');
// }

// function _loadTemplates() {
//     home.load("partials/home.html");
//     about.load("partials/about.html");
//     service.load("partials/service.html");
//     team.load("partials/team.html");
//     project.load("partials/project.html");
//     testimonials.load("partials/testimonials.html");
//     blog.load("partials/blog.html");
//     contact.load("partials/contact.html", function () {
//         footer.show()
//     });
//     footer.load("partials/footer.html");
// }

// function scrollToSection(section) {
//     section.toggleClass('active');
//     $("html, body").animate({
//         scrollTop: section.offset().top - constants.HEADER_HEIGHT
//     }, 'medium');
// }
var app = angular.module('webApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 60;
}])
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'home': {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController'
                },
                'about': {
                    templateUrl: 'partials/about.html',
                    controller: function ($scope) { console.log('about'); }
                },
                'service': {
                    templateUrl: 'partials/service.html',
                    controller: function ($scope) { console.log('graph'); }
                },
                'footer': {
                    templateUrl: 'partials/footer.html',
                    controller: function ($scope) { console.log('graph'); }
                }
            }
        })
});
app.controller('commonCtrl', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
        $scope.gotoAnchor = function (x) {
            $location.hash(x);
            $anchorScroll();
        };
    }
]);
app.controller('HomeController', ['$scope',
    function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [{
            id: 0,
            image: 'https://yusuffali.com/media/1190/fsddsf.jpg',
            heading: 'First Heading'
        }, {
            id: 1,
            image: 'https://yusuffali.com/media/1115/yusuffegaila.jpg',
            heading: 'Second Heading'
        },{
            id: 2,
            image: 'https://yusuffali.com/media/1117/yusuffa-juffair.jpg',
            heading: 'Third Heading'
        }, {
            id: 3,
            image: 'https://yusuffali.com/media/1119/yusuffali-egypt.jpg',
            heading: 'Fourth Heading'
        }];
    }
]);

