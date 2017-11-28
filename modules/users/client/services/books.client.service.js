'use strict';

// Authentication service for user variables
angular.module('users').factory('Books', ['$resource',
  function($resource) {
		return $resource('api/books/:booksId', { booksId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

