
requirejs.config({
    baseUrl: 'js',
    paths: {
        "jquery": "jquery-1.11.1"
    },
});
require(["jquery", "shirt"], function ($, a) {
	console.log($("body"), a.color);
});