require.config({
    baseUrl: "js",
    paths: {
        'jQuery': 'vendors/jquery/jquery-3.2.1.min',
        'angular': 'vendors/angular/angular-1.6.1.min',
        'uiRouter': 'vendors/angular/angular-ui-router.min',
        'angularAMD': 'vendors/angular/angularAMD.min',
        'uiBootstrap': 'vendors/angular/ui-bootstrap-tpls-2.5.0.min',
        'bootstrapLightbox': 'vendors/angular/angular-bootstrap-lightbox.min',
        'angularSanitize': 'vendors/angular/angular-sanitize.min',
        'angularAnimate': 'vendors/angular/angular-animate.min',
        'bootstrap': 'vendors/bootstrap/js/bootstrap.min'
    },
    shim: {
        'angular': ['jQuery'],
        'bootstrap': ['jQuery'],
        'angularAMD': ['angular'],
        'uiRouter': ['angular'],
        'uiBootstrap': ['angular', 'bootstrap'],
        'bootstrapLightbox': ['uiBootstrap'],
        'angularSanitize': ['angular'],
        'angularAnimate': ['angular']
    },
    deps: [
        'app'
    ]
});