'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the angularDashboardApp
 */
var app = angular.module('angularDashboardApp')
  app.controller('ClientesCtrl', function($scope, $http, $rootScope, Clientes, toaster, hotkeys){
        $scope.proveedores = [];

        $scope.paraEliminar = [];

          hotkeys.add({
            combo: 'n',
            description: 'Abrir formulario de carga de clientes',
            callback: function() {
                abrirModalCarga = $("#modalCarga").modal("show");
            }
          });

        hotkeys.add({
            combo: 'c',
            description: 'Abrir calculadora',
            callback: function() {
                abrirModalCarga = $("#modalCalculadora").modal("show");
            }
          });

        $scope.cargarProveedores = function(prov) {

            var dataProv = {nombre: prov.nombre.$modelValue, apellido: prov.apellido.$modelValue, telefono: prov.telefono.$modelValue, email: prov.email.$modelValue, direccion: prov.direccion.$modelValue}

            Clientes.crear(dataProv).then(function (res){
                toaster.pop('success', "Cargado", "Se cargó correctamente");
                $("#modalCarga").modal("hide");
                $scope.listarProveedores();
                $( '#nuevoprov' ).each(function(){
                this.reset();
                });
            });
         };

         $scope.editId = '';

        $scope.editarProveedores = function(p) {
            editProv.nombre.value = p.nombre;
            editProv.apellido.value = p.apellido;
            editProv.telefono.value = p.telefono;
            editProv.email.value = p.email;
            editProv.direccion.value = p.direccion;
            $scope.editId = p.id;
            $('#modalEdit').modal('show');
        };

        $scope.submitEdit = function(prov) {

            var dataProv = {id: $scope.editId, nombre: prov.nombre.$modelValue, apellido: prov.apellido.$modelValue, telefono: prov.telefono.$modelValue, email: prov.email.$modelValue, direccion: prov.direccion.$modelValue}

            Clientes.editar(dataProv).then(function (res){
                toaster.pop('info', "Modificado", "Se modificó correctamente");
                $('#modalEdit').modal('hide');
                $scope.listarProveedores();
                $( '#nuevoprov' ).each(function(){
                this.reset();
                });                
                $scope.editId = '';
            });

        };        

        $scope.borrarProveedor = function(idProv) {
            Clientes.borrar(idProv).then(function (res){
                console.log("borrado");
                toaster.pop('warning', "Borrado", "Se borró correctamente");
                $scope.listarProveedores();  
            });
        };


        $scope.listarProveedores = function(){
            Clientes.listar().then(function (res){
                console.log("success!", res);
                $scope.proveedores = res.data;
            }, function(){
                console.log("error!");
            });
        }

        $scope.listarProveedores();

          $scope.clientsSelected = {
            p: []
          };

          $scope.checkAll = function() {
            $scope.clientsSelected.p = angular.copy($scope.proveedores);
          };
          $scope.uncheckAll = function() {
            $scope.clientsSelected.p = [];
          };
       

        $scope.borrarProveedores = function(prov) {
            angular.forEach(prov, function(p){
                console.log(JSON.stringify(p));
                Clientes.borrar(p.id).then(function (res){
                    console.log("borrado");
                    $scope.listarProveedores();  
                    toaster.pop('warning', "Borrado", "Se borró correctamente");
                });
            });
        };

        });


        app.controller('TimeCtrl', function($scope, $interval) {
              var tick = function() {
                $scope.clock = Date.now();
              }
              tick();
              $interval(tick, 1000);
        });


        app.filter('capitalize', function() {
            return function(input) {
              return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
    });

