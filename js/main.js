require.config({
    baseUrl: "js",
    paths: {
        'jQuery': 'vendors/jquery/jquery-3.2.1.min',
        'angular': 'vendors/angular/angular-1.6.1',
        'uiRouter': 'vendors/angular/angular-ui-router',
        'angularAMD': 'vendors/angular/angularAMD.min',
        'uiBootstrap': 'vendors/angular/ui-bootstrap-tpls-2.5.0',
        'bootstrapLightbox': 'vendors/angular/angular-bootstrap-lightbox',
        'angularSanitize': 'vendors/angular/angular-sanitize',
        'angularAnimate': 'vendors/angular/angular-animate',
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