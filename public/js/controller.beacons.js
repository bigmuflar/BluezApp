angular.module('module.dashboard', [])
    .controller('BeaconController', beaconCtrl);

beaconCtrl.$inject = ['clientFactory','$http'];

function beaconCtrl(clientFactory, $http){
    var beaconCtrl = this;
    console.log('hitting beacon dashboard');

      clientFactory.getExhibit().then(function(success){
        dashboard.exhibits = success.data.data;
        // console.log("dashboard data", getExhibit.data);
        // console.log('API is working', success);
      },  function(error){
        console.log('error on get API', error);
      });

      clientFactory.getObject().then(function(success){
        dashboard.artifacts = success.data.data;
      }, function(error){
        console.log('error on get Object API', error);
      });

      clientFactory.getDevices().then(function(success){
        dashboard.device = success.data
        console.log('devices api is working', success.data);
      }, function(error){
        console.log('error on API', error);
      });

};