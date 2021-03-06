define(['angularAMD', 'angular-route', 'angular-cookies', 'angular-sanitize', 'angular-localization', 'moment', 'storage', 'controllers'], function (angularAMD) {
	//moment.locale('en');
    console.log('loading');
    var app = angular.module("newtab", ['ngRoute', 'ngLocalize', 'ngLocalize.Config', 'ngLocalize.InstalledLanguages', 'services', 'controllers']);
    app.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.
    	when('/', {
    		templateUrl : 'js/scripts/view/dashboard.html',
    		controller : 'DashboardCtrl'
    	}).
    	otherwise({
    		redirectTo : '/'
    	});
    }])
    .value('localeConf', {
        basePath: 'languages',
        defaultLocale: 'en-US',
        sharedDictionary: 'time',
        fileExtension: '.lang.json',
        persistSelection: true,
        cookieName: 'COOKIE_LOCALE_LANG',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
        delimiter: '::'
    })
    .value('localeSupported', [
        'en-US',
        'fi-FI'
    ])
    .value('localeFallbacks', {
        'en': 'en-US',
        'fi': 'fi-FI'
    });

    var cssPaths = [
    	"css/normalize.min.css",
    	"css/app.css",
    	"css/fonts.css",
    	"css/typography.css",
    	"css/font-awesome.min.css"
    ]

    angular.forEach(cssPaths, function(value) {
		loadCss(value);
    });

    console.log('bootstraping');
    return angularAMD.bootstrap(app);

    function loadCss(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
});