angular.module('angularDashboardApp')
	.factory('Clientes', function ($http, $rootScope){

	/*privado*/

	var req = function(method, path, data){  
		return $http({
			method: method,
			url: $rootScope.config.service_url+'/clientes'+path,
			data:data

		});
	}


 /*publico*/

	return { 
		listar: function (data) {
			return req('GET', '', data);
		},

		editar: function (data) {
			return req('PUT','/'+data.id, data );
		},

		crear: function (data) {
			return req('POST', '', data);
		},

		borrar: function(data) {
			return req('DELETE','/'+data )
		}

	};
});