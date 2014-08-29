/**
 * Services that persists and retrieves data from localStorage
 * The idea of using localStorage is inspired by AngularJS todoMVC project
 * https://github.com/tastejs/todomvc/tree/gh-pages/architecture-examples/angularjs
 */
angular.module('jsonEditorApp')
	.factory('jsonStorage', function () {
		var STORAGE_ID = 'json-editor';
		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (data) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(data));
			}
		};
	});