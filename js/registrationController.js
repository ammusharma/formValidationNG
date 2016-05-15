var RegistrationController = function RegistrationController($scope){
  var self = this;
  //console.log(this);
  //console.log($scope.js);
  //$scope.firstName = 'Amit';
  self.firstName = 'Afzal';
  self.value = "Amit Sharma";
  self.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  console.log(self.user);

};


angular
    .module('formValidation')
    .controller('RegistrationController', RegistrationController);
