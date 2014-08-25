/**
 * Services that persists and retrieves data from localStorage
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