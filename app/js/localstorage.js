/*global angular */

/**
 * Services that persists and retrieves Shops from localStorage
 */
angular.module('jsonEditorApp')
	.factory('jsonStorage', function () {
		'use strict';

		var STORAGE_ID = 'json-editor';

		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (shop) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(shop));
			}
		};
	});