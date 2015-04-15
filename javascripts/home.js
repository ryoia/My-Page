var app = angular.module('myPage',[]);
app.controller('myPageCtrl', function($scope){
  $scope.myAttr = 
    {'fun to work with': 'Y',
    'love to learn new things': 'Y',
    'vim': 'Y',
    'outdoor activities': 'trying to do more of those!',
    'go to meet-ups': 'Y',
    'Experiences': '1-year work experiences, including Spring MVC, Oracle SQL, Restful services, hibernate, and AngularJS'};
});
